import { AuthButton } from '../shared'

const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <AuthButton to="/signIn" displayText="Sign In" color="blue"></AuthButton>
      <AuthButton to="/register" displayText="Register" color="green"></AuthButton>
    </div>
  );
};

export default Home;
