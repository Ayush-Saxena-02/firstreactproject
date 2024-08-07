import "./App.css";
import Navbar from './components/Navbar';
import {useState} from 'react';

function App(){
  const[likes,setlikes]= useState(0);
  console.log(likes);
  function increaselikes(){
    setlikes(likes+1);
  }
  return(
  <div>
    <Navbar/>
    <button onClick={increaselikes}className="px-4 py-2 my-2 mx-2 border bg-yellow-500" >Likes</button>
    <h1>{likes}</h1>
  </div>
  );
}

export default App;