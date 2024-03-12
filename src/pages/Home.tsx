import { AuthButton } from "../shared/AuthButton/AuthButton";

const Home = () => {
	return (
		<div>
			<h2>Home Page</h2>
			<AuthButton to="/signIn" displayText="Sign In" color="blue" />
			<AuthButton to="/register" displayText="Register" color="green" />
		</div>
	);
};

export default Home;
