
const MainContent = () => {
    return (
        <div className='mainContent'>
            <div className="header">
                <h1>Update Your Account</h1>

                <div className="message">
                    Deleting your account cannot be undone <span>Ibn</span>! You need to confirm your password to delete your account. 
                </div>

                <button>Deleter Account</button>
            </div>

            <div className="account">
                <h3>Profile Picture</h3>
                <div className="profilePic">
                    <img src="../../public/img/ibn.jpg" alt="profile" />
                    <p>Change</p>
                </div>

                <form>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" placeholder="Enter Username" />

                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="Enter Email" />

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="**********" />

                    <button type="submit">Update</button>
                </form>
            </div>
        </div>
    );
}

export default MainContent;
