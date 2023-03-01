import React from 'react';
import About from './component/about'
import Container from 'react-bootstrap/Container';
// import Header from './component/header';

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <Container>
      <About />
      </Container>
    </div>
  );
}

export default App;