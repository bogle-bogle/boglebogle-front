import swal from 'sweetalert2';
import clappingHeendy from '../../assets/custom/clappingheendy.gif';

export const showClappingHeendySwal = (title) => {
  swal.fire({
    title: title,
    showCancelButton: true,
    imageUrl: clappingHeendy,
    confirmButtonText: "확인",
    cancelButtonText: "취소",
    confirmButtonColor: "#499878",
    cancelButtonColor: "#A4A4A4",
    customClass: {
      confirmButton: "swal2-button",
      cancelButton: "swal2-button",
    },
  });
};
