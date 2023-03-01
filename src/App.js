import React from 'react';
import Login from './component/login'
import Header from './component/header';
import Home from './component/home';


function App(value=0) {

var result;
var Head = value;

if (Head == 0){
  result = <div><Header/><Home/></div>;
}else{
  result = <div><Login/></div>;
}

  return (
    <div className="App">
      {result}
    </div>
  );
}

export default App;