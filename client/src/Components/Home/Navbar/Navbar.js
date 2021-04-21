import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav style={{backgroundColor:"purple"}} className=" pl-5 navbar navbar-expand-lg navbar-dark">
                <p className='pt-2 font-weight-bold text-light'>Plumb Perfect</p>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className='px-3 pt-2 text-warning link-style' to='/home'>Home</Link>
                        <Link className='px-3 pt-2 text-warning  link-style' to='/dashboard'>Dashboard</Link>
                        <Link className='px-3 pt-2 text-warning  link-style' to='#'>About</Link>
                        <Link className='px-3 pt-2  text-warning  link-style' to='#'>Contact</Link> 
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;