import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div>
            {/* <!---Side Menu Start---> */}
            <div className="ms_sidemenu_wrapper">
                <div className="ms_nav_close">
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                </div>
                <div className="ms_sidemenu_inner">
                    <div className="ms_logo_inner">
                        <div className="ms_logo">
                            <Link to="/" href="index.html"><img src="" alt="" className="img-fluid" /></Link>
                        </div>
                        <div className="ms_logo_open">
                            <Link to="/" href="index.html"><img src="images/open_logo.png" alt="" className="img-fluid" /></Link>
                        </div>
                    </div>
                    <div className="ms_nav_wrapper">
                        <ul>
                            <li><Link to="/" href="index.html" className="active" title="Discover">
                                <span className="nav_icon">
                                    <span className="icon icon_discover"></span>
                                </span>
                                <span className="nav_text">
                                    discover
						</span>
                            </Link>
                            </li>
                            <li><Link to="/samplepacks" href="album.html" title="Albums">
                                <span className="nav_icon">
                                    <span className="icon icon_albums"></span>
                                </span>
                                <span className="nav_text">
                                    sample packs
						</span>
                            </Link>
                            </li>
                            <li><Link to="/artists" href="artist.html" title="Artists">
                                <span className="nav_icon">
                                    <span className="icon icon_artists"></span>
                                </span>
                                <span className="nav_text">
                                    artists
						</span>
                            </Link>
                            </li>
                            <li><Link to="/genres" href="genres.html" title="Genres">
                                <span className="nav_icon">
                                    <span className="icon icon_genres"></span>
                                </span>
                                <span className="nav_text">
                                    genres
						{/* </span>
                            </Link>
                            </li>
                            <li><Link href="top_track.html" title="Top Tracks">
                                <span className="nav_icon">
                                    <span className="icon icon_tracks"></span>
                                </span>
                                <span className="nav_text">
                                    top tracks */}
						{/* </span>
                            </Link>
                            </li>
                            <li><Link to="/freemusic" href="free_music.html" title="Free Music">
                                <span className="nav_icon">
                                    <span className="icon icon_music"></span>
                                </span>
                                <span className="nav_text">
                                    free music */}
						{/* </span>
                            </Link>
                            </li>
                            <li><Link href="stations.html" title="Stations">
                                <span className="nav_icon">
                                    <span className="icon icon_station"></span>
                                </span>
                                <span className="nav_text">
                                    stations */}
						</span>
                            </Link>
                            </li>
                        </ul>
                        <ul className="nav_downloads">
                            <li><Link to="/downloads" href="download.html" title="Downloads">
                                <span className="nav_icon">
                                    <span className="icon icon_download"></span>
                                </span>
                                <span className="nav_text">
                                    downloads
						</span>
                            </Link>
                            </li>
                            <li><Link to="/purchased" href="purchase.html" title="Purchased">
                                <span className="nav_icon">
                                    <span className="icon icon_purchased"></span>
                                </span>
                                <span className="nav_text">
                                    purchased
						</span>
                            </Link>
                            </li>
                            <li><Link to="/favorites" href="favourite.html" title="Favourites">
                                <span className="nav_icon">
                                    <span className="icon icon_favourite"></span>
                                </span>
                                <span className="nav_text">
                                    favorites
						</span>
                            </Link>
                            </li>
                            <li><Link to="/hist" href="history.html" title="History">
                                <span className="nav_icon">
                                    <span className="icon icon_history"></span>
                                </span>
                                <span className="nav_text">
                                    history
						</span>
                            </Link>
                            </li>
                        </ul>
                        <ul className="nav_playlist">
                            {/* <li><Link href="feature_playlist.html" title="Featured Playlist">
                                <span className="nav_icon">
                                    <span className="icon icon_fe_playlist"></span>
                                </span>
                                <span className="nav_text">
                                    featured playlist
						</span>
                            </Link>
                            </li> */}
                            {/* <li><Link href="add_playlist.html" title="Create Playlist">
                                <span className="nav_icon">
                                    <span className="icon icon_c_playlist"></span>
                                </span>
                                <span className="nav_text">
                                    create playlist
						</span>
                            </Link>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
