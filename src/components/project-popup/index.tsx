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

const CONTAINER_ID = 'projects';
const POPUP_WIDTH = 250;
const POPUP_HEIGHT = 300;

function ProjectPopup(props: IProjectPopupProps) {
  const { project, onClose, open } = props;
  const {
    key, img, label, description, url, imgProps = {}, parentKey,
  } = project;
  const popupRef = useRef(null);
  const [isMounted, setMounted] = useState(false);
  const [coords, setCoords] = useState<{ top: number, left: number} | null>(null);

  /**
   * Sets popup position
  */
  const setCoordinates = useCallback(() => {
    const projectPoint = document.querySelector(`.${key}`);
    if (!projectPoint || !popupRef.current) return;
    const pointRect = projectPoint.getBoundingClientRect();
    const top = (pointRect.top + POPUP_HEIGHT) > window.innerHeight ? pointRect.top - POPUP_HEIGHT : pointRect.top - 12;
    const left = pointRect.left > (window.innerWidth - POPUP_WIDTH) ? pointRect.left - POPUP_WIDTH + 6 : pointRect.left - 12;
    setCoords({ top, left });
  }, [key, open]);

  /**
   * Closes the popup on click outside the popup
   */
  const watchClickOutside = useCallback((ev: Event) => {
    if (!popupRef.current || !ev.target) return;
    const target = ev.target as HTMLElement;
    const popup = popupRef.current as HTMLElement;
    const isProjectPoint = Array.from(target.classList).includes('project-point');
    if (!popup.contains(target) && !isProjectPoint) onClose();
  }, [onClose]);

  /**
   * Initial coordinates set
   */
  useEffect(() => {
    setCoordinates();
  }, [setCoordinates]);

  /**
   * Rests coordinates on scroll or resize
   */
  useEffect(() => {
    const mapContainer = document.getElementById(CONTAINER_ID);
    window.addEventListener('resize', setCoordinates);
    mapContainer?.addEventListener('scroll', setCoordinates);
    return () => {
      window.removeEventListener('resize', setCoordinates);
      mapContainer?.removeEventListener('scroll', setCoordinates);
    };
  }, [setCoordinates]);

  /**
   * Closes the popup on scroll
   */
  useEffect(() => {
    const mapContainer = document.getElementById(CONTAINER_ID);
    if (!mapContainer) return undefined;
    mapContainer.addEventListener('scroll', onClose);
    return () => {
      mapContainer.removeEventListener('scroll', onClose);
    };
  }, [onClose]);

  /**
   * Closes the popup on click outside the popup
   */
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
        {img ? <img src={img} alt={label} width={230} {...imgProps} /> : <div className={styles.emptyImage}>{label}</div>}
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
