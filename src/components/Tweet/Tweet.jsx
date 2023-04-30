import { useEffect, useState } from 'react';
import { Wrapper, UserName, UserAvatar, Button } from './Tweet.styled';

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
        <li key={el.id}>
          <UserAvatar src={el.avatar} alt="user avatar" />
          <UserName>{el.user}</UserName>
          <p>{el.tweets} tweets</p>
          <p>{followers.toLocaleString('en-US')} followers</p>
          <Button type="button" onClick={handleButton}>
            {follow}
          </Button>
        </li>
      </Wrapper>
    </div>
  );
};
