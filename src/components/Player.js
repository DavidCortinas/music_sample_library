import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const Player = () => {
    const { currentUser } = useAuth()

    return (
        <div>
            {/* <!----Audio Player Section----> */}
            <div className="ms_player_wrapper">
                <div className="ms_player_close">
                    <i className="fa fa-angle-up" aria-hidden="true"></i>
                </div>
                <div className="player_mid">
                    <div className="audio-player">
                        <div id="jquery_jplayer_1" className="jp-jplayer"></div>
                        <div id="jp_container_1" className="jp-audio" role="application" aria-label="media player">
                            <div className="player_left">
                                <div className="ms_play_song">
                                    <div className="play_song_name">
                                        <Link to="/" href="javascript:void(0);" id="playlist-text">
                                            <div className="jp-now-playing flex-item">
                                                <div className="jp-track-name"></div>
                                                <div className="jp-artist-name"></div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="play_song_options">
                                    <ul>
                                        {
                                            currentUser.downloadsAvailable >= 0
                                            ?
                                            <li><Link to="/" href="/"><span className="song_optn_icon"><i className="ms_icon icon_download"></i></span>download now</Link></li>
                                            :
                                            <li><Link to="/" href="/"><span className="song_optn_icon"><i className="ms_icon icon_download"></i></span>buy now</Link></li>
                                            }
                                        <li><Link to="/" href="/"><span className="song_optn_icon"><i className="ms_icon icon_fav"></i></span>Add To Favourites</Link></li>
                                        <li><Link to="/" href="/"><span className="song_optn_icon"><i className="ms_icon icon_playlist"></i></span>Add To Playlist</Link></li>
                                        <li><Link to="/" href="/"><span className="song_optn_icon"><i className="ms_icon icon_share"></i></span>Share</Link></li>
                                    </ul>
                                </div>
                                <span className="play-left-arrow"><i className="fa fa-angle-right" aria-hidden="true"></i></span>
                            </div>
                            {/* <!----Right Queue----> */}
                            <div className="jp_queue_wrapper">
                                <span className="que_text" id="myPlaylistQueue"><i className="fa fa-angle-up" aria-hidden="true"></i> queue</span>
                                <div id="playlist-wrap" className="jp-playlist">
                                    <div className="jp_queue_cls"><i className="fa fa-times" aria-hidden="true"></i></div>
                                    <h2>queue</h2>
                                    <div className="jp_queue_list_inner">
                                        <ul>
                                            <li>&nbsp;</li>
                                        </ul>
                                    </div>
                                    <div className="jp_queue_btn">
                                        <Link to="/" href="javascript:;" className="ms_clear" data-toggle="modal" data-target="#clear_modal">clear</Link>
                                        <Link to="/" href="clear_modal" className="ms_save" data-toggle="modal" data-target="#save_modal">save</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="jp-type-playlist">
                                <div className="jp-gui jp-interface flex-wrap">
                                    <div className="jp-controls flex-item">
                                        <button className="jp-previous" tabIndex="0">
                                            <i className="ms_play_control"></i>
                                        </button>
                                        <button className="jp-play" tabIndex="0">
                                            <i className="ms_play_control"></i>
                                        </button>
                                        <button className="jp-next" tabIndex="0">
                                            <i className="ms_play_control"></i>
                                        </button>
                                    </div>
                                    <div className="jp-progress-container flex-item">
                                        <div className="jp-time-holder">
                                            <span className="jp-current-time" role="timer" aria-label="time">&nbsp;</span>
                                            <span className="jp-duration" role="timer" aria-label="duration">&nbsp;</span>
                                        </div>
                                        <div className="jp-progress">
                                            <div className="jp-seek-bar">
                                                <div className="jp-play-bar">
                                                    <div className="bullet">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="jp-volume-controls flex-item">
                                        <div className="widget knob-container">
                                            <div className="knob-wrapper-outer">
                                                <div className="knob-wrapper">
                                                    <div className="knob-mask">
                                                        <div className="knob d3"><span></span></div>
                                                        <div className="handle"></div>
                                                        <div className="round">
                                                            <img src="images/svg/volume.svg" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- <input></input> --> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="jp-toggles flex-item">
                                        <button className="jp-shuffle" tabIndex="0" title="Shuffle">
                                            <i className="ms_play_control"></i></button>
                                        <button className="jp-repeat" tabIndex="0" title="Repeat"><i className="ms_play_control"></i></button>
                                    </div>
                                    <div className="jp_quality_optn custom_select">
                                        <select>
                                            <option>quality</option>
                                            <option value="1">HD</option>
                                            <option value="2">High</option>
                                            <option value="3">medium</option>
                                            <option value="4">low</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--main div--> */}
            </div>
        </div>
    )
}

export default Player
