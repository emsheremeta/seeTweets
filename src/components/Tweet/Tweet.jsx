import { useEffect, useState } from 'react';
import {
  Wrapper,
  UserAvatar,
  Button,
  ImgWrapper,
  UserInfo,
  UserTweets,
  UserFollowers,
  UserInfoWrapper,
} from './Tweet.styled';
import ImgHeader from '../../img/picture.png';
import Logo from '../../img/Vector.png';

export const Tweet = ({ el, handleLs }) => {
  const [followers, setFollowers] = useState(el.followers);
  const [follow, setFollow] = useState(el.follow ?? 'FOLLOW');

  const handleButton = e => {
    e.preventDefault();
    if (follow === 'FOLLOW') {
      setFollow('FOLLOWING');
      setFollowers(prev => prev + 1);
    } else {
      setFollow('FOLLOW');
      setFollowers(prev => prev - 1);
    }
  };

  useEffect(() => {
    handleLs(el.id, follow, followers);
  }, [el.id, follow, followers, handleLs]);

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
          <UserAvatar src={el.avatar} alt="user avatar" />
          <UserInfoWrapper>
            {/* <UserName>{el.user.toLowerCase()}</UserName> */}
            <UserTweets>{el.tweets} TWEETS</UserTweets>
            <UserFollowers>
              {followers.toLocaleString('en-US')} FOLLOWERS
            </UserFollowers>
          </UserInfoWrapper>
          <Button
            id={el.id}
            type="button"
            onClick={handleButton}
            style={{
              backgroundColor: follow === 'FOLLOW' ? ' #ebd8ff' : '#5CD3A8',
              border: 'none',
            }}
          >
            {follow}
          </Button>
        </UserInfo>
      </Wrapper>
    </div>
  );
};
