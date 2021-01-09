import React, { useState } from 'react';
import './App.css';
import Post from './components/Post'

function App() {
  
  const [posts, setPosts] = useState([
    {
      userName: "__lkate", 
      caption: "Wow, what a beautiful cat, she looks like me", 
      imageUrl: "https://i.pinimg.com/originals/e6/c6/3d/e6c63d8cdd83134cf78620699e1958fb.jpg"
    },
    {
      userName: "danylo.kostiuchenko", 
      caption: "Wow, what a beautiful Katya", 
      imageUrl: "https://i.pinimg.com/originals/e6/c6/3d/e6c63d8cdd83134cf78620699e1958fb.jpg"
    },
    {
      userName: "__lkate", 
      caption: "Wow, what a beautiful cat, she looks like me", 
      imageUrl: "https://i.pinimg.com/originals/e6/c6/3d/e6c63d8cdd83134cf78620699e1958fb.jpg"
    }
  ])

  return (
    <div className="app">

      <div className="app__header">
        <img 
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="">
        </img>
      </div>

      <h1>Hey, lets learn react</h1>

      { 
        posts.map(post => (
          <Post userName={post.userName} caption={post.caption} imageUrl={post.imageUrl}/>
        )) 
      }
      
    </div>
  );
}

export default App;
