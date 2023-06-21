import '../assets/styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className='container'>
            <div className="logo">
                <img src="/public/images/logo.svg" alt="logo" />
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
        </nav>
    );
}

export default Navbar;
