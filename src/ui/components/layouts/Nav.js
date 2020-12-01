import logo from '../../../assets/svg/logo.svg';
import brandName from '../../../assets/svg/brand-name.svg';
import { useState } from 'react';
import { useHistory } from 'react-router';

function Nav(props) {

    const [show, setShow] = useState(false)
    const history = useHistory()
    
    return (
        <div className={`Nav ${props.className} ${show ? 'mobile-nav': ''} flex justify-between w-full px-16 py-6 items-center absolute z-100`}>
            <div className="flex flex-row justify-between px-8 mobile-nav-brand">
                <div className="flex cursor-pointer" onClick={ () => history.push("/") }>
                    <img src={logo} className="Nav-logo" alt="logo" />&nbsp;&nbsp;
                    <img src={brandName} className="Nav-logo" alt="logo" />
                </div>
                <div className={`${show ? "menu_shown" : ""} menu__icon mobile relative`} onClick={ () => setShow(true)}>
                    <span></span>
                </div>
            </div>
            <div className={`flex items-center menus ${show ? '': 'mobile-hidden'}`}>
                {
                    props.children
                }
            </div>
            <div className={`close-menu ${show ? '': 'mobile-hidden'}`} onClick={ () => setShow(false)}></div>
        </div>
    );
  }
  
  export default Nav;
  