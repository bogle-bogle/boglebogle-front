const WalkingHeendySwal = ({
  title,
  confirmButtonText,
  cancelButtonText,
  onConfirm,
  onCancel,
  trigger,
}) => {
  const isMobile = window.innerWidth <= 768;

  // 모바일 환경에서만 적용할 스타일
  const mobileStyle = isMobile ? { width: '60%' } : {};

  const swalOptions = {
    title: title,
    showCancelButton: true,
    imageUrl: walkingheendy,
    confirmButtonText: confirmButtonText,
    cancelButtonText: cancelButtonText,
    confirmButtonColor: '#499878',
    cancelButtonColor: '#A4A4A4',
    customClass: {
      confirmButton: 'swal2-button',
      cancelButton: 'swal2-button',
      popup: 'swal-mobile', // 클래스명 추가
    },
    style: mobileStyle, // 모바일 스타일 적용
  };

  useEffect(() => {
    if (trigger) {
      swal
        .fire(swalOptions)
        .then(result => {
          if (result.isConfirmed && onConfirm) {
            onConfirm();
          } else if (result.isDismissed && onCancel) {
            onCancel();
          }
        })
        .catch(error => {
          // 필요한 경우 에러를 처리합니다
          console.error('에러:', error);
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

export default WalkingHeendySwal;
