import React from 'react'

const ArtistSingle = () => {
    return (
        <div>
            {/* <!----Album Single Section Start----> */}
            <div className="ms_album_single_wrapper ms_artist_single">
                <div className="album_single_data">
                    <div className="album_single_img">
                        <img src="images/featured/song1.jpg" alt="" className="img-fluid" />
                    </div>
                    <div className="album_single_text">
                        <h2>Ava Cornish</h2>
                        <p className="singer_name">Singer, New York</p>
                        <div className="about_artist">
                            Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in<br /> reprehenderit in voluptate velit esse cillum dolor... <a href="#">Read More</a>
                        </div>
                        <div className="album_btn">
                            <a href="#" className="ms_btn play_btn"><span className="play_all"><img src="images/svg/play_all.svg" alt="" />Play All</span><span className="pause_all"><img src="images/svg/pause_all.svg" alt="" />Pause</span></a>
                            <a href="#" className="ms_btn"><span className="play_all"><img src="images/svg/add_q.svg" alt="" />Add To Queue</span></a>
                        </div>
                    </div>
                    <div className="album_more_optn ms_more_icon">
                        <span><img src="images/svg/more.svg" alt="" /></span>
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
                <div className="ms_view_more padder_bottom20">
                    <a href="#" className="ms_btn">view more</a>
                </div>
            </div>
            {/* <!---Main Content Start---> */}
            <div className="ms_content_wrapper ms_artist_content">
                <div className="ms_featured_slider">
                    <div className="ms_heading">
                        <h1>Similar Artists</h1>
                        <span className="veiw_all"><a href="#">view more</a></span>
                    </div>
                    <div className="ms_relative_inner">
                        <div className="ms_feature_slider swiper-container">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="ms_rcnt_box">
                                        <div className="ms_rcnt_box_img">
                                            <img src="images/featured/song1.jpg" alt="" />
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
                                            <h3><a href="#">Best Of Ava Cornish</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="ms_rcnt_box">
                                        <div className="ms_rcnt_box_img">
                                            <img src="images/featured/song2.jpg" alt="" />
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
                                            <h3><a href="#">Until I Met You</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="ms_rcnt_box">
                                        <div className="ms_rcnt_box_img">
                                            <img src="images/featured/song3.jpg" alt="" />
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
                                            <h3><a href="#">Gimme Some Courage</a></h3>
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
                                            <h3><a href="#">Dark Alley Acoustic</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="ms_rcnt_box">
                                        <div className="ms_rcnt_box_img">
                                            <img src="images/featured/song5.jpg" alt="" />
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
                                            <h3><a href="#">Walking Promises</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="ms_rcnt_box">
                                        <div className="ms_rcnt_box_img">
                                            <img src="images/featured/song6.jpg" alt="" />
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
                                            <h3><a href="#">Desired Games</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="ms_rcnt_box">
                                        <div className="ms_rcnt_box_img">
                                            <img src="images/featured/song1.jpg" alt="" />
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
                                            <h3><a href="#">Dream Your Moments (Duet)</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="ms_rcnt_box">
                                        <div className="ms_rcnt_box_img">
                                            <img src="images/featured/song2.jpg" alt="" />
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
                                            <h3><a href="#">Until I Met You</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="ms_rcnt_box">
                                        <div className="ms_rcnt_box_img">
                                            <img src="images/featured/song3.jpg" alt="" />
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
                                            <h3><a href="#">Gimme Some Courage</a></h3>
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
                                            <h3><a href="#">Dark Alley Acoustic</a></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Add Arrows --> */}
                        <div className="swiper-button-next1 slider_nav_next"></div>
                        <div className="swiper-button-prev1 slider_nav_prev"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArtistSingle
