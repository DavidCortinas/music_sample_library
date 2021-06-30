import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { DataContext } from '../contexts/DataProvider';
// import firebase from 'firebase';
// import $ from 'jquery';

const Header = (props) => {
    // const [currentTime, setCurrentTime] = useState(0);

    // useEffect(() => {
    //     fetch('/api/user').then(res => res.json()).then(data => {
    //         setCurrentTime(data.time);
    //     });
    // }, []);

    var { currentUser }  = useAuth();
    const { cartList } = useContext(DataContext);
    const [cart, setCart] = cartList;

    const handleLogin = () => {
        props.startUI();
        setCart({ items: {}, quantity: 0, tax: 0, subtotal: 0, grandtotal: 0 })
    }

    const handleLogout = () => {
        props.signOut();
    }

    const checkAuth = () => {
        console.log(currentUser)
    }

    // console.log("H-CU", currentUser)

    return (
        <div>
            {/* <!---Header---> */}
            <div className="ms_header">
                <div className="ms_top_left">
                    {/* <div className="ms_top_search">
                        <input type="text" className="form-control" placeholder="Search Music Here..." />
                        <span className="search_icon">
                            <img src="images/svg/search.svg" alt="" />
                        </span>
                    </div> */}
                    <div className="ms_top_trend">
                        {/* <span><Link to="/" className="ms_color">Trending Music :</Link></span> 
                        <span className="top_marquee"><Link to="/" href="/">Will this feature be used????</Link></span> */}
                        {
                            currentUser.loggedIn
                            ?
                            <span><Link to="/" className="ms_color">Hello {currentUser.user.name}, Welcome to Deep Cuts Music Library</Link></span>
                            :
                            <span><Link to="/" className="ms_color">Welcome to Deep Cuts Music Library</Link></span>
                        }
                    </div>
                </div>
                <div className="ms_top_right">
                    <div className="ms_top_lang">
                        {/* <span data-toggle="modal" data-target="#lang_modal">Languages <img src="images/svg/lang.svg" alt="" /></span> */}
                        {
                            currentUser.loggedIn
                            ?
                            <Link to="/upload" onClick={(e) => checkAuth(e)}className="ms_btn login_btn"><span>Upload</span></Link>
                            :
                            <div></div>
                        }
                    </div>
                    <div className="ms_top_btn">
                        {
                            !currentUser.loggedIn
                            ?
                            <Link onClick={() => handleLogin()} to="" className="ms_btn login_btn"><span>Login/Register</span></Link>
                            :
                            <Link onClick={() => handleLogout()} to="" className="ms_btn login_btn"><span>Logout</span></Link>
                        }
                        
                        {/* <Link href="javascript:;" className="ms_btn reg_btn" data-toggle="modal" data-target="#myModal"><span>Register</span></Link>
                        <Link onClick={props.signIn} href="javascript:;" className="ms_btn login_btn" data-toggle="modal" data-target="#myModal1"><span>Login</span></Link> */}
                    </div>
                </div>
            </div>
        </div>

        
    )
}

export default Header
