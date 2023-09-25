import swal from 'sweetalert2';

export const showPlainSwal = (title) => {
  swal.fire({
    title: title,
    showCancelButton: true,
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
