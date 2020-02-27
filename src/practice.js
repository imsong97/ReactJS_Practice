import React from 'react';
import PropTypes from 'prop-types';

function Food({name, rating}){
  return (
    <div>
      <h1>I like {name}</h1>
      <h4>평점: {rating}점</h4>
    </div>
  );
}
/*
또는
function Food(props){
  return <h1>I like {props.name}</h1>
}
*/

//데이터가 맞게 들어왔는지 type을 체크
Food.propTypes={
  name:PropTypes.string.isRequired,
  rating:PropTypes.number.isRequired //number은 필수가 아니므로 PropTypes.number 라고 해도 됨
};

const foodLike = [
  {name:"kimchi",id:1,rating:7},
  {name:"kimbop",id:2,rating:9},
  {name:"potato",id:3,rating:5},
  {name:"bulgogi",id:4,rating:8}
]

function App() { //-> fucntion component (<-> class component)
  return (
    /*
    배열이름.map(arg=>{
      return ~;
    })
    각각의 배열item에 function을 적용
    */

   //react내부에서 사용하기위한 key선언(없으면 콘솔에러)
    <div>
      {foodLike.map(dish=>
        <Food key={dish.id} name={dish.name} rating={dish.rating}/>
      )}
    </div>
  );
}

//---------------------------------------------------------------------------------------------

class App extends React.Component{ //-> class component
  //react는 자동적으로 class component의 render함수를 실행
  state = {
    count:0
  };

  add = () =>{
    //state의 상태를 바꾸려면 this.state.객체이름 사용X -> setState함수 사용
    //react에서는 state를 바꾸려면 render함수를 다시 호출하여 사용하게끔 하기 때문
    //setState 사용시, state안에 default값을 선언 할 필요X
    this.setState(current => ({count: current.count+1}));
  };

  minus = () =>{
    this.setState({count:this.state.count-1});
  };

  render(){
    //state를 render에 넣으려면 {this.state.객체이름}
    return (
    <div>
      <h1>The number is {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
    );
  }
}

/* 
LifeCycle (https://reactjs.org/docs/react-component.html)
  1.Mounting
  2.Updating
  3.Unmounting
*/ 
