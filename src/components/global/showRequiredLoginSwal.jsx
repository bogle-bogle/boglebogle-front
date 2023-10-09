import hiHeendy from '../../assets/custom/hiheendy.gif';
import swal from 'sweetalert2';

export const showRequiredLoginSwal = callback => {
  const isMobile = window.innerWidth <= 768;

  const swalOptions = {
    title: '로그인이 필요합니다.',
    showCancelButton: true,
    imageUrl: hiHeendy,
    confirmButtonText: '로그인하러 가기',
    cancelButtonText: '뒤로 가기',
    confirmButtonColor: '#499878',
    cancelButtonColor: '#A4A4A4',
    customClass: {
      popup: isMobile ? 'swal-mobile' : '',
    },
    fontSize: isMobile ? '12px' : undefined,
  };

  if (isMobile) {
    swalOptions.width = '60%';
  }

  swal.fire(swalOptions).then(result => {
    if (result.isConfirmed) {
      callback();
    }
  });
};
