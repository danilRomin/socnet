import React from 'react';
import classes from "./Post.module.css"

const Post = (props) => {

    return (
        <div>
            <div className={classes.item}>
                <div className={classes.img__wrap}>
                    <img
                        src="https://avatars.yandex.net/get-music-user-playlist/71140/595193671.1017.52340/m1000x1000?1664977781745&webp=false"
                        alt="Фотография"/>
                </div>
                <div className={classes.postText}>
                    {props.message}
                </div>
            </div>
            <div className={classes.like}>like {props.likesCount}</div>
        </div>
    );
};

export default Post;