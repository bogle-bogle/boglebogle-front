import swal from 'sweetalert2';

export const showPreparingSwal = () => {
  swal.fire({
    title: "준비중인 서비스입니다.",
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
