import React from 'react'

const Favorites = () => {
    return (
        <div>
            {/* <!---Main Content Start---> */}
            <div className="ms_content_wrapper padder_top80">
                {/* <!----Free Download Css Start----> */}
                <div className="ms_free_download ms_purchase_wrapper">
                    <div className="ms_heading">
                        <h1>Your Favorites</h1>
                    </div>
                    <div className="album_inner_list">
                        <div className="album_list_wrapper">
                            <ul className="album_list_name">
                                <li>#</li>
                                <li>Song Title</li>
                                <li>Album</li>
                                <li className="text-center">price</li>
                                <li className="text-center">Duration</li>
                                <li className="text-center">Add To Favorites</li>
                                <li className="text-center">More</li>
                                <li className="text-center">remove</li>
                            </ul>
                            <ul>
                                <li><a href="#"><span className="play_no">01</span><span className="play_hover"></span></a></li>
                                <li><a href="#">Bloodlust</a></li>
                                <li><a href="#">Dream Your Moments</a></li>
                                <li className="text-center"><a href="#">$5</a></li>
                                <li className="text-center"><a href="#">5:26</a></li>
                                <li className="text-center"><a href="#"><span className="ms_icon1 ms_fav_icon"></span></a></li>
                                <li className="text-center ms_more_icon"><a href="javascript:;"><span className="ms_icon1 ms_active_icon"></span></a>
                                    <ul className="more_option">
                                        <li><a href="#"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favorites</a></li>
                                        <li><a href="#"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</a></li>
                                        <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</a></li>
                                        <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</a></li>
                                        <li><a href="#"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</a></li>
                                    </ul>
                                </li>
                                <li className="text-center"><a href="#"><span className="ms_close">
                                    <img src="images/svg/close.svg" alt="" /></span></a></li>
                            </ul>
                            <ul>
                                <li><a href="#"><span className="play_no">02</span><span className="play_hover"></span></a></li>
                                <li><a href="#">Desired Games</a></li>
                                <li><a href="#">Dream Your Moments</a></li>
                                <li className="text-center"><a href="#">$5</a></li>
                                <li className="text-center"><a href="#">5:26</a></li>
                                <li className="text-center"><a href="#"><span className="ms_icon1 ms_fav_icon"></span></a></li>
                                <li className="text-center ms_more_icon"><a href="javascript:;"><span className="ms_icon1 ms_active_icon"></span></a>
                                    <ul className="more_option">
                                        <li><a href="#"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favorites</a></li>
                                        <li><a href="#"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</a></li>
                                        <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</a></li>
                                        <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</a></li>
                                        <li><a href="#"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</a></li>
                                    </ul>
                                </li>
                                <li className="text-center"><a href="#"><span className="ms_close">
                                    <img src="images/svg/close.svg" alt="" /></span></a></li>
                            </ul>
                            <ul>
                                <li><a href="#"><span className="play_no">03</span><span className="play_hover"></span></a></li>
                                <li><a href="#">Until I Met You</a></li>
                                <li><a href="#">Dream Your Moments</a></li>
                                <li className="text-center"><a href="#">$5</a></li>
                                <li className="text-center"><a href="#">5:26</a></li>
                                <li className="text-center"><a href="#"><span className="ms_icon1 ms_fav_icon"></span></a></li>
                                <li className="text-center ms_more_icon"><a href="javascript:;"><span className="ms_icon1 ms_active_icon"></span></a>
                                    <ul className="more_option">
                                        <li><a href="#"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favorites</a></li>
                                        <li><a href="#"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</a></li>
                                        <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</a></li>
                                        <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</a></li>
                                        <li><a href="#"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</a></li>
                                    </ul>
                                </li>
                                <li className="text-center"><a href="#"><span className="ms_close">
                                    <img src="images/svg/close.svg" alt="" /></span></a></li>
                            </ul>
                            <ul className="play_active_song">
                                <li><a href="#"><span className="play_no">04</span><span className="play_hover"></span></a></li>
                                <li><a href="#">Dark Alley Acoustic</a></li>
                                <li><a href="#">Dream Your Moments</a></li>
                                <li className="text-center"><a href="#">free</a></li>
                                <li className="text-center"><a href="#">5:26</a></li>
                                <li className="text-center"><a href="#"><span className="ms_icon1 ms_fav_icon"></span></a></li>
                                <li className="text-center ms_more_icon"><a href="javascript:;"><span className="ms_icon1 ms_active_icon"></span></a>
                                    <ul className="more_option">
                                        <li><a href="#"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favorites</a></li>
                                        <li><a href="#"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</a></li>
                                        <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</a></li>
                                        <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</a></li>
                                        <li><a href="#"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</a></li>
                                    </ul>
                                </li>
                                <li className="text-center"><a href="#"><span className="ms_close">
                                    <img src="images/svg/close.svg" alt="" /></span></a></li>
                            </ul>
                            <ul>
                                <li><a href="#"><span className="play_no">05</span><span className="play_hover"></span></a></li>
                                <li><a href="#">Cloud nine</a></li>
                                <li><a href="#">Dream Your Moments</a></li>
                                <li className="text-center"><a href="#">$5</a></li>
                                <li className="text-center"><a href="#">5:26</a></li>
                                <li className="text-center"><a href="#"><span className="ms_icon1 ms_fav_icon"></span></a></li>
                                <li className="text-center ms_more_icon"><a href="javascript:;"><span className="ms_icon1 ms_active_icon"></span></a>
                                    <ul className="more_option">
                                        <li><a href="#"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favorites</a></li>
                                        <li><a href="#"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</a></li>
                                        <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</a></li>
                                        <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</a></li>
                                        <li><a href="#"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</a></li>
                                    </ul>
                                </li>
                                <li className="text-center"><a href="#"><span className="ms_close">
                                    <img src="images/svg/close.svg" alt="" /></span></a></li>
                            </ul>
                            <ul>
                                <li><a href="#"><span className="play_no">06</span><span className="play_hover"></span></a></li>
                                <li><a href="#">Walking Promises</a></li>
                                <li><a href="#">Dream Your Moments</a></li>
                                <li className="text-center"><a href="#">free</a></li>
                                <li className="text-center"><a href="#">5:26</a></li>
                                <li className="text-center"><a href="#"><span className="ms_icon1 ms_fav_icon"></span></a></li>
                                <li className="text-center ms_more_icon"><a href="javascript:;"><span className="ms_icon1 ms_active_icon"></span></a>
                                    <ul className="more_option">
                                        <li><a href="#"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favorites</a></li>
                                        <li><a href="#"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</a></li>
                                        <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</a></li>
                                        <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</a></li>
                                        <li><a href="#"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</a></li>
                                    </ul>
                                </li>
                                <li className="text-center"><a href="#"><span className="ms_close">
                                    <img src="images/svg/close.svg" alt="" /></span></a></li>
                            </ul>
                            <ul>
                                <li><a href="#"><span className="play_no">07</span><span className="play_hover"></span></a></li>
                                <li><a href="#">Endless Things</a></li>
                                <li><a href="#">Dream Your Moments</a></li>
                                <li className="text-center"><a href="#">$5</a></li>
                                <li className="text-center"><a href="#">5:26</a></li>
                                <li className="text-center"><a href="#"><span className="ms_icon1 ms_fav_icon"></span></a></li>
                                <li className="text-center ms_more_icon"><a href="javascript:;"><span className="ms_icon1 ms_active_icon"></span></a>
                                    <ul className="more_option">
                                        <li><a href="#"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favorites</a></li>
                                        <li><a href="#"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</a></li>
                                        <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</a></li>
                                        <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</a></li>
                                        <li><a href="#"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</a></li>
                                    </ul>
                                </li>
                                <li className="text-center"><a href="#"><span className="ms_close">
                                    <img src="images/svg/close.svg" alt="" /></span></a></li>
                            </ul>
                            <ul>
                                <li><a href="#"><span className="play_no">08</span><span className="play_hover"></span></a></li>
                                <li><a href="#">Gimme Some Courage</a></li>
                                <li><a href="#">Dream Your Moments</a></li>
                                <li className="text-center"><a href="#">$5</a></li>
                                <li className="text-center"><a href="#">5:26</a></li>
                                <li className="text-center"><a href="#"><span className="ms_icon1 ms_fav_icon"></span></a></li>
                                <li className="text-center ms_more_icon"><a href="javascript:;"><span className="ms_icon1 ms_active_icon"></span></a>
                                    <ul className="more_option">
                                        <li><a href="#"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favorites</a></li>
                                        <li><a href="#"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</a></li>
                                        <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</a></li>
                                        <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</a></li>
                                        <li><a href="#"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</a></li>
                                    </ul>
                                </li>
                                <li className="text-center"><a href="#"><span className="ms_close">
                                    <img src="images/svg/close.svg" alt="" /></span></a></li>
                            </ul>
                            <ul>
                                <li><a href="#"><span className="play_no">09</span><span className="play_hover"></span></a></li>
                                <li><a href="#">One More Stranger</a></li>
                                <li><a href="#">Dream Your Moments</a></li>
                                <li className="text-center"><a href="#">$5</a></li>
                                <li className="text-center"><a href="#">5:26</a></li>
                                <li className="text-center"><a href="#"><span className="ms_icon1 ms_fav_icon"></span></a></li>
                                <li className="text-center ms_more_icon"><a href="javascript:;"><span className="ms_icon1 ms_active_icon"></span></a>
                                    <ul className="more_option">
                                        <li><a href="#"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favorites</a></li>
                                        <li><a href="#"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</a></li>
                                        <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</a></li>
                                        <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</a></li>
                                        <li><a href="#"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</a></li>
                                    </ul>
                                </li>
                                <li className="text-center"><a href="#"><span className="ms_close">
                                    <img src="images/svg/close.svg" alt="" /></span></a></li>
                            </ul>
                            <ul>
                                <li><a href="#"><span className="play_no">10</span><span className="play_hover"></span></a></li>
                                <li><a href="#">Cloud nine</a></li>
                                <li><a href="#">Dream Your Moments</a></li>
                                <li className="text-center"><a href="#">$5</a></li>
                                <li className="text-center"><a href="#">5:26</a></li>
                                <li className="text-center"><a href="#"><span className="ms_icon1 ms_fav_icon"></span></a></li>
                                <li className="text-center ms_more_icon"><a href="javascript:;"><span className="ms_icon1 ms_active_icon"></span></a>
                                    <ul className="more_option">
                                        <li><a href="#"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favorites</a></li>
                                        <li><a href="#"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</a></li>
                                        <li><a href="#"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</a></li>
                                        <li><a href="#"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</a></li>
                                        <li><a href="#"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</a></li>
                                    </ul>
                                </li>
                                <li className="text-center"><a href="#"><span className="ms_close">
                                    <img src="images/svg/close.svg" alt="" /></span></a></li>
                            </ul>
                            <div className="ms_view_more">
                                <a href="#" className="ms_btn">view more</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!----Live Radio Section Start----> */}
                <div className="ms_radio_wrapper padder_top30">
                    <div className="ms_heading">
                        <h1>Recently Played</h1>
                        <span className="veiw_all"><a href="#">view more</a></span>
                    </div>
                    <div className="ms_radio_slider swiper-container">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="ms_rcnt_box">
                                    <div className="ms_rcnt_box_img">
                                        <img src="images/music/r_music1.jpg" alt="" />
                                        <div className="ms_main_overlay">
                                            <div className="ms_box_overlay"></div>
                                            <div className="ms_more_icon">
                                                <img src="images/svg/more.svg" alt="" />
                                            </div>
                                            <ul className="more_option">
                                                <li><a href="#"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favorites</a></li>
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
                                        <h3><a href="#">Top Trendings</a></h3>
                                        <p>Ava Cornish &amp; Brian Hill</p>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="ms_rcnt_box">
                                    <div className="ms_rcnt_box_img">
                                        <img src="images/featured/song4.jpg" alt="" />
                                        <div className="ms_main_overlay">
                                            <div className="ms_box_overlay"></div>
                                            <div className="ms_more_icon">
                                                <img src="images/svg/more.svg" alt="" />
                                            </div>
                                            <ul className="more_option">
                                                <li><a href="#"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favorites</a></li>
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
                                        <h3><a href="#">New Romantic Charts</a></h3>
                                        <p>Ava Cornish &amp; Brian Hill</p>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="ms_rcnt_box">
                                    <div className="ms_rcnt_box_img">
                                        <img src="images/artist/artist2.jpg" alt="" />
                                        <div className="ms_main_overlay">
                                            <div className="ms_box_overlay"></div>
                                            <div className="ms_more_icon">
                                                <img src="images/svg/more.svg" alt="" />
                                            </div>
                                            <ul className="more_option">
                                                <li><a href="#"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favorites</a></li>
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
                                        <h3><a href="#">Dance Beats - Hip Hops</a></h3>
                                        <p>Ava Cornish &amp; Brian Hill</p>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="ms_rcnt_box">
                                    <div className="ms_rcnt_box_img">
                                        <img src="images/music/r_music4.jpg" alt="" />
                                        <div className="ms_main_overlay">
                                            <div className="ms_box_overlay"></div>
                                            <div className="ms_more_icon">
                                                <img src="images/svg/more.svg" alt="" />
                                            </div>
                                            <ul className="more_option">
                                                <li><a href="#"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favorites</a></li>
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
                                        <h3><a href="#">Workout Time</a></h3>
                                        <p>Ava Cornish &amp; Brian Hill</p>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="ms_rcnt_box">
                                    <div className="ms_rcnt_box_img">
                                        <img src="images/music/r_music5.jpg" alt="" />
                                        <div className="ms_main_overlay">
                                            <div className="ms_box_overlay"></div>
                                            <div className="ms_more_icon">
                                                <img src="images/svg/more.svg" alt="" />
                                            </div>
                                            <ul className="more_option">
                                                <li><a href="#"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favorites</a></li>
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
                                        <h3><a href="#">Best Classics Of All Time</a></h3>
                                        <p>Ava Cornish &amp; Brian Hill</p>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="ms_rcnt_box">
                                    <div className="ms_rcnt_box_img">
                                        <img src="images/music/r_music6.jpg" alt="" />
                                        <div className="ms_main_overlay">
                                            <div className="ms_box_overlay"></div>
                                            <div className="ms_more_icon">
                                                <img src="images/svg/more.svg" alt="" />
                                            </div>
                                            <ul className="more_option">
                                                <li><a href="#"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favorites</a></li>
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
                                        <h3><a href="#">Heart Broken - Soul Music</a></h3>
                                        <p>Ava Cornish &amp; Brian Hill</p>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="ms_rcnt_box">
                                    <div className="ms_rcnt_box_img">
                                        <img src="images/radio/img1.jpg" alt="" />
                                        <div className="ms_main_overlay">
                                            <div className="ms_box_overlay"></div>
                                            <div className="ms_more_icon">
                                                <img src="images/svg/more.svg" alt="" />
                                            </div>
                                            <ul className="more_option">
                                                <li><a href="#"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favorites</a></li>
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
                                        <h3><a href="#">Dream Your Moments (Duet)</a></h3>
                                        <p>Ava Cornish &amp; Brian Hill</p>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="ms_rcnt_box">
                                    <div className="ms_rcnt_box_img">
                                        <img src="images/radio/img2.jpg" alt="" />
                                        <div className="ms_main_overlay">
                                            <div className="ms_box_overlay"></div>
                                            <div className="ms_more_icon">
                                                <img src="images/svg/more.svg" alt="" />
                                            </div>
                                            <ul className="more_option">
                                                <li><a href="#"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favorites</a></li>
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
                                        <h3><a href="#">Until I Met You</a></h3>
                                        <p>Ava Cornish &amp; Brian Hill</p>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="ms_rcnt_box">
                                    <div className="ms_rcnt_box_img">
                                        <img src="images/radio/img3.jpg" alt="" />
                                        <div className="ms_main_overlay">
                                            <div className="ms_box_overlay"></div>
                                            <div className="ms_more_icon">
                                                <img src="images/svg/more.svg" alt="" />
                                            </div>
                                            <ul className="more_option">
                                                <li><a href="#"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favorites</a></li>
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
                                        <h3><a href="#">Gimme Some Courage</a></h3>
                                        <p>Ava Cornish &amp; Brian Hill</p>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="ms_rcnt_box">
                                    <div className="ms_rcnt_box_img">
                                        <img src="images/radio/img4.jpg" alt="" />
                                        <div className="ms_main_overlay">
                                            <div className="ms_box_overlay"></div>
                                            <div className="ms_more_icon">
                                                <img src="images/svg/more.svg" alt="" />
                                            </div>
                                            <ul className="more_option">
                                                <li><a href="#"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favorites</a></li>
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
                                        <h3><a href="#">Dark Alley Acoustic</a></h3>
                                        <p>Ava Cornish &amp; Brian Hill</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Add Arrows --> */}
                    <div className="swiper-button-next4 slider_nav_next"></div>
                    <div className="swiper-button-prev4 slider_nav_prev"></div>
                </div>
                {/* <!----Main div close----> */}
            </div>
        </div>
    )
}

export default Favorites
