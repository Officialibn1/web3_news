import './styles/Navbar.css';


const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <h1>ibn&apos;s App</h1>
            </div>

            <ul>
                <li><p>Home</p></li>
                <li><p>About</p></li>
                <li><p>Contact</p></li>
            </ul>

            <div className="profile">
                <img src="../../public/img/ibn.jpg" alt="profile" />
                <h3>Ibn</h3>
            </div>
        </nav>
    );
}

export default Navbar;
