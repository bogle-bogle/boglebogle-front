import styled from 'styled-components';

export const LoginContainer = styled.div`
    width: 550px;
    height: 650px;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background-color: white;
`;

export const LogoImg = styled.img`
    margin: 20px;
    width: 200px;
`;

export const LoginTitle = styled.div`
    font-size: 25px;
    margin-top: 20px;
    margin-bottom: 10px;
    font-weight: bolder;
`;

export const LoginDescr = styled.div`
    font-size: 13px;
    font-weight: normal;
    margin-bottom: 20px;
`;

export const LoginTab = styled.div`
    font-weight: bolder;
    margin: 15px;
    display: flex;
`

export const LoginTabBtn = styled.input`
    width: 100%;
    border: 1px solid darkgray;
`;

export const LoginInputBox = styled.input`
    width: 70%;
    min-height: 40px;
    padding: 0 20px;
    border: 1px solid #ccc;
    line-height: 43px;
    font-size: 13px;
    color: #1c1c1c;
    box-sizing: border-box;
    margin: 5px;

  ::placeholder{
    color: #888;
  };
`;

export const LoginBtn = styled.div`
    cursor: pointer;
    width: 70%;
    min-height: 50px;
    padding: 0 20px;
    border: 1px solid #ccc;
    line-height: 43px;
    font-size: 15px;
    background-color: #376558;
    box-sizing: border-box;
    margin: 20px 0 5px;
    text-align: center;
    color: white;
    font-weight: bolder;
`;

export const HpLoginBtn = styled.div`
    cursor: pointer;
    width: 70%;
    min-height: 50px;
    padding: 0 20px;
    border: 1px solid black;
    line-height: 43px;
    font-size: 15px;
    background-color: white;
    box-sizing: border-box;
    margin: 5px;
    text-align: center;
    font-weight: bolder;
`;

export const LoginOptionGroup = styled.div`
    width: 90%;
    display: flex;
    margin-top: 50px;
    margin-bottom: 20px;
`;

export const LoginOptionBtn = styled.button`
width: 100%;
cursor: pointer;
min-height: 50px;
padding: 0 20px;
border: ${(props) => (props.selected ? '1.5px solid black' : '0.3px solid lightgray')};
line-height: 43px;
font-size: 15px;
background-color: white;
box-sizing: border-box;
text-align: center;
font-weight:  ${(props) => (props.selected ? 'bolder' : 'light')};
color: ${(props) => (props.selected ? 'black' : 'lightgray')};

  :focus{
    color: black;
    border: 1px solid black;
  }

`;

export const SocialLoginBtnGroup = styled.div`
    display: flex;
    width: 50%;
    justify-content: space-between;
    margin-top: 20px;
`;

export const SocialLoginIcon = styled.img`
    border-radius: 100%;
    width: 50px;
    height: 50px;
    object-fit: cover;
    justify-content: center;
    cursor: pointer;
`;

export const SocialLoginTitle = styled.div`
font-size: 18px;
margin-top: 25px;
font-weight: bolder;
`;

export const FindAccountBtn = styled.div`
    font-size: 13px;
    color: gray;
    text-align: right;
    font-weight: light;
    margin-top: 5px;
`;