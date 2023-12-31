import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </>
    );
};

export default Profile;