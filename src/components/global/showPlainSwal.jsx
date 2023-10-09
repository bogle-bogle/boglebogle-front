import swal from 'sweetalert2';

export const showPlainSwal = title => {
  const isMobile = window.innerWidth <= 768;

  const swalOptions = {
    title: title,
    showCancelButton: true,
    confirmButtonText: '확인',
    cancelButtonText: '취소',
    confirmButtonColor: '#499878',
    cancelButtonColor: '#A4A4A4',
    customClass: {
      confirmButton: 'swal2-button',
      cancelButton: 'swal2-button',
      popup: isMobile ? 'swal-mobile' : '',
    },
    fontSize: isMobile ? '12px' : undefined,
  };

  if (isMobile) {
    swalOptions.width = '55%';
  }

  swal.fire(swalOptions);
};
