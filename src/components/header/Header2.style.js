import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.div`
  margin-top: 0.75rem;
  margin-bottom: 0.5rem;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;

  .logo {
    margin: 0 1rem;
    width: 120px;
  }

  .header__menulist {
    list-style: none;
    display: flex;
    font-family: 'HappinessSansBold';
    font-size: 17px;
  }

  .header__left {
    display: flex;
  }

  .header__right {
    list-style: none;
    display: flex;
    font-size: 16px;

    @media screen and (max-width: 1400px) {
      text-align: right;
    }
  }

  .toggle {
    display: none;
    font-size: 1.5rem;
    padding: 1rem 1rem;
  }

  .user {
    display: none;
    font-size: 1.5rem;
    padding: 1rem 1rem;
  }
  
  .list__container {
    .cart_icon {
      padding: 0;
      top: 50;
    }
    
    .cart_text {
      display: none;
    }
  }

  @media screen and (max-width: 1400px) {
    margin-top: 0;
    padding: 4px;
    flex-wrap: wrap;
    font-size: 15px;

    .header__right {
      display: ${(props) => (props.userToggled ? 'flex' : 'none')};
      flex-direction: column;
      width: 100%;
    }

    .header__menulist {
      display: ${(props) => (props.isToggled ? 'flex' : 'none')};
      flex-direction: column;
      width: 100%;
    }

    .toggle {
      display: block;
    }

    .user {
      display: block;
    }

    .list__container {
      margin: 0 0 1rem 0;
      padding: 0;
      
      .cart_icon {
        padding: 0 1.5rem;
      }

      .cart_text {
        display: inline-block;
        margin: 0 0 0 0.2rem;
      }
    }
  }
`;

export const StyledNavLink = styled(NavLink)`
  padding: 0 1.5rem;
  text-decoration: none;
  color: black;

  &:hover {
    color: #828e8c;
  }

  &.active {
    // 👏 이 부분!!!
    color: #2e775a;
  }
`;
