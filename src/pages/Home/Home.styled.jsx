import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Button = styled.button`
width: 196px;
height: 50px;
font-family: Montserrat;
font-weight: 600;
font-size: 18px;
line height: 22px;
offset: 0px, 3.44px;
border-radius: 10.31px;
padding: 14px, 28px, 14px, 28px;
background-color: #ebd8ff;
color: #373737;
border: rgb(235, 216, 255);
cursor: pointer;
:hover,
:focus {
    box-shadow: 10px 10px 23px -8px rgba(0,0,0,0.75);
    
}
`;

export const Text = styled.h1`
font-family: Montserrat;
font-weight: 600;
font-size: 20px;
line height: 22px;
color: #373737;
text-align: center;

`;

export const Link = styled(NavLink)`
font-family: Montserrat;
font-weight: 600;
font-size: 18px;
line height: 22px;
color: #373737;
text-decoration: none;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
