import swal from 'sweetalert2';
import clappingHeendy from '../../assets/custom/clappingheendy.gif';

export const showOnlyMessageSwal = title => {
  const isMobile = window.innerWidth <= 768;

  const swalOptions = {
    title: title,
    imageUrl: clappingHeendy,
    showCancelButton: false,
    showConfirmButton: false,
    customClass: {
      popup: isMobile ? 'swal-mobile' : '',
    },
  };

  if (isMobile) {
    swalOptions.width = '55%';
  }

  const swalInstance = swal.fire(swalOptions);

  // 자동으로 스위트얼트(alert) 닫기
  setTimeout(() => {
    swalInstance.close();
  }, 800); // 2000 밀리초 (2초) 후에 닫음
};
