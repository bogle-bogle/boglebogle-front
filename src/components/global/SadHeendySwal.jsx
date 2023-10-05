import React, { useEffect } from 'react';
import swal from 'sweetalert2';
import sadHeendy from '../../assets/custom/sadheendy.png';

const SadHeendySwal = ({
  title,
  text,
  confirmButtonText,
  cancelButtonText,
  onConfirm,
  onCancel,
  trigger,
}) => {
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    const swalOptions = {
      title: title,
      text: text,
      showCancelButton: true,
      imageUrl: sadHeendy,
      confirmButtonText: confirmButtonText,
      cancelButtonText: cancelButtonText,
      confirmButtonColor: '#b9a37d',
      cancelButtonColor: '#A4A4A4',
      customClass: {
        confirmButton: 'swal2-button',
        cancelButton: 'swal2-button',
        popup: isMobile ? 'swal-mobile' : '',
      },
    };

    if (isMobile) {
      swalOptions.width = '55%';
    }

    if (trigger) {
      swal.fire(swalOptions).then(result => {
        if (result.isConfirmed && onConfirm) {
          onConfirm();
        } else if (result.isDismissed && onCancel) {
          onCancel();
        }
      });
    }
  }, [
    trigger,
    title,
    text,
    confirmButtonText,
    cancelButtonText,
    onConfirm,
    onCancel,
  ]);

  return null;
};

export default SadHeendySwal;
