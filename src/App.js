import React from 'react';
import {HashRouter,Route} from "react-router-dom"; //라우터 설치: npm install react-router-dom
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";

function App(){
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home}/> 
      <Route path="/about" component={About}/>
      <Route path="/movie" component={Detail}/>
    </HashRouter>
    //exact={true}: path값이 아니면 렌더링을 하지 않도록 함

  )
}

export default App;