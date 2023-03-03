import React from 'react';
import Login from './component/login'
import Header from './component/header';
import Home from './component/home';


var Head = Login.Head;

var result;

function App() {
  if (Head === 0){
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