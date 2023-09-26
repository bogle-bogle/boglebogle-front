import React, { useEffect } from 'react';
import swal from 'sweetalert2';
import clappingHeendy from "../../assets/custom/clappingheendy.gif";

const ClappingHeendySwal = ({ title, confirmButtonText, cancelButtonText, onConfirm, onCancel, trigger }) => {
  
  useEffect(() => {
    if (trigger) {
      swal
        .fire({
          title: title,
          showCancelButton: true,
          imageUrl: clappingHeendy,
        //   imageHeight: "팝업 이미지",
          confirmButtonText: confirmButtonText,
          cancelButtonText: cancelButtonText,
          confirmButtonColor: "#499878",
          cancelButtonColor: "#A4A4A4",
          customClass: {
            confirmButton: "swal2-button",
            cancelButton: "swal2-button",
          },
        })
        .then((result) => {
            if (result.isConfirmed && onConfirm) {
              onConfirm();
            } else if (result.isDismissed && onCancel) {
              onCancel();
            }
          })
;
    }
  }, [trigger, title, confirmButtonText, cancelButtonText, onConfirm, onCancel]);

  return null;
};

export default ClappingHeendySwal;
