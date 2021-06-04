import React from 'react'

const Upload = () => {
    return (
        // < !----Upload and Share Wrapper Start---->
        <div className="ms_upload_wrapper marger_top60">
            <div className="ms_upload_box">
                <h2>Upload Your Music To License and Collaborate</h2>
                <img src="images/svg/upload.svg" alt="" />
                <div className="ms_upload_btn">
                    <a href="#" className="ms_btn">save files</a>
                </div>
                <span> or </span>
                <p>Drag And Drop Music Files</p>
            </div>
            <div className=" marger_top60">
                <div className="ms_upload_box">
                    <div className="ms_heading">
                        <h1>Track Information</h1>
                    </div>
                    <div className="ms_pro_form">
                        <div className="form-group">
                            <label>Track Name *</label>
                            <input type="text" placeholder="Track Name" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Artist’s Name *</label>
                            <input type="text" placeholder="Artist's Name" className="form-control" />
                        </div>
                        {/* <div className="form-group">
                            <label>Select Sample Pack</label>
                            <select className="form-control">
                                <option>Sample Pack</option>
                                <option value="1">Cyber Sonnet </option>
                                <option value="2">Cloud Nine</option>
                                <option value="3">Cyber Sonnet</option>
                                <option value="4">Cloud Nine</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Select Privacy</label>
                            <select className="form-control">
                                <option>Public</option>
                                <option value="1">Private</option>
                                <option value="2">Public</option>
                                <option value="3">Private</option>
                                <option value="4">Public</option>
                            </select>
                        </div> */}
                        <div className="pro-form-btn text-center marger_top15">
                            <div className="ms_upload_btn">
                                <a href="#" className="ms_btn">Upload Now</a>
                                <a href="#" className="ms_btn">cancle</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <!----Main div close---->
    )
}

export default Upload
