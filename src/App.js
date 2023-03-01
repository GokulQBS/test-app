import React from 'react';
import About from './component/about'
import Container from 'react-bootstrap/Container';
import Header from './component/header';

var result;
var Head = null;
if (Head != null){
  result = <Header/>;
}else{
  result = null;
}

function App() {
  return (
    <div className="App">
      {result}
      <Container>
      <About />
      </Container>
    </div>
  );
}

export default App;