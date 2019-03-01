import React from 'react';
import css from 'styled-jsx/css';

const styles = css`
  #app {
    align-items: center;
    display: flex;
    font-family: sans-serif;
    height: 100vh;
    max-width: 800;
    justify-content: center;
  }

  .welcome {
    margin: 0;
  }
`;

const Home = () => {
  return (
    <div id="app">
      <style jsx>{styles}</style>
      <h1 className="welcome">Welcome to next.js!</h1>
    </div>
  );
};

export default Home;
