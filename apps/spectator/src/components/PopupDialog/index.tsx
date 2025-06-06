'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from '@hcc/ui';
import dayjs from 'dayjs';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import * as styles from './styles.css';

type PopupDialogProps = {
  imageUrl: string;
  imageAlt: string;
};

const PopupDialog = ({ imageUrl, imageAlt }: PopupDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const lastShownDate = localStorage.getItem('popupLastShownDate');
    const today = dayjs().format('YYYY-MM-DD');

    if (!lastShownDate || lastShownDate !== today) {
      setIsOpen(true);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleDontShowToday = () => {
    setIsOpen(false);
    localStorage.setItem('popupLastShownDate', dayjs().format('YYYY-MM-DD'));
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogPortal>
        <DialogOverlay />
        <DialogContent
          className={styles.container}
          aria-describedby={undefined}
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <DialogHeader aria-hidden="true">
            <DialogTitle />
          </DialogHeader>
          <div className={styles.image}>
            <Image
              src={imageUrl}
              alt={imageAlt}
              width={0}
              height={0}
              sizes="100vw"
              draggable={false}
              priority
            />
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.button} onClick={handleDontShowToday} type="button">
              오늘하루 보지 않기
            </button>
            <button className={styles.button} onClick={handleClose} type="button">
              닫기
            </button>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default PopupDialog;
