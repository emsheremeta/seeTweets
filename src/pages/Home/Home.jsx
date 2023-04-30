import { Button, Text, Link, Wrapper } from './Home.styled';

export const Home = () => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log('submit');
  };
  return (
    <Wrapper>
      <Text>WELCOME</Text>
      <Button type="button" onClick={handleSubmit}>
        <Link to="/tweets"> See tweets</Link>
      </Button>
    </Wrapper>
  );
};
