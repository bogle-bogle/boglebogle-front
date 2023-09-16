import styled from 'styled-components';

export const UploadSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 30px 20px 30px;
    transition: transform 0.3s;

    :hover {
      transform: scale(1.05);
    }
  `;

export const ImageboxTitle = styled.p`
    margin: 0px 0;
    font-family: 'HappinessSansBold';
    color: #499878;
`;

export const ImagePreview = styled.div`
    padding: 5px;
    width: 200px;
    height: 200px;
    margin-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden; /* Hide overflow if the image is larger */
    border-radius: 20px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 6px 25px 0px;
    background-color: #d1d1d1;

    img {
      max-width: 100%;
      max-height: 100%;
    }
`;
export const ImgFileInput = styled.input`
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    cursor: pointer;
`;

export const DefaultImage = styled.div`
    color: white;
`;
