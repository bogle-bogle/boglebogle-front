import swal from 'sweetalert2';
import heendyFace from '../../assets/custom/heendyface.png';

export const showDancingHeendyVideoSwal = () => {
  const isMobile = window.innerWidth <= 768;

  const swalOptions = {
    html: `
      <RoundedVideo width="${isMobile ? '80%' : '310px'}" height="${
      isMobile ? '70%' : '550px'
    }" autoPlay loop muted>
        <source src={loadingVideo} type="video/mp4" />
      </RoundedVideo>
      <LoadingText>
        <LoadingIcon />
        분석중입니다. 잠시만 기다려주세요.
      </LoadingText>
    `,
  };

  if (isMobile) {
    swalOptions.customClass = {
      popup: 'swal-mobile',
    };
  }

  swal.fire(swalOptions);
};
