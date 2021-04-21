import React, { useContext } from 'react';
import siteLogo from '../../../images/site-logo.png';
import './NavbarTop.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt,faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';


const NavbarTop = () => {
    const [loggedInUser, setLoggedInUser]=useContext(UserContext);
    let { name,email} = loggedInUser;
    const userEmail =sessionStorage.getItem('userEmail');
    const userName =sessionStorage.getItem('userName');
    if(userEmail !==  null){
        email= userEmail;
        name= userName;
    }

    const handleSignOut=()=>{
        setLoggedInUser({});
        sessionStorage.clear();
    }
    return (
        <div className='row top-navbar pb-3'>
            <div className="col-md-6 pl-5 d-flex align-items-center">
                <img className='logo-img' src={siteLogo} alt="" />
                <strong>Plumb Parfect</strong>
            </div>
            <div className="col-md-2 pt-4 pl-5">
                <p>24H EMERGENCY SERVICE</p>
                <h5><FontAwesomeIcon icon={faPhoneAlt} /> 01780000001</h5>
            </div>
            <div className="col-md-2 pt-4 pl-5">
                <div>
                <p>CALL OFFICE #</p>
                <h5><FontAwesomeIcon icon={faPhoneAlt} /> 01780000001</h5>
                </div>
            </div>
            <div className="col-md-2 d-flex justify-content-left pt-4 pl-5 align-items-center">
                {
                    !email ? <Link to="/login" className="btn btn-success"><FontAwesomeIcon icon={faSignInAlt} /> Login</Link>:<Link onClick={handleSignOut} className="btn mx-3 btn-success"><FontAwesomeIcon icon={faSignOutAlt} /> Logout</Link>
                }
                
                    
                
            </div>
        </div>
    );
};

export default NavbarTop;