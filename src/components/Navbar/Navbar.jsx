import classes from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/profile" className={({isActive}) =>
                    isActive ? classes.activeLink : undefined}
                >
                    Profile
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/dialogs" className={({isActive}) =>
                    isActive ? classes.activeLink : undefined}
                >
                    Messages
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/news" className={({isActive}) =>
                    isActive ? classes.activeLink : undefined}
                >
                    News
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="music" className={({isActive}) =>
                    isActive ? classes.activeLink : undefined}
                >
                    Music
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/settings" className={({isActive}) =>
                    isActive ? classes.activeLink : undefined}
                >
                    Settings
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;