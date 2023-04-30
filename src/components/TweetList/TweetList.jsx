import { axiosInstance } from 'API/axios';
import { useEffect, useState } from 'react';
import { Tweet } from 'components/Tweet/Tweet';
import { Filter } from 'components/Filter/Filter';

export const TweetList = () => {
  const [tweets, setTweets] = useState([]);
  const [filter, setFilter] = useState('Show all');
  const [limit, setLimit] = useState(3);

  const handleFilterChange = e => {
    console.log(e);
    setFilter(e.target.value);
  };

  useEffect(() => {
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
      });
  }, []);
  const handleLoadMore = e => {
    e.preventDefault();
    setLimit(prev => prev + 3);
  };
  return (
    <div>
      <Filter handleChange={handleFilterChange} />
      <ul>
        {tweets
          .filter()
          .slice(0, limit)
          .map(el => {
            return <Tweet key={el.id} el={el} filter={filter} />;
          })}
      </ul>
      <button type="button" onClick={handleLoadMore}>
        Load more
      </button>
    </div>
  );
};
