import React, { useEffect } from 'react';
import swal from 'sweetalert2';
import clappingHeendy from '../../assets/custom/clappingheendy.gif';

const ClappingHeendySwal = ({
  title,
  confirmButtonText,
  cancelButtonText,
  onConfirm,
  onCancel,
  trigger,
}) => {
  useEffect(() => {
    if (trigger) {
      const isMobile = window.innerWidth <= 768;

      const swalOptions = {
        title: (
          <div style={{ fontSize: isMobile ? '12px' : '20px' }}>
            {title}
          </div>
        ),
        showCancelButton: true,
        imageUrl: clappingHeendy,
        confirmButtonText: confirmButtonText,
        cancelButtonText: cancelButtonText,
        confirmButtonColor: '#499878',
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
    confirmButtonText,
    cancelButtonText,
    onConfirm,
    onCancel,
  ]);

  return null;
};

export default ClappingHeendySwal;
