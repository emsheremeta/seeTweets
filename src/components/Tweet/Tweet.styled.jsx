import styled from 'styled-components';
import element from '../../img/Rectangle 1.png';

export const Wrapper = styled.div`
  display: flex;
  width: 380px;
  height: 460px;
  border-radius: 20px;
  offset: rgba(0, 0, 0, 0.23);
`;

export const UserTweets = styled.p`
  color: #ebd8ff;
  font-family: Montserrat;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
`;

export const UserFollowers = styled.p`
  color: #ebd8ff;
  font-family: Montserrat;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
`;

export const UserAvatar = styled.img`
  margin-top: 175px;
  width: 62px;
  height: 62px;
  border-radius: 50%;
  position: relative;
  left: 65px;
  z-index: 55;
  border: 6px solid white;
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
  border-color:  #ebd8ff;
  cursor:pointer;
  :hover,
  :focus {
    box-shadow: 10px 10px 7px -8px rgba(0,0,0,0.76);
  }

`;
export const ImgWrapper = styled.div`
  position: absolute;
`;

export const UserInfo = styled.li`
  list-style: none;
  ::before {
    content: url(${element});
    position: relative;
    left: -95px;
    top: 230px;
  }
`;
export const UserInfoWrapper = styled.div`
  position: relative;
  left: -93px;
`;
