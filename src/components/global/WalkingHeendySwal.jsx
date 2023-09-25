import React, { useEffect } from 'react';
import swal from 'sweetalert2';
import walkingheendy from "../../assets/custom/walkingheendy.gif";

const WalkingHeendySwal = ({ title, confirmButtonText, cancelButtonText, onConfirm, onCancel, trigger }) => {
  
  useEffect(() => {
    if (trigger) {
      swal
        .fire({
          title: title,
          showCancelButton: true,
          imageUrl: walkingheendy,
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

export default WalkingHeendySwal;
