import { TweetList } from 'components/TweetList/TweetList';
import { Button, Text, Wrapper } from './Tweets.styled';
import { useNavigate } from 'react-router-dom';

export const Tweets = () => {
  const navigate = useNavigate();
  const handleButton = () => {
    navigate('/');
  };
  return (
    <div>
      <Wrapper>
        <Text>Tweets are here</Text>
        <Button type="button" onClick={handleButton}>
          Go back
        </Button>
      </Wrapper>
      <TweetList />
    </div>
  );
};
