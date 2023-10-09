import swal from 'sweetalert2';
import drawingHeendy from '../../assets/custom/drawing-heendy.gif';

export const showDrawingHeendySwal = title => {
  const isMobile = window.innerWidth <= 800;

  const swalOptions = {
    title: title,
    // showCancelButton: false,
    showConfirmButton: false,
    imageUrl: drawingHeendy,
    cancelButtonText: '취소',
    cancelButtonColor: '#A4A4A4',
    customClass: {
      confirmButton: 'swal2-button',
      cancelButton: 'swal2-button',
      popup: isMobile ? 'swal-mobile' : '',
    },
    fontSize: isMobile ? '12px' : undefined,
  };

  if (isMobile) {
    swalOptions.width = '30%';
    swalOptions.height = '30%';
  }

  swal.fire(swalOptions);
};
