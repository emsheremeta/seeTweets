import { axiosInstance } from 'API/axios';
import { useEffect, useState } from 'react';
import { Tweet } from 'components/Tweet/Tweet';
import { Filter } from 'components/Filter/Filter';
import ReactLoading from 'react-loading';
import { GridContainer } from './TweetList.styled';
import {
  Button,
  ButtonWrapper,
  EmptyFollowing,
  Wrapper,
} from './TweetList.styled';

export const TweetList = () => {
  const [tweets, setTweets] = useState(
    JSON.parse(localStorage.getItem('user_data')) ?? []
  );
  const [filter, setFilter] = useState('Show all');
  const [limit, setLimit] = useState(3);
  const [loading, setLoading] = useState(false);

  const handleFilterChange = e => {
    setFilter(e.target.value);
    setLimit(3);
  };

  useEffect(() => {
    if (tweets.length) {
      return;
    }
    setLoading(true);
    axiosInstance
      .get(`/users`)
      .then(function (response) {
        if (response.data.length === 0) {
          console.log('error');
        } else {
          setTweets(response.data);
        }
      })
      .catch(function (error) {
        console.log('no results', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [tweets.length]);

  const handleLoadMore = e => {
    e.preventDefault();
    setLimit(prev => prev + 3);
  };

  const getFilteredTweets = () => {
    return tweets.filter(
      el =>
        el.follow?.toLowerCase() === filter.toLowerCase() ||
        filter === 'Show all'
    );
  };
  const saveToLs = (id, follow, followers) => {
    tweets.forEach(el => {
      if (el.id === id) {
        el.follow = follow;
        el.followers = followers;
      }
    });
    localStorage.setItem('user_data', JSON.stringify(tweets));
  };

  if (loading) {
    return (
      <ReactLoading
        type={'spinningBubbles'}
        color={'blue'}
        height={'20%'}
        width={'20%'}
      />
    );
  }
  return (
    <div>
      <Filter handleChange={handleFilterChange} />
      <Wrapper>
        <GridContainer>
          {getFilteredTweets()
            .slice(0, limit)
            .map(el => {
              return <Tweet key={el.id} el={el} handleLs={saveToLs} />;
            })}
        </GridContainer>
      </Wrapper>
      {getFilteredTweets().length > limit && (
        <ButtonWrapper>
          <Button type="button" onClick={handleLoadMore}>
            Load more
          </Button>
        </ButtonWrapper>
      )}
      {getFilteredTweets().length === 0 && (
        <EmptyFollowing>You do not follow any users</EmptyFollowing>
      )}
    </div>
  );
};
