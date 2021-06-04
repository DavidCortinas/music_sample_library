import React from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {
    return (
        // < !----Edit Profile Wrapper Start---->
        <div className="ms_profile_wrapper">
            <h1>Edit Profile</h1>
            <div className="ms_profile_box">
                <div className="ms_pro_img">
                    <img src="images/pro_img.jpg" alt="" className="img-fluid" />
                    <div className="pro_img_overlay">
                        <i className="fa_icon edit_icon"></i>
                    </div>
                </div>
                <form className="ms_pro_form">
                    <div className="form-group">
                        <label>Your Name *</label>
                        <input type="text" placeholder="Your Name" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Your Email *</label>
                        <input type="text" placeholder="example@email.com" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Your Password *</label>
                        <input type="password" placeholder="Your password..." className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password *</label>
                        <input type="password" placeholder="Confirm password..." className="form-control" />
                    </div>
                    <div className="pro-form-btn text-center marger_top15">
                        <Link to="/upload" href="#" className="ms_btn">save</Link>
                        {/* <a href="#" className="ms_btn">cancel</a> */}
                    </div>
                </form>
            </div>
        </div>
        // <!----Main div close----> 
    )
}

export default Profile
