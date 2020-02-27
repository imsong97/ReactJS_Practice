import React from 'react';
import {Link} from "react-router-dom";
import "./Navigation.css";

function Navigation(){
    return (
        //<a href="">: 페이지 바뀔때 모든페이지를 죽임(새로고침 개념) <-> <Link to=""> 
        //<Link>는 라우터 안에 있어야함
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    );
}

export default Navigation;