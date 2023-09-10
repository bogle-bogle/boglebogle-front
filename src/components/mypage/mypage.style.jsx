import styled from 'styled-components';

export const MypageGrid = styled.div`
    display: grid;
    /* grid-template-rows: 25% 25% auto; */
    margin: 3% 0% 0% 3.5%;
    /* height: 100%; */
    @media (max-width: 1100px) {
        margin: 0 2%;
    }

    grid-template-areas:
    'sidebar content';
    grid-gap: 0.5rem;
    /* grid-gap: 1vw; */
    height: auto;
`;

export const MypageSidebar = styled.div`
    grid-area: sidebar;
    width: 100%;
    min-width: 200px;
`;

export const MypageTitle = styled.div`
    font-weight: 700;
    font-size: 25px;
    @media (max-width: 1100px) {
        font-size: 20px;
    }
    /* border-right: 0.5px solid black; */
    margin: 0 5px;
`;

export const MypageBoldBorder = styled.hr`
    /* color: black; */
    height: 2px;
    background-color: black;
    margin: 15px 0px 23px;
`;

export const MypageContent = styled.div`
    max-width: 100%;
    padding: 35px 20px;
`;

export const MypageSubtitle = styled.div`
    font-weight: bolder;
    font-size: 15px;
    margin: 15px 10px;
`

export const MypageMiniTitle = styled.div`
    font-weight: medium;
    font-size: 12px;
    color: gray;
    margin: 10px 12px;
    cursor: pointer;
`

export const MypageBorder = styled.hr`
    color: gray;
    height: 0.5px;
    margin: 23px 10px;
`;

export const MypageAdv = styled.div`
    position: relative;
`;

export const MypageAdvImg = styled.img`
    object-fit: contain;
    display: block;
    padding: 10px;
    width: 100%;
`;

export const MypageAdvBtn = styled.div`
    position: absolute;
    font-size: 15px;
    bottom: 40px;
    left: 40px;
    @media (max-width: 1100px) {
    font-size: 8px;
    bottom: 24px;
    left: 25px;
    }
    font-weight: bold;
    cursor: pointer;
`