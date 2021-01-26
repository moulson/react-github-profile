import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import logo from '../GitHub-Mark-Light-64px.png';
import Header from '../components/Header/Header';
import Profile from '../containers/Profile';


const AppWrapper = styled.div`
  text-align: center;
`;

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

function App() {
  return (
    <>
    <GlobalStyle />
    <AppWrapper>
      <Header logo={logo}/>
      <Profile/>
    </AppWrapper>
    </>
  );
}

export default App;
