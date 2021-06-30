import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {

    return (
        <React.Fragment>
            {/* <!----Loader Start----> */}
            <div className="ms_loader">
                <div className="wrap">
                    <img src="images/loader.gif" alt="" />
                </div>
            </div>
            {/* <!----Main Wrapper Start----> */}
            <div className="ms_main_wrapper">
                {/* <!---Banner---> */}
                <div className="ms-banner">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="ms_banner_img">
                                    <img src="images/vinyl-record-pexels-miguel-á-padriñán-167092 copy.png" alt="" className="img-fluid" />
                                </div>
                                <div className="ms_banner_text">
                                    <h1>This Month’s</h1>
                                    <h1 className="ms_color">New Featured Cuts !</h1>
                                    <p>Latin Horns Vol. 1<br />Can The Drummer Get Some?<br />Laotian Khaen</p>
                                    <div className="ms_banner_btn">
                                        <Link to="/" className="ms_btn">Listen Now</Link>
                                        <Link to="/" className="ms_btn">Add To Queue</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!---Main Content Start---> */}
                <div className="ms_content_wrapper padder_top60">
                    {/* <!---Recently Played Music---> */}
                    {/* <!---Weekly Top 15---> */}
                    <div className="ms_weekly_wrapper">
                        {/* <div className="ms_weekly_inner">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="ms_heading">
                                        <h1>weekly top 15</h1>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 padding_right40">
                                    <div className="ms_weekly_box">
                                        <div className="weekly_left">
                                            <span className="w_top_no">
                                                01
									</span>
                                            <div className="w_top_song">
                                                <div className="w_tp_song_img">
                                                    <img src="images/weekly/song1.jpg" alt="" className="img-fluid" />
                                                    <div className="ms_song_overlay">
                                                    </div>
                                                    <div className="ms_play_icon">
                                                        <img src="images/svg/play.svg" alt="" />
                                                    </div>
                                                </div>
                                                <div className="w_tp_song_name">
                                                    <h3><Link to="/">Until I Met You</Link></h3>
                                                    <p>Ava Cornish</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="weekly_right">
                                            <span className="w_song_time">5:10</span>
                                            <span className="ms_more_icon" data-other="1">
                                                <img src="images/svg/more1.svg" alt="" />
                                            </span>
                                        </div>
                                        <ul className="more_option">
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favourites</Link></li>
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</Link></li>
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</Link></li>
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</Link></li>
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</Link></li>
                                        </ul>
                                    </div>
                                    <div className="ms_divider"></div>
                                    <div className="ms_weekly_box">
                                        <div className="weekly_left">
                                            <span className="w_top_no">
                                                02
									</span>
                                            <div className="w_top_song">
                                                <div className="w_tp_song_img">
                                                    <img src="images/weekly/song2.jpg" alt="" className="img-fluid" />
                                                    <div className="ms_song_overlay">
                                                    </div>
                                                    <div className="ms_play_icon">
                                                        <img src="images/svg/play.svg" alt="" />
                                                    </div>
                                                </div>
                                                <div className="w_tp_song_name">
                                                    <h3><Link to="/">Walking Promises</Link></h3>
                                                    <p>Ava Cornish</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="weekly_right">
                                            <span className="w_song_time">5:10</span>
                                            <span className="ms_more_icon" data-other="1">
                                                <img src="images/svg/more1.svg" alt="" />
                                            </span>
                                        </div>
                                        <ul className="more_option">
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favourites</Link></li>
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</Link></li>
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</Link></li>
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</Link></li>
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</Link></li>
                                        </ul>
                                    </div>
                                    <div className="ms_divider"></div>
                                    <div className="ms_weekly_box">
                                        <div className="weekly_left">
                                            <span className="w_top_no">
                                                03
									</span>
                                            <div className="w_top_song">
                                                <div className="w_tp_song_img">
                                                    <img src="images/weekly/song3.jpg" alt="" className="img-fluid" />
                                                    <div className="ms_song_overlay">
                                                    </div>
                                                    <div className="ms_play_icon">
                                                        <img src="images/svg/play.svg" alt="" />
                                                    </div>
                                                </div>
                                                <div className="w_tp_song_name">
                                                    <h3><Link to="/">Gimme Some Courage</Link></h3>
                                                    <p>Ava Cornish</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="weekly_right">
                                            <span className="w_song_time">5:10</span>
                                            <span className="ms_more_icon" data-other="1">
                                                <img src="images/svg/more1.svg" alt="" />
                                            </span>
                                        </div>
                                        <ul className="more_option">
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favourites</Link></li>
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</Link></li>
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</Link></li>
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</Link></li>
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</Link></li>
                                        </ul>
                                    </div>
                                    <div className="ms_divider"></div>
                                    <div className="ms_weekly_box">
                                        <div className="weekly_left">
                                            <span className="w_top_no">
                                                04
									</span>
                                            <div className="w_top_song">
                                                <div className="w_tp_song_img">
                                                    <img src="images/weekly/song4.jpg" alt="" className="img-fluid" />
                                                    <div className="ms_song_overlay">
                                                    </div>
                                                    <div className="ms_play_icon">
                                                        <img src="images/svg/play.svg" alt="" />
                                                    </div>
                                                </div>
                                                <div className="w_tp_song_name">
                                                    <h3><Link to="/">Desired Games</Link></h3>
                                                    <p>Ava Cornish</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="weekly_right">
                                            <span className="w_song_time">5:10</span>
                                            <span className="ms_more_icon" data-other="1">
                                                <img src="images/svg/more1.svg" alt="" />
                                            </span>
                                        </div>
                                        <ul className="more_option">
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favourites</Link></li>
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</Link></li>
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</Link></li>
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</Link></li>
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</Link></li>
                                        </ul>
                                    </div>
                                    <div className="ms_divider"></div>
                                    <div className="ms_weekly_box">
                                        <div className="weekly_left">
                                            <span className="w_top_no">
                                                05
									</span>
                                            <div className="w_top_song">
                                                <div className="w_tp_song_img">
                                                    <img src="images/weekly/song5.jpg" alt="" className="img-fluid" />
                                                    <div className="ms_song_overlay">
                                                    </div>
                                                    <div className="ms_play_icon">
                                                        <img src="images/svg/play.svg" alt="" />
                                                    </div>
                                                </div>
                                                <div className="w_tp_song_name">
                                                    <h3><Link to="/">Dark Alley Acoustic</Link></h3>
                                                    <p>Ava Cornish</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="weekly_right">
                                            <span className="w_song_time">5:10</span>
                                            <span className="ms_more_icon" data-other="1">
                                                <img src="images/svg/more1.svg" alt="" />
                                            </span>
                                        </div>
                                        <ul className="more_option">
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favourites</Link></li>
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</Link></li>
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</Link></li>
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</Link></li>
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 padding_right40">
                                    <div className="ms_weekly_box">
                                        <div className="weekly_left">
                                            <span className="w_top_no">
                                                06
									</span>
                                            <div className="w_top_song">
                                                <div className="w_tp_song_img">
                                                    <img src="images/weekly/song6.jpg" alt="" className="img-fluid" />
                                                    <div className="ms_song_overlay">
                                                    </div>
                                                    <div className="ms_play_icon">
                                                        <img src="images/svg/play.svg" alt="" />
                                                    </div>
                                                </div>
                                                <div className="w_tp_song_name">
                                                    <h3><Link to="/">Walking Promises</Link></h3>
                                                    <p>Ava Cornish</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="weekly_right">
                                            <span className="w_song_time">5:10</span>
                                            <span className="ms_more_icon" data-other="1">
                                                <img src="images/svg/more1.svg" alt="" />
                                            </span>
                                        </div>
                                        <ul className="more_option">
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favourites</Link></li>
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</Link></li>
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</Link></li>
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</Link></li>
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</Link></li>
                                        </ul>
                                    </div>
                                    <div className="ms_divider"></div>
                                    <div className="ms_weekly_box">
                                        <div className="weekly_left">
                                            <span className="w_top_no">
                                                07
									</span>
                                            <div className="w_top_song">
                                                <div className="w_tp_song_img">
                                                    <img src="images/weekly/song7.jpg" alt="" className="img-fluid" />
                                                    <div className="ms_song_overlay">
                                                    </div>
                                                    <div className="ms_play_icon">
                                                        <img src="images/svg/play.svg" alt="" />
                                                    </div>
                                                </div>
                                                <div className="w_tp_song_name">
                                                    <h3><Link to="/">Endless Things</Link></h3>
                                                    <p>Ava Cornish</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="weekly_right">
                                            <span className="w_song_time">5:10</span>
                                            <span className="ms_more_icon" data-other="1">
                                                <img src="images/svg/more1.svg" alt="" />
                                            </span>
                                        </div>
                                        <ul className="more_option">
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favourites</Link></li>
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</Link></li>
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</Link></li>
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</Link></li>
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</Link></li>
                                        </ul>
                                    </div>
                                    <div className="ms_divider"></div>
                                    <div className="ms_weekly_box ms_active_play">
                                        <div className="weekly_left">
                                            <span className="w_top_no">
                                                08
									</span>
                                            <div className="w_top_song">
                                                <div className="w_tp_song_img">
                                                    <img src="images/weekly/song8.jpg" alt="" className="img-fluid" />
                                                    <div className="ms_song_overlay">
                                                    </div>
                                                    <div className="ms_play_icon">
                                                        <div className="ms_bars">
                                                            <div className="bar"></div>
                                                            <div className="bar"></div>
                                                            <div className="bar"></div>
                                                            <div className="bar"></div>
                                                            <div className="bar"></div>
                                                            <div className="bar"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w_tp_song_name">
                                                    <h3><Link to="/">Dream Your Moments</Link></h3>
                                                    <p>Ava Cornish</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="weekly_right">
                                            <span className="w_song_time">5:10</span>
                                            <span className="ms_more_icon" data-other="1">
                                                <img src="images/svg/more1.svg" alt="" />
                                            </span>
                                        </div>
                                        <ul className="more_option">
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favourites</Link></li>
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</Link></li>
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</Link></li>
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</Link></li>
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</Link></li>
                                        </ul>
                                    </div>
                                    <div className="ms_divider"></div>
                                    <div className="ms_weekly_box">
                                        <div className="weekly_left">
                                            <span className="w_top_no">
                                                09
									</span>
                                            <div className="w_top_song">
                                                <div className="w_tp_song_img">
                                                    <img src="images/weekly/song9.jpg" alt="" className="img-fluid" />
                                                    <div className="ms_song_overlay">
                                                    </div>
                                                    <div className="ms_play_icon">
                                                        <img src="images/svg/play.svg" alt="" />
                                                    </div>
                                                </div>
                                                <div className="w_tp_song_name">
                                                    <h3><Link to="/">Until I Met You</Link></h3>
                                                    <p>Ava Cornish</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="weekly_right">
                                            <span className="w_song_time">5:10</span>
                                            <span className="ms_more_icon" data-other="1">
                                                <img src="images/svg/more1.svg" alt="" />
                                            </span>
                                        </div>
                                        <ul className="more_option">
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favourites</Link></li>
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</Link></li>
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</Link></li>
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</Link></li>
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</Link></li>
                                        </ul>
                                    </div>
                                    <div className="ms_divider"></div>
                                    <div className="ms_weekly_box">
                                        <div className="weekly_left">
                                            <span className="w_top_no">
                                                10
									</span>
                                            <div className="w_top_song">
                                                <div className="w_tp_song_img">
                                                    <img src="images/weekly/song5.jpg" alt="" className="img-fluid" />
                                                    <div className="ms_song_overlay">
                                                    </div>
                                                    <div className="ms_play_icon">
                                                        <img src="images/svg/play.svg" alt="" />
                                                    </div>
                                                </div>
                                                <div className="w_tp_song_name">
                                                    <h3><Link to="/">Gimme Some Courage</Link></h3>
                                                    <p>Ava Cornish</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="weekly_right">
                                            <span className="w_song_time">5:10</span>
                                            <span className="ms_more_icon" data-other="1">
                                                <img src="images/svg/more1.svg" alt="" />
                                            </span>
                                        </div>
                                        <ul className="more_option">
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favourites</Link></li>
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</Link></li>
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</Link></li>
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</Link></li>
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12">
                                    <div className="ms_weekly_box">
                                        <div className="weekly_left">
                                            <span className="w_top_no">
                                                11
									</span>
                                            <div className="w_top_song">
                                                <div className="w_tp_song_img">
                                                    <img src="images/weekly/song2.jpg" alt="" className="img-fluid" />
                                                    <div className="ms_song_overlay">
                                                    </div>
                                                    <div className="ms_play_icon">
                                                        <img src="images/svg/play.svg" alt="" />
                                                    </div>
                                                </div>
                                                <div className="w_tp_song_name">
                                                    <h3><Link to="/">Dark Alley Acoustic</Link></h3>
                                                    <p>Ava Cornish</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="weekly_right">
                                            <span className="w_song_time">5:10</span>
                                            <span className="ms_more_icon" data-other="1">
                                                <img src="images/svg/more1.svg" alt="" />
                                            </span>
                                        </div>
                                        <ul className="more_option">
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favourites</Link></li>
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</Link></li>
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</Link></li>
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</Link></li>
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</Link></li>
                                        </ul>
                                    </div>
                                    <div className="ms_divider"></div>
                                    <div className="ms_weekly_box">
                                        <div className="weekly_left">
                                            <span className="w_top_no">
                                                12
									</span>
                                            <div className="w_top_song">
                                                <div className="w_tp_song_img">
                                                    <img src="images/weekly/song11.jpg" alt="" className="img-fluid" />
                                                    <div className="ms_song_overlay">
                                                    </div>
                                                    <div className="ms_play_icon">
                                                        <img src="images/svg/play.svg" alt="" />
                                                    </div>
                                                </div>
                                                <div className="w_tp_song_name">
                                                    <h3><Link to="/">The Heartbeat Stops</Link></h3>
                                                    <p>Ava Cornish</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="weekly_right">
                                            <span className="w_song_time">5:10</span>
                                            <span className="ms_more_icon" data-other="1">
                                                <img src="images/svg/more1.svg" alt="" />
                                            </span>
                                        </div>
                                        <ul className="more_option">
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favourites</Link></li>
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</Link></li>
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</Link></li>
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</Link></li>
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</Link></li>
                                        </ul>
                                    </div>
                                    <div className="ms_divider"></div>
                                    <div className="ms_weekly_box">
                                        <div className="weekly_left">
                                            <span className="w_top_no">
                                                13
									</span>
                                            <div className="w_top_song">
                                                <div className="w_tp_song_img">
                                                    <img src="images/weekly/song12.jpg" alt="" className="img-fluid" />
                                                    <div className="ms_song_overlay">
                                                    </div>
                                                    <div className="ms_play_icon">
                                                        <img src="images/svg/play.svg" alt="" />
                                                    </div>
                                                </div>
                                                <div className="w_tp_song_name">
                                                    <h3><Link to="/">One More Stranger</Link></h3>
                                                    <p>Ava Cornish</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="weekly_right">
                                            <span className="w_song_time">5:10</span>
                                            <span className="ms_more_icon" data-other="1">
                                                <img src="images/svg/more1.svg" alt="" />
                                            </span>
                                        </div>
                                        <ul className="more_option">
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favourites</Link></li>
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</Link></li>
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</Link></li>
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</Link></li>
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</Link></li>
                                        </ul>
                                    </div>
                                    <div className="ms_divider"></div>
                                    <div className="ms_weekly_box">
                                        <div className="weekly_left">
                                            <span className="w_top_no">
                                                14
									</span>
                                            <div className="w_top_song">
                                                <div className="w_tp_song_img">
                                                    <img src="images/weekly/song13.jpg" alt="" className="img-fluid" />
                                                    <div className="ms_song_overlay">
                                                    </div>
                                                    <div className="ms_play_icon">
                                                        <img src="images/svg/play.svg" alt="" />
                                                    </div>
                                                </div>
                                                <div className="w_tp_song_name">
                                                    <h3><Link to="/">Walking Promises</Link></h3>
                                                    <p>Ava Cornish</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="weekly_right">
                                            <span className="w_song_time">5:10</span>
                                            <span className="ms_more_icon" data-other="1">
                                                <img src="images/svg/more1.svg" alt="" />
                                            </span>
                                        </div>
                                        <ul className="more_option">
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favourites</Link></li>
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</Link></li>
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</Link></li>
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</Link></li>
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</Link></li>
                                        </ul>
                                    </div>
                                    <div className="ms_divider"></div>
                                    <div className="ms_weekly_box">
                                        <div className="weekly_left">
                                            <span className="w_top_no">
                                                15
									</span>
                                            <div className="w_top_song">
                                                <div className="w_tp_song_img">
                                                    <img src="images/weekly/song14.jpg" alt="" className="img-fluid" />
                                                    <div className="ms_song_overlay">
                                                    </div>
                                                    <div className="ms_play_icon">
                                                        <img src="images/svg/play.svg" alt="" />
                                                    </div>
                                                </div>
                                                <div className="w_tp_song_name">
                                                    <h3><Link to="/">Endless Things</Link></h3>
                                                    <p>Ava Cornish</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="weekly_right">
                                            <span className="w_song_time">5:10</span>
                                            <span className="ms_more_icon" data-other="1">
                                                <img src="images/svg/more1.svg" alt="" />
                                            </span>
                                        </div>
                                        <ul className="more_option">
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favourites</Link></li>
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</Link></li>
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</Link></li>
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</Link></li>
                                            <li><Link to="/"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    {/* <!---Featured Artists Music---> */}
                    <div className="ms_featured_slider">
                        {/* <div className="ms_heading">
                            <h1>Featured Artists</h1>
                            <span className="veiw_all"><Link to="/">view more</Link></span>
                        </div>
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
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favourites</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</Link></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><Link to="/">Best Of Ava Cornish</Link></h3>
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
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favourites</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</Link></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><Link to="/">Until I Met You</Link></h3>
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
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favourites</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</Link></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><Link to="/">Gimme Some Courage</Link></h3>
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
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favourites</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</Link></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><Link to="/">Dark Alley Acoustic</Link></h3>
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
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favourites</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</Link></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><Link to="/">Walking Promises</Link></h3>
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
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favourites</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</Link></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><Link to="/">Desired Games</Link></h3>
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
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favourites</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</Link></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><Link to="/">Dream Your Moments (Duet)</Link></h3>
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
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favourites</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</Link></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><Link to="/">Until I Met You</Link></h3>
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
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favourites</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</Link></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><Link to="/">Gimme Some Courage</Link></h3>
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
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favourites</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</Link></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><Link to="/">Dark Alley Acoustic</Link></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Add Arrows --> */}
                        {/* <div className="swiper-button-next1 slider_nav_next"></div>
                        <div className="swiper-button-prev1 slider_nav_prev"></div> */}
                    </div>
                    {/* <!----Ad Section Start----> */}
                    <div className="ms_advr_wrapper">
                        {/* <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <Link to="/"><img src="images/adv.jpg" alt="" className="img-fluid" /></Link>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    {/* <!----New Releases Section Start----> */}
                    <div className="ms_releases_wrapper">
                        <div className="ms_heading">
                            <h1>New Releases</h1>
                            <span className="veiw_all"><Link to="/">view more</Link></span>
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
                                                <h3><Link to="/">Dark Alley Acoustic</Link></h3>
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
                                                <h3><Link to="/">Dark Alley Acoustic</Link></h3>
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
                                                <h3><Link to="/">Dark Alley Acoustic</Link></h3>
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
                                                <h3><Link to="/">Dark Alley Acoustic</Link></h3>
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
                                                <h3><Link to="/">Dark Alley Acoustic</Link></h3>
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
                    {/* <!----Featured Album Section Start----> */}
                    <div className="ms_fea_album_slider">
                        <div className="ms_heading">
                            <h1>Featured Sample Packs</h1>
                            <span className="veiw_all"><Link to="/">view more</Link></span>
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
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favourites</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</Link></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><Link to="/">Bloodlust</Link></h3>
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
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favourites</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</Link></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><Link to="/">Time flies</Link></h3>
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
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favourites</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</Link></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><Link to="/">Dark matters</Link></h3>
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
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favourites</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</Link></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><Link to="/">Eye to eye</Link></h3>
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
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favourites</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</Link></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><Link to="/">Cloud nine</Link></h3>
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
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favourites</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</Link></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><Link to="/">Cobweb of lies</Link></h3>
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
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favourites</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</Link></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><Link to="/">Bloodlust</Link></h3>
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
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favourites</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</Link></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><Link to="/">Time flies</Link></h3>
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
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favourites</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</Link></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><Link to="/">Dark matters</Link></h3>
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
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favourites</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</Link></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><Link to="/">Eye to eye</Link></h3>
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
                    {/* <!----Top Genres Section Start----> */}
                    <div className="ms_genres_wrapper">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="ms_heading">
                                    <h1>Genres</h1>
                                    <span className="veiw_all"><Link to="/">view more</Link></span>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="ms_genres_box">
                                    <img src="images/genrs/img1.jpg" alt="" className="img-fluid" />
                                    <div className="ms_main_overlay">
                                        <div className="ms_box_overlay"></div>
                                        <div className="ms_play_icon">
                                            <img src="images/svg/play.svg" alt="" />
                                        </div>
                                        <div className="ovrly_text_div">
                                            <span className="ovrly_text1"><Link to="/">romantic</Link></span>
                                            <span className="ovrly_text2"><Link to="/">view song</Link></span>
                                        </div>
                                    </div>
                                    <div className="ms_box_overlay_on">
                                        <div className="ovrly_text_div">
                                            <span className="ovrly_text1"><Link to="/">romantic</Link></span>
                                            <span className="ovrly_text2"><Link to="/">view song</Link></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="ms_genres_box">
                                            <img src="images/genrs/img2.jpg" alt="" className="img-fluid" />
                                            <div className="ms_main_overlay">
                                                <div className="ms_box_overlay"></div>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt="" />
                                                </div>
                                                <div className="ovrly_text_div">
                                                    <span className="ovrly_text1"><Link to="/">Classical</Link></span>
                                                </div>
                                            </div>
                                            <div className="ms_box_overlay_on">
                                                <div className="ovrly_text_div">
                                                    <span className="ovrly_text1"><Link to="/">Classical</Link></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="ms_genres_box">
                                            <img src="images/genrs/img3.jpg" alt="" className="img-fluid" />
                                            <div className="ms_main_overlay">
                                                <div className="ms_box_overlay"></div>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt="" />
                                                </div>
                                                <div className="ovrly_text_div">
                                                    <span className="ovrly_text1"><Link to="/">hip hop</Link></span>
                                                </div>
                                            </div>
                                            <div className="ms_box_overlay_on">
                                                <div className="ovrly_text_div">
                                                    <span className="ovrly_text1"><Link to="/">hip hop</Link></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="ms_genres_box">
                                            <img src="images/genrs/img5.jpg" alt="" className="img-fluid" />
                                            <div className="ms_main_overlay">
                                                <div className="ms_box_overlay"></div>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt="" />
                                                </div>
                                                <div className="ovrly_text_div">
                                                    <span className="ovrly_text1"><Link to="/">dancing</Link></span>
                                                </div>
                                            </div>
                                            <div className="ms_box_overlay_on">
                                                <div className="ovrly_text_div">
                                                    <span className="ovrly_text1"><Link to="/">dancing</Link></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="ms_genres_box">
                                            <img src="images/genrs/img6.jpg" alt="" className="img-fluid" />
                                            <div className="ms_main_overlay">
                                                <div className="ms_box_overlay"></div>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt="" />
                                                </div>
                                                <div className="ovrly_text_div">
                                                    <span className="ovrly_text1"><Link to="/">EDM</Link></span>
                                                </div>
                                            </div>
                                            <div className="ms_box_overlay_on">
                                                <div className="ovrly_text_div">
                                                    <span className="ovrly_text1"><Link to="/">EDM</Link></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className="ms_genres_box">
                                    <img src="images/genrs/img4.jpg" alt="" className="img-fluid" />
                                    <div className="ms_main_overlay">
                                        <div className="ms_box_overlay"></div>
                                        <div className="ms_play_icon">
                                            <img src="images/svg/play.svg" alt="" />
                                        </div>
                                        <div className="ovrly_text_div">
                                            <span className="ovrly_text1"><Link to="/">rock</Link></span>
                                        </div>
                                    </div>
                                    <div className="ms_box_overlay_on">
                                        <div className="ovrly_text_div">
                                            <span className="ovrly_text1"><Link to="/">rock</Link></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!----Ad Section Start----> */}
                    <div className="ms_advr_wrapper ms_advr2">
                        {/* <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <Link to="/"><img src="images/adv1.jpg" alt="" className="img-fluid" /></Link>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    {/* <!----Live Radio Section Start----> */}
                    <div className="ms_radio_wrapper">
                        {/* <div className="ms_heading">
                            <h1>Live Radio</h1>
                            <span className="veiw_all"><Link to="/">view more</Link></span>
                        </div>
                        <div className="ms_radio_slider swiper-container">
                            <div className="swiper-wrapper">
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
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favourites</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</Link></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><Link to="/">Top Trendings</Link></h3>
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
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favourites</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</Link></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><Link to="/">New Romantic Charts</Link></h3>
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
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favourites</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</Link></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><Link to="/">Dance Beats - Hip Hops</Link></h3>
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
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favourites</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</Link></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><Link to="/">Workout Time</Link></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="ms_rcnt_box">
                                        <div className="ms_rcnt_box_img">
                                            <img src="images/radio/img5.jpg" alt="" />
                                            <div className="ms_main_overlay">
                                                <div className="ms_box_overlay"></div>
                                                <div className="ms_more_icon">
                                                    <img src="images/svg/more.svg" alt="" />
                                                </div>
                                                <ul className="more_option">
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favourites</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</Link></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><Link to="/">Best Classics Of All Time</Link></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="ms_rcnt_box">
                                        <div className="ms_rcnt_box_img">
                                            <img src="images/radio/img6.jpg" alt="" />
                                            <div className="ms_main_overlay">
                                                <div className="ms_box_overlay"></div>
                                                <div className="ms_more_icon">
                                                    <img src="images/svg/more.svg" alt="" />
                                                </div>
                                                <ul className="more_option">
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favourites</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</Link></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><Link to="/">Heart Broken - Soul Music</Link></h3>
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
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favourites</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</Link></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><Link to="/">Dream Your Moments (Duet)</Link></h3>
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
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favourites</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</Link></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><Link to="/">Until I Met You</Link></h3>
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
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favourites</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</Link></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><Link to="/">Gimme Some Courage</Link></h3>
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
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_fav"></span></span>Add To Favourites</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_queue"></span></span>Add To Queue</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_dwn"></span></span>Download Now</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_playlst"></span></span>Add To Playlist</Link></li>
                                                    <li><Link to="/"><span className="opt_icon"><span className="icon icon_share"></span></span>Share</Link></li>
                                                </ul>
                                                <div className="ms_play_icon">
                                                    <img src="images/svg/play.svg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms_rcnt_box_text">
                                            <h3><Link to="/">Dark Alley Acoustic</Link></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {/* <!-- Add Arrows --> */}
                        <div className="swiper-button-next4 slider_nav_next"></div>
                        <div className="swiper-button-prev4 slider_nav_prev"></div>
                    </div>
                    {/* <!----Main div close----> */}
                </div>
            </div> 
            {/* <!----Register Modal Start----> */}
            {/* <!-- Modal --> */}
            <div className="ms_register_popup">
                <div id="myModal" className="modal  centered-modal" role="dialog">
                    <div className="modal-dialog register_dialog">
                        {/* <!-- Modal content--> */}
                        <div className="modal-content">
                            <button type="button" className="close" data-dismiss="modal">
                                <i className="fa_icon form_close"></i>
                            </button>
                            <div className="modal-body">
                                <div className="ms_register_img">
                                    <img src="images/register_img.png" alt="" className="img-fluid" />
                                </div>
                                <div className="ms_register_form">
                                    <h2>Register / Sign Up</h2>
                                    <div className="form-group">
                                        <input type="text" placeholder="Enter Your Name" className="form-control" />
                                        <span className="form_icon">
                                            <i className="fa_icon form-user" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" placeholder="Enter Your Email" className="form-control" />
                                        <span className="form_icon">
                                            <i className="fa_icon form-envelope" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" placeholder="Enter Password" className="form-control" />
                                        <span className="form_icon">
                                            <i className="fa_icon form-lock" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" placeholder="Confirm Password" className="form-control" />
                                        <span className="form_icon">
                                            <i className=" fa_icon form-lock" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <Link to="/" className="ms_btn">register now</Link>
                                    <p>Already Have An Account? <Link href="#myModal1" data-toggle="modal" className="ms_modal hideCurrentModel">login here</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!----Login Popup Start----> */}
                <div id="myModal1" className="modal  centered-modal" role="dialog">
                    <div className="modal-dialog login_dialog">
                        {/* <!-- Modal content--> */}
                        <div className="modal-content">
                            <button type="button" className="close" data-dismiss="modal">
                                <i className="fa_icon form_close"></i>
                            </button>
                            <div className="modal-body">
                                <div className="ms_register_img">
                                    <img src="images/register_img.png" alt="" className="img-fluid" />
                                </div>
                                <div className="ms_register_form">
                                    <h2>login / Sign in</h2>
                                    <div className="form-group">
                                        <input type="text" placeholder="Enter Your Email" className="form-control" />
                                        <span className="form_icon">
                                            <i className="fa_icon form-envelope" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" placeholder="Enter Password" className="form-control" />
                                        <span className="form_icon">
                                            <i className="fa_icon form-lock" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <div className="remember_checkbox">
                                        <label>Keep me signed in
							<input type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <Link to='/' href="profile.html" className="ms_btn" target="_blank">login now</Link>
                                    <div className="popup_forgot">
                                        <Link to="/">Forgot Password ?</Link>
                                    </div>
                                    <p>Don't Have An Account? <Link href="#myModal" data-toggle="modal" className="ms_modal1 hideCurrentModel">register here</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!----Language Selection Modal----> */}
            <div className="ms_lang_popup">
                <div id="lang_modal" className="modal  centered-modal" role="dialog">
                    <div className="modal-dialog">
                        {/* <!-- Modal content--> */}
                        <div className="modal-content">
                            <button type="button" className="close" data-dismiss="modal">
                                <i className="fa_icon form_close"></i>
                            </button>
                            <div className="modal-body">
                                <h1>language selection</h1>
                                <p>Please select the language(s) of the music you listen to.</p>
                                <ul className="lang_list">
                                    <li>
                                        <label className="lang_check_label">
                                            English
							<input type="checkbox" name="check" />
                                            <span className="label-text"></span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="lang_check_label">
                                            hindi
							<input type="checkbox" name="check" />
                                            <span className="label-text"></span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="lang_check_label">
                                            punjabi
							<input type="checkbox" name="check" />
                                            <span className="label-text"></span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="lang_check_label">
                                            French
							<input type="checkbox" name="check" />
                                            <span className="label-text"></span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="lang_check_label">
                                            German
							<input type="checkbox" name="check" />
                                            <span className="label-text"></span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="lang_check_label">
                                            Spanish
							<input type="checkbox" name="check" />
                                            <span className="label-text"></span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="lang_check_label">
                                            Chinese
							<input type="checkbox" name="check" />
                                            <span className="label-text"></span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="lang_check_label">
                                            Japanese
							<input type="checkbox" name="check" />
                                            <span className="label-text"></span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="lang_check_label">
                                            Arabic
							<input type="checkbox" name="check" />
                                            <span className="label-text"></span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="lang_check_label">
                                            Italian
							<input type="checkbox" name="check" />
                                            <span className="label-text"></span>
                                        </label>
                                    </li>
                                </ul>
                                <div className="ms_lang_btn">
                                    <Link to="/" className="ms_btn">apply</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!----Queue Clear Model ----> */}
            <div className="ms_clear_modal">
                <div id="clear_modal" className="modal  centered-modal" role="dialog">
                    <div className="modal-dialog">
                        {/* <!-- Modal content--> */}
                        <div className="modal-content">
                            <button type="button" className="close" data-dismiss="modal">
                                <i className="fa_icon form_close"></i>
                            </button>
                            <div className="modal-body">
                                <h1>Are you sure you want to clear your queue?</h1>
                                <div className="clr_modal_btn">
                                    <Link to="/">clear all</Link>
                                    <Link to="/">cancel</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!----Queue Save Modal----> */}
            <div className="ms_save_modal">
                <div id="save_modal" className="modal  centered-modal" role="dialog">
                    <div className="modal-dialog">
                        {/* <!-- Modal content--> */}
                        <div className="modal-content">
                            <button type="button" className="close" data-dismiss="modal">
                                <i className="fa_icon form_close"></i>
                            </button>
                            <div className="modal-body">
                                <h1>Log in to start sharing your music!</h1>
                                <div className="save_modal_btn">
                                    <Link to="/"><i className="fa fa-google-plus-square" aria-hidden="true"></i> continue with google </Link>
                                    <Link to="/"><i className="fa fa-facebook-square" aria-hidden="true"></i> continue with facebook</Link>
                                </div>
                                <div className="ms_save_email">
                                    <h3>or use your email</h3>
                                    <div className="save_input_group">
                                        <input type="text" placeholder="Enter Your Name" className="form-control" />
                                    </div>
                                    <div className="save_input_group">
                                        <input type="password" placeholder="Enter Password" className="form-control" />
                                    </div>
                                    <button className="save_btn">Log in</button>
                                </div>
                                <div className="ms_dnt_have">
                                    <span>Dont't have an account ?</span>
                                    <Link to=" " href="javascript:;" className="hideCurrentModel" data-toggle="modal" data-target="#myModal">Register Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
