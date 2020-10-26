import logo from '../../../assets/svg/logo.svg';
import brandName from '../../../assets/svg/brand-name.svg';

function Nav(props) {
    return (
        <div className={`Nav ${props.className} flex justify-between px-16 py-6 items-center`}>
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
  
  export default Nav;
  