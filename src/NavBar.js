import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import UserContext from './UserContext';
import './NavBar.css';


/**Navbar for site, will be at top of every page
 * when user is signed in, shows links for main areas of site.
 * when not, shows links to login and signup form
  */

function NavBar({ logout }) {
    const { currentUser } = useContext(UserContext);
    console.debug('Navigation', 'currentUser=', currentUser);

    function loggedInNav() {
        return (
            <ul className='navbar-nav-ml-auto'>
                <li className='nav-item mr-4'>
                    <NavLink className='nav-link' to='/companies'>
                        Company List
                            </NavLink>
                </li>

                <li className='nav-item mr-4'>
                    <NavLink className='nav-link' to='/jobs'>
                        Jobs List
                            </NavLink>
                </li>

                <li className='nav-item mr-4'>
                    <NavLink className='nav-link' to='/profile'>
                        Profile Page
                            </NavLink>
                </li>

                <li className='nav-item'>
                    <Link className='nav-link' to='/' onClick={logout}>
                        Log out {currentUser.first_name || currentUser.username}
                    </Link>
                </li>
            </ul>
        );
    }

    function loggedOutNav() {
        return (
            <ul className='navbar-nav ml-auto'>
                <li className='nav-item mr-4'>
                    <NavLink className='nav-link' to='/login'>
                        Log in Page
                    </NavLink>
                </li>
                <li className='nav-item mr-4'>
                    <NavLink className='nav-link' to='/signup'>
                        Sign up Page
                    </NavLink>
                </li>
            </ul>
        );
    }
    return (
        <nav className = 'NavBar navbar navbar-expand-md'>
            <Link className = 'navbar-brand' to = '/'>
                Jobly
            </Link>
            {currentUser ? loggedInNav() : loggedOutNav()}
        </nav>
    );

}

export default NavBar;
