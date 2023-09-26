import swal from 'sweetalert2';
import heendyFace from '../../assets/custom/heendyface.png';

export const showDancingHeendyVideoSwal = () => {

  swal.fire({
    // title: '비디오 모달',
    html: `
      <RoundedVideo width="310" height="550" autoPlay loop muted>
        <source src={loadingVideo} type="video/mp4" />
      </RoundedVideo>
      <LoadingText>
        <LoadingIcon />
        분석중입니다. 잠시만 기다려주세요.
      </LoadingText>
    `
  });
};
