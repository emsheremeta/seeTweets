import { TweetList } from 'components/TweetList/TweetList';
import { Button, Text, Link, Wrapper } from './Tweets.styled';

export const Tweets = () => {
  return (
    <div>
      <Wrapper>
        <Text>Tweets are here</Text>
        <Button type="button">
          <Link to="/TestGoIt">Go back</Link>
        </Button>
      </Wrapper>
      <TweetList />
    </div>
  );
};
