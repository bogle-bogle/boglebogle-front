import styled from "styled-components";

export const GreyBtn = styled.button`
  background-color: #a4a4a4;
  font-family: "HappinessSansBold";
  margin: 5px;
  display: inline-block;
  padding: 10px 20px;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s, color 0.3s;

  :hover {
    background-color: #5e5e5e;
  }
`;

export const GreenBtn = styled.button`
  font-family: "HappinessSansBold";
  margin: 5px;
  display: inline-block;
  padding: 10px 20px;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s, color 0.3s;

  :hover {
    background-color: #087161;
  }
`;

export const CancelBtn = styled.button`
  /* background-color: #a4a4a4; */
  font-family: "HappinessSansBold";
  margin: 4px 0px;
  display: inline-block;
  padding: 7px 10px;
  color: red;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 12px;
  transition: background-color 0.3s, color 0.3s;

  :hover {
    background-color: #5e5e5e;
  }
`;