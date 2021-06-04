import React from 'react'

export const Register = (props) => {
    const p = props.p;

    // console.log(p)

    return (
        <div className="col-4">
            {/* <div className="card">
                <div className="card-header">
                    <h6 className="card-title">
                        {p.name}
                        <span className="float-right">${p.price}</span>
                    </h6>
                </div>
                <div className="card-body">
                    <img className="card-img-top" src={p.image} alt={p.name} />
                </div>
                <div className="card-footer"> */}
            <button onClick={(e) => props.joinAsMusician(e)} routerLink="/cart" className="ms_btn">Get Started</button>
            {/* </div>
            </div> */}
        </div>
    )
}