import styled from "styled-components"; 

export const NoDataContainer = styled.div`
  text-align: center;
  margin-top: 16vh;
  margin-bottom: 20vh;

  .nopet-message {
    margin-top: 0.5rem;
    font-family: 'HappinessSansTitle';
    font-size: 23px;
    color: #444444;

    @media screen and (max-width: 1400px) {
      font-size: 20px;
    }

    @media screen and (max-width: 768px) {
      font-size: 15px;
    }
  }
`;

export const SadHeendy = styled.img`
  width: 15vw;

  @media (max-width: 768px) {
    width: 30vw;
  }
`;

export const AddBtn = styled.div`
  font-family: HappinessSansBold;
  font-size: 1rem;
  padding: 0.7rem 1rem;
  width: fit-content;
  background-color: #efe4eb;
  color: #4c645c;
  border-radius: 15px;
  border: 0;
  transition: 0.3s;
  display: inline-block;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.5rem 0.75rem;
    border-radius: 10px;
  }
`;