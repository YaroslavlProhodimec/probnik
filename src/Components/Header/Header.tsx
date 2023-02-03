import React from 'react';
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";

const Header = (props:any) => {
    return (
        <header className={s.header}>
            <img
                className={s.img}
                src="https://w7.pngwing.com/pngs/614/817/png-transparent-outlined-settings-cog-wheel-core-ui-outlined-icon.png"
            />
            <div className={s.loginBlock}>

                {props.isAuth ? <div>{ props.login} - <button onClick={props.logout}> Log out</button> </div>
                    : <NavLink className={s.item} activeClassName={s.activeLink} to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
};
export default Header;

