// modules
import { useCallback } from 'react';
// utils
import clsx from 'src/utils/clsx';
import { DOWNLOAD_LINK } from 'src/consts/global';
// components
import Button from 'src/components/button';
// styles
import styles from './download-cv-button.module.scss';

interface IDownloadCvButtonProps {
  className?: string;
}

function DownloadCvButton(props: IDownloadCvButtonProps) {
  const { className } = props;

  const handleDownload = useCallback(() => {
    window.open(DOWNLOAD_LINK);
  }, []);

  return (
    <Button variant="light" className={clsx(styles.download_cv_button, className)} onClick={handleDownload}>
      download cv
    </Button>
  );
}

DownloadCvButton.defaultProps = {
  className: '',
};

export default DownloadCvButton;
