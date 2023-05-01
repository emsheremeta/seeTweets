import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0fr);
  grid-template-rows: repeat(3, 0fr);
  gap: 20px;
  margin-left: 160px;
`;
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
align-item: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const EmptyFollowing = styled.div`
  text-align: center;
`;
