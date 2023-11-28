import React from 'react';
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = (props) => {

    const postsElements =
        props.posts.map(post => <Post
            id={post.id}
            likesCount={post.likesCount}
            message={post.message}
        />)

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea/>
                </div>
                <div>
                    <button>New post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;