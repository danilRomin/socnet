import React from 'react';
import classes from "./ProfileInfo.module.css"

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://media.istockphoto.com/id/1288385045/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B7%D0%B0%D1%81%D0%BD%D0%B5%D0%B6%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9-%D0%BF%D0%B8%D0%BA-k2.jpg?s=612x612&w=0&k=20&c=MxlQOac2Ud_KNb1lWhpSTyJjHUgVqTK2VZMOQDtozCw="
                    alt="Обложка"/>
            </div>
            <div className={classes.descriptionBlock}>
                ava + descr
            </div>
        </div>
    );
};

export default ProfileInfo;