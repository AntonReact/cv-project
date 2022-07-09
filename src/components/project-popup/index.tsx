// modules
import {
  useCallback, useEffect, useRef, useState,
} from 'react';
// types
import { IProject } from 'src/types/global';
// utils
import clsx from 'src/utils/clsx';
// styles
import styles from './project-popup.module.scss';

interface IProjectPopupProps {
  project: IProject;
  open: boolean;
  onClose: () => void;
}

function ProjectPopup(props: IProjectPopupProps) {
  const { project, onClose, open } = props;
  const {
    key, img, label, description, url, imgProps = {}, parentKey,
  } = project;
  const popupRef = useRef(null);
  const [isMounted, setMounted] = useState(false);
  const [coords, setCoords] = useState<{ top: number, left: number} | null>(null);

  const setCoordinates = useCallback(() => {
    const projectPoint = document.querySelector(`.${key}`);
    if (!projectPoint || !popupRef.current) return;
    const popup = popupRef.current as HTMLElement;
    const pointRect = projectPoint.getBoundingClientRect();
    const { width: popupWidth, height: popupHeight } = popup.getBoundingClientRect();
    const top = (pointRect.top + popupHeight) > window.innerHeight ? pointRect.top - popupHeight : pointRect.top;
    const left = pointRect.left > (window.innerWidth - popupWidth) ? pointRect.left - popupWidth : pointRect.left;
    setCoords({ top, left });
  }, [key]);

  const watchClickOutside = useCallback((ev: Event) => {
    if (!popupRef.current || !ev.target) return;
    const target = ev.target as HTMLElement;
    const popup = popupRef.current as HTMLElement;
    const isProjectPoint = Array.from(target.classList).includes('project-point');
    if (!popup.contains(target) && !isProjectPoint) onClose();
  }, [onClose]);

  useEffect(() => {
    setCoordinates();
  }, [setCoordinates]);

  useEffect(() => {
    const mapContainer = document.getElementById('map-container');
    window.addEventListener('resize', setCoordinates);
    mapContainer?.addEventListener('scroll', setCoordinates);
    return () => {
      window.removeEventListener('resize', setCoordinates);
      mapContainer?.removeEventListener('scroll', setCoordinates);
    };
  }, [setCoordinates]);

  useEffect(() => {
    const mapContainer = document.getElementById('map-container');
    if (!mapContainer) return undefined;
    mapContainer.addEventListener('scroll', onClose);
    return () => {
      mapContainer.removeEventListener('scroll', onClose);
    };
  }, [onClose]);

  useEffect(() => {
    if (isMounted && open) {
      document.addEventListener('click', watchClickOutside);
      return () => {
        document.removeEventListener('click', watchClickOutside);
      };
    }
    setMounted(true);
    return undefined;
  }, [isMounted, open, watchClickOutside]);

  return (
    <div ref={popupRef} className={clsx(styles.projectPopup, open && styles.open)} style={coords || {}}>
      <div className={styles.imageContainer}>
        {img ? <img src={img} alt={label} width={230} {...imgProps} /> : <div className={styles.emptyImage}>?</div>}
      </div>
      <div className={styles.body}>
        {url
          ? <a href={url} target="_blank" rel="noopener noreferrer" className={styles.title}>{label}</a>
          : <div className={styles.title}>{label}</div>}
        {parentKey && <div className={styles.subtitle}>{`in ${parentKey}`}</div>}
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
}

export default ProjectPopup;
