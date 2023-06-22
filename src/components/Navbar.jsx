import { useState } from 'react';
import '../assets/styles/Navbar.css';

const Navbar = () => {
    const [toggle, setToggle] = useState(true);

    function toggler() {
        setToggle(!toggle);
    }

    return (
        <nav className='container'>
            <div className="logo">
                <img src="/images/logo.svg" alt="logo" />
            </div>

            <div className="navLinks">
                <ul>
                    <li><p>Home</p></li>
                    <li><p>New</p></li>
                    <li><p>Porpular</p></li>
                    <li><p>Trending</p></li>
                    <li><p>Categories</p></li>
                </ul>
            </div>

            <div className="toggleNav">
                <img src="/images/icon-menu.svg" alt="menu" onClick={toggler} />
            </div>

            <div className={toggle ? 'mobileNavLinks' : 'mobileNavLinks show'}>
                <div className="close">
                    <img src="/images/icon-menu-close.svg" alt="close" id="close" onClick={toggler}/>
                </div>
                    <ul>
                        <li><p>Home</p></li>
                        <li><p>New</p></li>
                        <li><p>Porpular</p></li>
                        <li><p>Trending</p></li>
                        <li><p>Categories</p></li>
                    </ul>
            </div>
        </nav>
    );
}

export default Navbar;
