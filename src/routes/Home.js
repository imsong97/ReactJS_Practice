import React from 'react';
import axios from "axios"; //설치: npm install axios
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component{ 
  state ={
    isLoading: true,
    movies: []
  };

  getMovies = async ()=>{ //async(): 비동기함수 , ES6
    const {data: {data: {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating"); //await키워드-> async함수가 있어야 사용가능
    //{data: {data: {movies}}} -> ES6

    this.setState({movies, isLoading: false})
  }

  componentDidMount(){
    // setTimeout(()=>{ //delay함수
    //   this.setState({isLoading: false});
    // }, 5000)

    this.getMovies();
  }

  render(){
    const {isLoading, movies} = this.state; //ES6

    return (
      //HTML이 아닌 JSX이기 때문에 class대신 className을 사용해야함
    <section className="container">
      {isLoading ? 
        <div className="loader">
          <span className="loader_text">Loading...</span>
        </div> :
        <div className="movies">
          {movies.map(movie=>(
            <Movie key={movie.id} id={movie.id} title={movie.title} year={movie.year} summary={movie.summary} 
                  poster={movie.medium_cover_image} genres={movie.genres}/>))
          }
        </div> 
      }</section>
    );
  }
}

export default Home;
