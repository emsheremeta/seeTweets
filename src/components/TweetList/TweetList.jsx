import { axiosInstance } from 'API/axios';
import { useEffect, useState } from 'react';
import { Tweet } from 'components/Tweet/Tweet';
import { Filter } from 'components/Filter/Filter';
import ReactLoading from 'react-loading';
import { GridContainer } from './TweetList.styled';
import { Button, ButtonWrapper, EmptyFollowing } from './TweetList.styled';

export const TweetList = () => {
  const [tweets, setTweets] = useState([]);
  const [filter, setFilter] = useState('Show all');
  const [limit, setLimit] = useState(3);
  const [loading, setLoading] = useState(false);

  const handleFilterChange = e => {
    console.log(e);
    setFilter(e.target.value);
    setLimit(3);
  };

  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get(`/users`)
      .then(function (response) {
        if (response.data.length === 0) {
          console.log('error');
        } else {
          setTweets(response.data);
          console.log(response.data);
        }
      })
      .catch(function (error) {
        console.log('no results', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  const handleLoadMore = e => {
    e.preventDefault();
    setLimit(prev => prev + 3);
  };

  const getElement = el => {
    let userInformation = JSON.parse(localStorage.getItem(el.id));
    el.followers = userInformation?.followers ?? el.followers;
    el.follow = userInformation?.follow ?? 'FOLLOW';

    return el;
  };
  const getFilteredTweets = () => {
    return tweets.filter(
      el =>
        getElement(el).follow.toLowerCase() === filter.toLowerCase() ||
        filter === 'Show all'
    );
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
      <GridContainer>
        {getFilteredTweets()
          .slice(0, limit)
          .map(el => {
            return <Tweet key={el.id} el={getElement(el)} />;
          })}
      </GridContainer>
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
