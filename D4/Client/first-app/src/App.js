import './App.css';
import MyNav from './components/MyNav';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Posts from './components/Posts';


function App() {
  const [data, setData ] = useState("")
 
  
  useEffect(() => {
    axios.get('http://localhost:3000/posts')
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <div className="App">
     <MyNav />
     <Posts data={data}/>
    </div>
  );
}

export default App;
