import logo from '../../../assets/svg/logo-white.svg';
import brandName from '../../../assets/svg/brand-name-white.svg';

function Nav2(props) {
    return (
        <div className={`Nav ${props.className} flex justify-between bg-blue-lighter px-16 py-6 items-center`}>
            <div className="flex">
                <img src={logo} className="Nav-logo" alt="logo" />&nbsp;&nbsp;
                <img src={brandName} className="Nav-logo" alt="logo" />
            </div>
            <div className="flex items-center">
                {
                    props.children
                }
            </div>
        </div>
    );
  }
  
  export default Nav2;
  