import { Button, Text, Wrapper } from './Home.styled';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    navigate('/tweets');
  };
  return (
    <Wrapper>
      <Text>WELCOME</Text>
      <Button type="button" onClick={handleSubmit}>
        See tweets
      </Button>
    </Wrapper>
  );
};
