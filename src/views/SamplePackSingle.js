import React from 'react'

const SamplePackSingle = () => {
    return (
        <div>
            {/* <!----Album Single Section Start----> */}
            <div className="ms_album_single_wrapper">
                <div className="album_single_data">
                    <div className="album_single_img">
                        <img src="images/album/single_album.jpg" alt="" className="img-fluid" />
                    </div>
                    <div className="album_single_text">
                        <h2>Dream Your Moments</h2>
                        <p className="singer_name">By - Ava Cornish, Brian Hill</p>
                        <div className="album_feature">
                            <a href="#" className="album_date">5 song | 25:10</a>
                            <a href="#" className="album_date">Released March 23, 2018  | Abc Music Company</a>
                        </div>
                        <div className="album_btn">
                            <a href="#" className="ms_btn play_btn"><span className="play_all"><img src="images/svg/play_all.svg" alt="" />Play All</span><span className="pause_all"><img src="images/svg/pause_all.svg" alt="" />Pause</span></a>
                            <a href="#" className="ms_btn"><span className="play_all"><img src="images/svg/add_q.svg" alt="" />Add To Queue</span></a>
                        </div>
                    </div>
                    <div className="album_more_optn ms_more_icon">
                        <span><img src="images/svg/more1.svg" alt="" /></span>
                    </div>
                    <ul className="more_option">
                        <li><a href="#"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favourites</a></li>
                        <li><a href="#"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</a></li>
                        <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</a></li>
                        <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</a></li>
                        <li><a href="#"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</a></li>
                    </ul>
                </div>
                {/* <!----Song List----> */}
                <div className="album_inner_list">
                    <div className="album_list_wrapper">
                        <ul className="album_list_name">
                            <li>#</li>
                            <li>Song Title</li>
                            <li>Artist</li>
                            <li className="text-center">Duration</li>
                            <li className="text-center">Add To Favourites</li>
                            <li className="text-center">More</li>
                        </ul>
                        <ul>
                            <li><a href="#"><span className="play_no">01</span><span className="play_hover"></span></a></li>
                            <li><a href="#">Bloodlust</a></li>
                            <li><a href="#">Ava Cornish & Brian Hill</a></li>
                            <li className="text-center"><a href="#">5:26</a></li>
                            <li className="text-center"><a href="#"><span className="ms_icon1 ms_fav_icon"></span></a></li>
                            <li className="text-center ms_more_icon"><a href="javascript:;"><span className="ms_icon1 ms_active_icon"></span></a>
                                <ul className="more_option">
                                    <li><a href="#"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favourites</a></li>
                                    <li><a href="#"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</a></li>
                                    <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</a></li>
                                    <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</a></li>
                                    <li><a href="#"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</a></li>
                                </ul>
                            </li>
                        </ul>
                        <ul>
                            <li><a href="#"><span className="play_no">02</span><span className="play_hover"></span></a></li>
                            <li><a href="#">Desired Games</a></li>
                            <li><a href="#">Ava Cornish & Brian Hill</a></li>
                            <li className="text-center"><a href="#">5:26</a></li>
                            <li className="text-center"><a href="#"><span className="ms_icon1 ms_fav_icon"></span></a></li>
                            <li className="text-center ms_more_icon"><a href="javascript:;"><span className="ms_icon1 ms_active_icon"></span></a>
                                <ul className="more_option">
                                    <li><a href="#"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favourites</a></li>
                                    <li><a href="#"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</a></li>
                                    <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</a></li>
                                    <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</a></li>
                                    <li><a href="#"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</a></li>
                                </ul>
                            </li>
                        </ul>
                        <ul>
                            <li><a href="#"><span className="play_no">03</span><span className="play_hover"></span></a></li>
                            <li><a href="#">Until I Met You</a></li>
                            <li><a href="#">Ava Cornish & Brian Hill</a></li>
                            <li className="text-center"><a href="#">5:26</a></li>
                            <li className="text-center"><a href="#"><span className="ms_icon1 ms_fav_icon"></span></a></li>
                            <li className="text-center ms_more_icon"><a href="javascript:;"><span className="ms_icon1 ms_active_icon"></span></a>
                                <ul className="more_option">
                                    <li><a href="#"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favourites</a></li>
                                    <li><a href="#"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</a></li>
                                    <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</a></li>
                                    <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</a></li>
                                    <li><a href="#"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</a></li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="play_active_song">
                            <li><a href="#"><span className="play_no">04</span><span className="play_hover"></span></a></li>
                            <li><a href="#">Dark Alley Acoustic</a></li>
                            <li><a href="#">Ava Cornish & Brian Hill</a></li>
                            <li className="text-center"><a href="#">5:26</a></li>
                            <li className="text-center"><a href="#"><span className="ms_icon1 ms_fav_icon"></span></a></li>
                            <li className="text-center ms_more_icon"><a href="javascript:;"><span className="ms_icon1 ms_active_icon"></span></a>
                                <ul className="more_option">
                                    <li><a href="#"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favourites</a></li>
                                    <li><a href="#"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</a></li>
                                    <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</a></li>
                                    <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</a></li>
                                    <li><a href="#"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</a></li>
                                </ul>
                            </li>
                        </ul>
                        <ul>
                            <li><a href="#"><span className="play_no">05</span><span className="play_hover"></span></a></li>
                            <li><a href="#">Cloud nine</a></li>
                            <li><a href="#">Ava Cornish & Brian Hill</a></li>
                            <li className="text-center"><a href="#">5:26</a></li>
                            <li className="text-center"><a href="#"><span className="ms_icon1 ms_fav_icon"></span></a></li>
                            <li className="text-center ms_more_icon"><a href="javascript:;"><span className="ms_icon1 ms_active_icon"></span></a>
                                <ul className="more_option">
                                    <li><a href="#"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favourites</a></li>
                                    <li><a href="#"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</a></li>
                                    <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</a></li>
                                    <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</a></li>
                                    <li><a href="#"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!---Main Content Start---> */}
            <div className="ms_content_wrapper ms_album_content">
                {/* <!----Testimonial section Start----> */}
                <div className="ms_test_wrapper">
                    <div className="ms_heading">
                        <h1>comments (5)</h1>
                    </div>
                    <div className="ms_test_slider swiper-container">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="ms_test_box">
                                    <div className="ms_test_top">
                                        <div className="ms_test_img">
                                            <img src="images/user1.jpg" alt="" />
                                        </div>
                                        <div className="ms_test_name">
                                            <h3>Frank Adler</h3>
                                            <span className="cmnt_time">10 Minutes Ago</span>
                                        </div>
                                    </div>
                                    <div className="ms_test_para">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="ms_test_box">
                                    <div className="ms_test_top">
                                        <div className="ms_test_img">
                                            <img src="images/user2.jpg" alt="" />
                                        </div>
                                        <div className="ms_test_name">
                                            <h3>Frank Adler</h3>
                                            <span className="cmnt_time">10 Days Ago</span>
                                        </div>
                                    </div>
                                    <div className="ms_test_para">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="ms_test_box">
                                    <div className="ms_test_top">
                                        <div className="ms_test_img">
                                            <img src="images/user3.jpg" alt="" />
                                        </div>
                                        <div className="ms_test_name">
                                            <h3>Frank Adler</h3>
                                            <span className="cmnt_time">10 Hours Ago</span>
                                        </div>
                                    </div>
                                    <div className="ms_test_para">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="ms_test_box">
                                    <div className="ms_test_top">
                                        <div className="ms_test_img">
                                            <img src="images/user4.jpg" alt="" />
                                        </div>
                                        <div className="ms_test_name">
                                            <h3>Frank Adler</h3>
                                            <span className="cmnt_time">10 Minutes Ago</span>
                                        </div>
                                    </div>
                                    <div className="ms_test_para">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="ms_test_box">
                                    <div className="ms_test_top">
                                        <div className="ms_test_img">
                                            <img src="images/user1.jpg" alt="" />
                                        </div>
                                        <div className="ms_test_name">
                                            <h3>Frank Adler</h3>
                                            <span className="cmnt_time">10 Minutes Ago</span>
                                        </div>
                                    </div>
                                    <div className="ms_test_para">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="ms_test_box">
                                    <div className="ms_test_top">
                                        <div className="ms_test_img">
                                            <img src="images/user2.jpg" alt="" />
                                        </div>
                                        <div className="ms_test_name">
                                            <h3>Frank Adler</h3>
                                            <span className="cmnt_time">10 Minutes Ago</span>
                                        </div>
                                    </div>
                                    <div className="ms_test_para">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="ms_test_box">
                                    <div className="ms_test_top">
                                        <div className="ms_test_img">
                                            <img src="images/user3.jpg" alt="" />
                                        </div>
                                        <div className="ms_test_name">
                                            <h3>Frank Adler</h3>
                                            <span className="cmnt_time">10 Minutes Ago</span>
                                        </div>
                                    </div>
                                    <div className="ms_test_para">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Add Arrows --> */}
                    <div className="swiper-button-next1 slider_nav_next"></div>
                    <div className="swiper-button-prev1 slider_nav_prev"></div>
                </div>
                {/* <!----Comment Form section Start----> */}
                <div className="ms_cmnt_wrapper">
                    <div className="ms_heading">
                        <h1>Leave A Comment</h1>
                    </div>
                    <div className="ms_cmnt_form">
                        <form>
                            <div className="ms_input_group">
                                <div className="ms_input">
                                    <input type="text" className="form-control" placeholder="Enter Your Name Here.." />
                                </div>
                                <div className="ms_input marger_top20">
                                    <input type="text" className="form-control" placeholder="Enter Your Email Here.." />
                                </div>
                            </div>
                            <div className="ms_input_group1">
                                <div className="ms_input">
                                    <textarea name="message" className="form-control" placeholder="Enter Your Comment Here.."></textarea>
                                </div>
                            </div>
                            <div className="ms_input_group2">
                                <div className="ms_input">
                                    <button className="ms_btn">post your comment</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                {/* <!----Featured Albumn Section Start----> */}
                <div className="ms_fea_album_slider padder_top5">
                    <div className="ms_heading">
                        <h1>You May Also Like</h1>
                        <span className="veiw_all"><a href="#">view more</a></span>
                    </div>
                    <div className="ms_album_slider swiper-container">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="ms_rcnt_box">
                                    <div className="ms_rcnt_box_img">
                                        <img src="images/album/album1.jpg" alt="" />
                                        <div className="ms_main_overlay">
                                            <div className="ms_box_overlay"></div>
                                            <div className="ms_more_icon">
                                                <img src="images/svg/more.svg" alt="" />
                                            </div>
                                            <ul className="more_option">
                                                <li><a href="#"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favourites</a></li>
                                                <li><a href="#"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</a></li>
                                                <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</a></li>
                                                <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</a></li>
                                                <li><a href="#"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</a></li>
                                            </ul>
                                            <div className="ms_play_icon">
                                                <img src="images/svg/play.svg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ms_rcnt_box_text">
                                        <h3><a href="#">Bloodlust</a></h3>
                                        <p>Ava Cornish & Brian Hill</p>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="ms_rcnt_box">
                                    <div className="ms_rcnt_box_img">
                                        <img src="images/album/album2.jpg" alt="" />
                                        <div className="ms_main_overlay">
                                            <div className="ms_box_overlay"></div>
                                            <div className="ms_more_icon">
                                                <img src="images/svg/more.svg" alt="" />
                                            </div>
                                            <ul className="more_option">
                                                <li><a href="#"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favourites</a></li>
                                                <li><a href="#"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</a></li>
                                                <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</a></li>
                                                <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</a></li>
                                                <li><a href="#"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</a></li>
                                            </ul>
                                            <div className="ms_play_icon">
                                                <img src="images/svg/play.svg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ms_rcnt_box_text">
                                        <h3><a href="#">Time flies</a></h3>
                                        <p>Ava Cornish & Brian Hill</p>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="ms_rcnt_box">
                                    <div className="ms_rcnt_box_img">
                                        <img src="images/album/album3.jpg" alt="" />
                                        <div className="ms_main_overlay">
                                            <div className="ms_box_overlay"></div>
                                            <div className="ms_more_icon">
                                                <img src="images/svg/more.svg" alt="" />
                                            </div>
                                            <ul className="more_option">
                                                <li><a href="#"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favourites</a></li>
                                                <li><a href="#"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</a></li>
                                                <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</a></li>
                                                <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</a></li>
                                                <li><a href="#"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</a></li>
                                            </ul>
                                            <div className="ms_play_icon">
                                                <img src="images/svg/play.svg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ms_rcnt_box_text">
                                        <h3><a href="#">Dark matters</a></h3>
                                        <p>Ava Cornish & Brian Hill</p>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="ms_rcnt_box">
                                    <div className="ms_rcnt_box_img">
                                        <img src="images/album/album4.jpg" alt="" />
                                        <div className="ms_main_overlay">
                                            <div className="ms_box_overlay"></div>
                                            <div className="ms_more_icon">
                                                <img src="images/svg/more.svg" alt="" />
                                            </div>
                                            <ul className="more_option">
                                                <li><a href="#"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favourites</a></li>
                                                <li><a href="#"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</a></li>
                                                <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</a></li>
                                                <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</a></li>
                                                <li><a href="#"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</a></li>
                                            </ul>
                                            <div className="ms_play_icon">
                                                <img src="images/svg/play.svg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ms_rcnt_box_text">
                                        <h3><a href="#">Eye to eye</a></h3>
                                        <p>Ava Cornish & Brian Hill</p>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="ms_rcnt_box">
                                    <div className="ms_rcnt_box_img">
                                        <img src="images/album/album5.jpg" alt="" />
                                        <div className="ms_main_overlay">
                                            <div className="ms_box_overlay"></div>
                                            <div className="ms_more_icon">
                                                <img src="images/svg/more.svg" alt="" />
                                            </div>
                                            <ul className="more_option">
                                                <li><a href="#"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favourites</a></li>
                                                <li><a href="#"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</a></li>
                                                <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</a></li>
                                                <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</a></li>
                                                <li><a href="#"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</a></li>
                                            </ul>
                                            <div className="ms_play_icon">
                                                <img src="images/svg/play.svg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ms_rcnt_box_text">
                                        <h3><a href="#">Cloud nine</a></h3>
                                        <p>Ava Cornish & Brian Hill</p>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="ms_rcnt_box">
                                    <div className="ms_rcnt_box_img">
                                        <img src="images/album/album6.jpg" alt="" />
                                        <div className="ms_main_overlay">
                                            <div className="ms_box_overlay"></div>
                                            <div className="ms_more_icon">
                                                <img src="images/svg/more.svg" alt="" />
                                            </div>
                                            <ul className="more_option">
                                                <li><a href="#"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favourites</a></li>
                                                <li><a href="#"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</a></li>
                                                <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</a></li>
                                                <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</a></li>
                                                <li><a href="#"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</a></li>
                                            </ul>
                                            <div className="ms_play_icon">
                                                <img src="images/svg/play.svg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ms_rcnt_box_text">
                                        <h3><a href="#">Cobweb of lies</a></h3>
                                        <p>Ava Cornish & Brian Hill</p>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="ms_rcnt_box">
                                    <div className="ms_rcnt_box_img">
                                        <img src="images/album/album1.jpg" alt="" />
                                        <div className="ms_main_overlay">
                                            <div className="ms_box_overlay"></div>
                                            <div className="ms_more_icon">
                                                <img src="images/svg/more.svg" alt="" />
                                            </div>
                                            <ul className="more_option">
                                                <li><a href="#"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favourites</a></li>
                                                <li><a href="#"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</a></li>
                                                <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</a></li>
                                                <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</a></li>
                                                <li><a href="#"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</a></li>
                                            </ul>
                                            <div className="ms_play_icon">
                                                <img src="images/svg/play.svg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ms_rcnt_box_text">
                                        <h3><a href="#">Bloodlust</a></h3>
                                        <p>Ava Cornish & Brian Hill</p>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="ms_rcnt_box">
                                    <div className="ms_rcnt_box_img">
                                        <img src="images/album/album2.jpg" alt="" />
                                        <div className="ms_main_overlay">
                                            <div className="ms_box_overlay"></div>
                                            <div className="ms_more_icon">
                                                <img src="images/svg/more.svg" alt="" />
                                            </div>
                                            <ul className="more_option">
                                                <li><a href="#"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favourites</a></li>
                                                <li><a href="#"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</a></li>
                                                <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</a></li>
                                                <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</a></li>
                                                <li><a href="#"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</a></li>
                                            </ul>
                                            <div className="ms_play_icon">
                                                <img src="images/svg/play.svg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ms_rcnt_box_text">
                                        <h3><a href="#">Time flies</a></h3>
                                        <p>Ava Cornish & Brian Hill</p>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="ms_rcnt_box">
                                    <div className="ms_rcnt_box_img">
                                        <img src="images/album/album3.jpg" alt="" />
                                        <div className="ms_main_overlay">
                                            <div className="ms_box_overlay"></div>
                                            <div className="ms_more_icon">
                                                <img src="images/svg/more.svg" alt="" />
                                            </div>
                                            <ul className="more_option">
                                                <li><a href="#"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favourites</a></li>
                                                <li><a href="#"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</a></li>
                                                <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</a></li>
                                                <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</a></li>
                                                <li><a href="#"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</a></li>
                                            </ul>
                                            <div className="ms_play_icon">
                                                <img src="images/svg/play.svg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ms_rcnt_box_text">
                                        <h3><a href="#">Dark matters</a></h3>
                                        <p>Ava Cornish & Brian Hill</p>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="ms_rcnt_box">
                                    <div className="ms_rcnt_box_img">
                                        <img src="images/album/album4.jpg" alt="" />
                                        <div className="ms_main_overlay">
                                            <div className="ms_box_overlay"></div>
                                            <div className="ms_more_icon">
                                                <img src="images/svg/more.svg" alt="" />
                                            </div>
                                            <ul className="more_option">
                                                <li><a href="#"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favourites</a></li>
                                                <li><a href="#"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</a></li>
                                                <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</a></li>
                                                <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</a></li>
                                                <li><a href="#"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</a></li>
                                            </ul>
                                            <div className="ms_play_icon">
                                                <img src="images/svg/play.svg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ms_rcnt_box_text">
                                        <h3><a href="#">Eye to eye</a></h3>
                                        <p>Ava Cornish & Brian Hill</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Add Arrows --> */}
                    <div className="swiper-button-next3 slider_nav_next"></div>
                    <div className="swiper-button-prev3 slider_nav_prev"></div>
                </div>
                {/* <!----New Releases Section Start----> */}
                <div className="ms_releases_wrapper">
                    <div className="ms_heading">
                        <h1>Newly Released Albums</h1>
                        <span className="veiw_all"><a href="#">view more</a></span>
                    </div>
                    <div className="ms_release_slider swiper-container">
                        <div className="ms_divider"></div>
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="ms_release_box">
                                    <div className="w_top_song">
                                        <span className="slider_dot"></span>
                                        <div className="w_tp_song_img">
                                            <img src="images/weekly/song1.jpg" alt="" />
                                            <div className="ms_song_overlay">
                                            </div>
                                            <div className="ms_play_icon">
                                                <img src="images/svg/play.svg" alt="" />
                                            </div>
                                        </div>
                                        <div className="w_tp_song_name">
                                            <h3><a href="#">Dark Alley Acoustic</a></h3>
                                            <p>Ava Cornish</p>
                                        </div>
                                    </div>
                                    <div className="weekly_right">
                                        <span className="w_song_time">5:10</span>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="ms_release_box">
                                    <div className="w_top_song">
                                        <span className="slider_dot"></span>
                                        <div className="w_tp_song_img">
                                            <img src="images/weekly/song2.jpg" alt="" />
                                            <div className="ms_song_overlay">
                                            </div>
                                            <div className="ms_play_icon">
                                                <img src="images/svg/play.svg" alt="" />
                                            </div>
                                        </div>
                                        <div className="w_tp_song_name">
                                            <h3><a href="#">Dark Alley Acoustic</a></h3>
                                            <p>Ava Cornish</p>
                                        </div>
                                    </div>
                                    <div className="weekly_right">
                                        <span className="w_song_time">5:10</span>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="ms_release_box">
                                    <div className="w_top_song">
                                        <span className="slider_dot"></span>
                                        <div className="w_tp_song_img">
                                            <img src="images/weekly/song3.jpg" alt="" />
                                            <div className="ms_song_overlay">
                                            </div>
                                            <div className="ms_play_icon">
                                                <img src="images/svg/play.svg" alt="" />
                                            </div>
                                        </div>
                                        <div className="w_tp_song_name">
                                            <h3><a href="#">Dark Alley Acoustic</a></h3>
                                            <p>Ava Cornish</p>
                                        </div>
                                    </div>
                                    <div className="weekly_right">
                                        <span className="w_song_time">5:10</span>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="ms_release_box">
                                    <div className="w_top_song">
                                        <span className="slider_dot"></span>
                                        <div className="w_tp_song_img">
                                            <img src="images/weekly/song4.jpg" alt="" />
                                            <div className="ms_song_overlay">
                                            </div>
                                            <div className="ms_play_icon">
                                                <img src="images/svg/play.svg" alt="" />
                                            </div>
                                        </div>
                                        <div className="w_tp_song_name">
                                            <h3><a href="#">Dark Alley Acoustic</a></h3>
                                            <p>Ava Cornish</p>
                                        </div>
                                    </div>
                                    <div className="weekly_right">
                                        <span className="w_song_time">5:10</span>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="ms_release_box">
                                    <div className="w_top_song">
                                        <span className="slider_dot"></span>
                                        <div className="w_tp_song_img">
                                            <img src="images/weekly/song5.jpg" alt="" />
                                            <div className="ms_song_overlay">
                                            </div>
                                            <div className="ms_play_icon">
                                                <img src="images/svg/play.svg" alt="" />
                                            </div>
                                        </div>
                                        <div className="w_tp_song_name">
                                            <h3><a href="#">Dark Alley Acoustic</a></h3>
                                            <p>Ava Cornish</p>
                                        </div>
                                    </div>
                                    <div className="weekly_right">
                                        <span className="w_song_time">5:10</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Add Arrows --> */}
                    <div className="swiper-button-next2 slider_nav_next"></div>
                    <div className="swiper-button-prev2 slider_nav_prev"></div>
                </div>
            </div>
        </div>
    )
}


export default SamplePackSingle
