import React from 'react';
import { DefaultImage, ImagePreview, ImageboxTitle, ImgFileInput, UploadSection } from './image-upload-component.style';

function ImageUploadComponent({
  title,
  onImagePreviewClick,
  selectedImageForPreview,
  defaultImageUrl,
  onInputChange,
  inputRef,
}) {
  return (
    <UploadSection>
      <ImageboxTitle>{title}</ImageboxTitle>
      <ImagePreview onClick={onImagePreviewClick}>
        {selectedImageForPreview ? (
          <img src={selectedImageForPreview} alt="Uploaded" />
        ) : (
          <DefaultImage alt="Default" src={defaultImageUrl}>이미지 첨부하기</DefaultImage>
        )}
      </ImagePreview>
      <ImgFileInput type="file"
                    accept="image/*"
                    onChange={onInputChange}
                    ref={inputRef}
      />
    </UploadSection>
  );
}

export default ImageUploadComponent;
