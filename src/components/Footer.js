import React from 'react'
import { Link } from 'react-router-dom'
// import { useAuth } from '../contexts/AuthContext'

const Footer = () => {

    return (
        <div>
            {/* <!----Footer Start----> */}
            <div className="ms_footer_wrapper">
                <div className="ms_footer_logo">
                    <Link to="/" href="index.html"><img src="" alt="" /></Link>
                </div>
                <div className="ms_footer_inner">
                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                            <div className="footer_box">
                                <h1 className="footer_title">Deep Cuts Music Sample Library</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.</p>
                            </div>
                        </div>
                        {/* <div className="col-lg-3 col-md-6">
                            <div className="footer_box footer_app">
                                <h1 className="footer_title">Download our App</h1>
                                <p>Go Mobile with our app.<br /> Listen to your favourite songs at just one click. Download Now !</p>
                                <Link to="/" href="/" className="foo_app_btn"><img src="images/google_play.jpg" alt="" className="img-fluid" /></Link>
                                <Link to="/" href="/" className="foo_app_btn"><img src="images/app_store.jpg" alt="" className="img-fluid" /></Link>
                                <Link to="/" href="/" className="foo_app_btn"><img src="images/windows.jpg" alt="" className="img-fluid" /></Link>
                            </div>
                        </div> */}
                        <div className="col-lg-4 col-md-4">
                            <div className="footer_box footer_subscribe">
                                <h1 className="footer_title">subscribe</h1>
                                <p>Subscribe to our newsletter and get latest updates and offers.</p>
                                <form>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Enter Your Name" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Enter Your Email" />
                                    </div>
                                    <div className="form-group">
                                        <Link to="/" href="/" className="ms_btn">sign me up</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="footer_box footer_contacts">
                                <h1 className="footer_title">contact us</h1>
                                <ul className="foo_con_info">
                                    <li>
                                        <div className="foo_con_icon">
                                            <img src="images/svg/phone.svg" alt="" />
                                        </div>
                                        <div className="foo_con_data">
                                            <span className="con-title">Call us :</span>
                                            <span>(+1) 281-330-8004, (+1) 2025-5501</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="foo_con_icon">
                                            <img src="images/svg/message.svg" alt="" />
                                        </div>
                                        <div className="foo_con_data">
                                            <span className="con-title">email us :</span>
                                            <span><Link to="/" href="/">demo@mail.com </Link>, <Link to='/' href="/">dummy@mail.com</Link></span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="foo_con_icon">
                                            <img src="images/svg/add.svg" alt="" />
                                        </div>
                                        <div className="foo_con_data">
                                            <span className="con-title">walk in :</span>
                                            <span>333 Music Lane, Austin</span>
                                        </div>
                                    </li>
                                </ul>
                                <div className="foo_sharing">
                                    <div className="share_title">follow us :</div>
                                    <ul>
                                        <li><Link to="/" href="/"><i className="fa fa-facebook"></i></Link></li>
                                        <li><Link to="/" href="/"><i className="fa fa-linkedin"></i></Link></li>
                                        <li><Link to="/" href="/"><i className="fa fa-twitter"></i></Link></li>
                                        <li><Link to="/" href="/"><i className="fa fa-google-plus"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!----Copyright----> */}
                <div className="col-lg-12">
                    <div className="ms_copyright">
                        <div className="footer_border"></div>
                        {/* <p>Copyright &copy; 2018 <Link to="/" href="/">The Miraculous Music Template</Link>. All Rights Reserved.</p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
