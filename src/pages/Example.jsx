// import { useState, useRef } from 'react';
// import Cropper from 'react-cropper';
// import 'cropperjs/dist/cropper.css';

// function Example() {
//   const cropperRef = useRef(null);
//   // 유저가 첨부한 이미지
//   const [inputImage, setInputImage] = useState(null);
//   // 유저가 선택한 영역만큼 크롭된 이미지
//   const [croppedImage, setCroppedImage] = useState(null);

//   const onCrop = () => {
//     const imageElement = cropperRef?.current;
//     const cropper = imageElement?.cropper;
//     setCroppedImage(cropper.getCroppedCanvas().toDataURL());
//   };

//   return (
//     <div>
//       <input
//         type="file"
//         accept="image/*"
//         onChange={(e) => setInputImage(URL.createObjectURL(e.target.files[0]))}
//       />
//       <Cropper src={inputImage} crop={onCrop} ref={cropperRef} />
//       <img src={croppedImage} />
//     </div>
//   );
// }

// export default Example;

import axios from 'axios';
import React, { useEffect } from 'react';

function Example() {
  // useEffect(() => {
  //   axios
  //     .post(
  //       '/custom/v1/24332/2553083b0cdc357378bf8be6d0878bccf0389362e8377855e5b3b299bb5d5588/general',
  //       {
  //         images: [
  //           {
  //             format: 'png',
  //             name: 'medium',
  //             data: null,
  //             url: 'https://tohomeimage.thehyundai.com/PD/PDImages/2020/12/16/123110/GP_8809068497546_01.png',
  //           },
  //         ],
  //         lang: 'ko',
  //         requestId: 'string',
  //         timestamp: 0,
  //         resultType: 'string',
  //         version: 'V1',
  //       },
  //       {
  //         headers: {
  //           'Content-Type': 'application/json',
  //           'X-OCR-SECRET': 'V2xYV0dPWm5iTFNWdmFwamJYWVlLWlBHa0pGempSTGs=',
  //         },
  //       },
  //     )
  //     .then((res) => console.log(res));
  // });

  return <div></div>;
}

export default Example;
