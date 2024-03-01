import React from 'react';
import LoginButton from '../shared/loginButton/LoginButton'; 
import RegisterButton from '../shared/registerButton/RegisterButton';

const Home= () => {
    return (
        <div>
            <h2>Home Page</h2>
            <h3>TEAMPICK LOGO</h3>
            <LoginButton />
            <RegisterButton />

        </div>
    );
}

export default Home;