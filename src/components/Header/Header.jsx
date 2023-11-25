import React from 'react';
import classes from "./Header.module.css"

const Header = () => {
    return (
            <header className={classes.header}>
                <img
                    src="https://avatars.yandex.net/get-music-user-playlist/71140/595193671.1017.52340/m1000x1000?1664977781745&webp=false"
                    alt="Фотография"/>
            </header>
    );
};

export default Header;