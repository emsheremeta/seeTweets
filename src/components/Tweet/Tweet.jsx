import { useEffect, useState } from 'react';
import {
  Wrapper,
  UserName,
  UserAvatar,
  Button,
  ImgWrapper,
  UserInfo,
  UserTweets,
  UserFollowers,
  UserInfoWrapper,
} from './Tweet.styled';
import ImgHeader from '../../img/picture2 1.png';
import Logo from '../../img/Vector.png';
import Rectangle from '../../img/Rectangle 1.png';
import Elipse from '../../img/Ellipse 1 (Stroke).png';

export const Tweet = ({ el }) => {
  const [followers, setFollowers] = useState(el.followers);
  const [follow, setFollow] = useState(el.follow ?? 'FOLLOW');

  const handleButton = e => {
    e.preventDefault();
    console.log('follow');
    if (follow === 'FOLLOW') {
      setFollow('FOLLOWING');
      setFollowers(prev => prev + 1);
    } else {
      setFollow('FOLLOW');
      setFollowers(prev => prev - 1);
    }
  };
  useEffect(() => {
    localStorage.setItem(
      el.id,
      JSON.stringify({
        followers: followers,
        follow: follow,
      })
    );
  }, [el.id, follow, followers]);

  return (
    <div>
      <Wrapper
        style={{
          background:
            'linear-gradient(90deg, rgba(71,28,169,1) 0%, rgba(87,54,163,1) 69.1%, rgba(75,42,153,1) 100%)',
        }}
      >
        <img
          src={Logo}
          alt="Logo"
          style={{
            width: '76px',
            height: '22px',
            position: 'relative',
            left: '3px',
            paddingTop: '20px',
            paddingLeft: '20px',
          }}
        />
        <ImgWrapper>
          <img
            src={ImgHeader}
            alt="header"
            style={{
              width: '308px',
              height: '168px',
              position: 'relative',
              left: ' 35px',
              bottom: '-20px',
            }}
          />
        </ImgWrapper>
        <UserInfo key={el.id}>
          <img
            src={Rectangle}
            alt="rectangle"
            style={{
              position: 'relative',
              left: '-95px',
              top: '221px',
            }}
          />

          <UserAvatar src={el.avatar} alt="user avatar" />
          <img
            src={Elipse}
            alt="elipse"
            style={{
              position: 'relative',
              width: '85px',
              height: '85px',
              left: '-10px',
              top: '15px',
              zIndex: '55',
            }}
          />
          <UserInfoWrapper>
            <UserName>{el.user}</UserName>
            <UserTweets>{el.tweets} tweets</UserTweets>
            <UserFollowers>
              {followers.toLocaleString('en-US')} followers
            </UserFollowers>
          </UserInfoWrapper>
          <Button
            type="button"
            onClick={handleButton}
            style={{
              backgroundColor: follow === 'FOLLOW' ? ' #ebd8ff' : '#5CD3A8',
            }}
          >
            {follow}
          </Button>
        </UserInfo>
      </Wrapper>
    </div>
  );
};
