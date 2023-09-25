import swal from 'sweetalert2';
import hiHeendy from '../../assets/custom/hiheendy.gif'

export const showRequiredLoginSwal = () => {
  swal.fire({
    title: "로그인이 필요합니다.",
    showCancelButton: true,
    imageUrl: hiHeendy,
    confirmButtonText: "로그인하러 가기",
    cancelButtonText: "뒤로 가기",
    confirmButtonColor: "#499878",
    cancelButtonColor: "#A4A4A4",
    customClass: {
      confirmButton: "swal2-button",
      cancelButton: "swal2-button",
    },
  })
  .then();
};
