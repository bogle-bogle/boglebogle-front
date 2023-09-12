import styled from 'styled-components';

export const CurationContainer = styled.div`
  width: 20vw;
  height: fit-content;
  padding: 1.5vw;
`;

export const CurationTitle = styled.div`
  font-size: 1.2vw;
  font-weight: bold;
  padding-bottom: 0.8vw;
`;

export const CurationMiniTitle = styled.div`
  font-size: 0.8vw;
  padding-top: 1.5vw;
  margin-bottom: 0.5vw;
`;

export const CurationSelect = styled.select`
  padding: 1vw;
  border-radius: 5px;
  border: 1px solid gray;
  cursor: pointer;
  font-size: 0.8vw;
  margin-top: 0.5vw;
  width: 80%;

  background-image: url('../../assets/subscription/select_btn.png');
  background-position: 90% center;
  padding-right: 1vw;

  &:hover {
    border-color: gray;
  }

  &:focus {
    outline: none;
    border-color: #656565;
    box-shadow: 0 0 5px rgba(100, 100, 100, 0.5);
  }
`;

export const CurationOption = styled.option`
  padding: 1vw;
  font-size: 0.8vw;
`;

export const CurationBtn = styled.button`
  background-color: white;
  padding: 0.6vw 1vw;
  color: black;
  border: 0.05vw solid gray;
  font-size: 1vw;
  width: 10vw;
  cursor: pointer;
  font-weight: normal;
  padding-right: 0.5vw;

  &:hover {
    background-color: black;
    border: none;
    color: white;
  }
`;

export const CurationCheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-top: 2vw;
  font-size: 1vw;
`;

export const CurationHiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

export const CurationStyledCheckbox = styled.div`
  width: 1vw;
  height: 1vw;
  border: 1px solid gray;
  border-radius: 0.1vw;
  margin-right: 0.5vw;
  background: ${(props) => (props.checked ? '#726a95' : '#FFF')};
  transition: background 150ms;
  font-size: 0.8vw;

  ${CurationCheckboxWrapper}:hover & {
    border-color: #9e9e9e;
  }

  ${CurationHiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px rgba(114, 106, 149, 0.3);
  }

  &:after {
    content: '';
    position: absolute;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    top: 5px;
    left: 8px;
    transform: rotate(45deg);
    display: ${(props) => (props.checked ? 'block' : 'none')};
  }
`;

export const CurationMainBtn = styled.button`
  background-color: #575757;
  padding: 0.7vw 2vw;
  margin-top: 2vw;
  color: white;
  border: none;
  font-size: 1vw;
  /* width: 10vw; */
  cursor: pointer;
  font-weight: normal;
  font-weight: bold;

  &:hover {
    background-color: black;
    border: none;
  }
`;
