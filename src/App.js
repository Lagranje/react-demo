import React from 'react';
import './App.css';
import Post from './Post'

function App() {
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

      <Post userName="__lkate" caption="Wow, what a beautiful cat, she looks like me" imageUrl="https://i.pinimg.com/originals/e6/c6/3d/e6c63d8cdd83134cf78620699e1958fb.jpg"/>
      <Post userName="__lkate" caption="Wow, what a beautiful lion" imageUrl="https://i.ibb.co/Tk15yFm/photo-2020-04-29-02-00-49.jpg"/>
      <Post userName="__lkate" caption="Wow, what a beautiful cat" imageUrl="https://i.pinimg.com/originals/e6/c6/3d/e6c63d8cdd83134cf78620699e1958fb.jpg"/>

    </div>
  );
}

export default App;
