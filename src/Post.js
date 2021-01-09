import React from 'react'
import './Post.css';
import Avatar from '@material-ui/core/Avatar'

function Post({  userName, caption, imageUrl, avatarUrl }) {
    return (
        <div class="post">
            
          <div className="post__header">

            <Avatar
              className="post__avatar"
              src="https://i.ibb.co/Lp7rL3w/photo-2020-10-21-23-15-42.jpg"
              alt="Katya Lazorenko"
            />  
            <h3>{userName}</h3> 
            
          </div>   

            <img
                className="post__image"
                src={imageUrl}
                alt="">
            </img>

            <h4 className="post__text"><strong>{userName}</strong> {caption}</h4>

        </div>
    )
}

export default Post
