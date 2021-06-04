import React, { useContext } from 'react'
import { Link, Route, useHistory } from 'react-router-dom'
import { Cart } from '../components/Cart';
import { Product } from '../components/Product';
import { Register } from '../components/Register';
import { useAuth } from '../contexts/AuthContext';
import { DataContext } from '../contexts/DataProvider';
import firebase from '../firebase';

const Account = (props) => {
    const p = props.p;
    var { currentUser } = useAuth();
    const { cartList } = useContext(DataContext)
    const { cartClear } = useContext(DataContext);
    const [cart, setCart] = cartList;
    const clearCart = cartClear;
    const history = useHistory()
    const db = firebase.database();
    const { productList } = useContext(DataContext);
    const [products] = productList;

    const addToCart = (eventObj, productObj) => {
        let newCart;
        if (!cart.hasOwnProperty('items')) {
            newCart = { ...cart, items: {} }
        }
        else {
            newCart = { ...cart }
        }

        if (!Object.keys(newCart.items).includes(productObj.name)) {
            // create new newCart items
            newCart.items[productObj.name] = {
                info: productObj,
                quantity: 1
            }
        }
        else {
            // find item and increase its quantity +1
            newCart.items[productObj.name].quantity++;
        }

        // increment entire cart quantity
        newCart.quantity++;

        // update subtotal
        newCart.subtotal += newCart.items[productObj.name].info.price;
        newCart.tax += newCart.items[productObj.name].info.tax;
        newCart.grandtotal = newCart.subtotal + newCart.tax;


        // update cart in database
        let cartListRef = db.ref(`cart/${currentUser.user.id}`);
        var newCartItem = {
            ...newCart,
        }
        cartListRef.set(newCartItem);

        // set cart from database
        // cartListRef.once('value', snapshot => {
        //     console.log(snapshot[0])
        // })
        // .orderByChild(`items/${productObj.name}`)
        db.ref(`cart/${currentUser.user.id}`).on('value', snapshot => {
            setCart({ ...snapshot.val() });

        props.history.push('/cart')

        })
    };

    const joinAsMusician = (event) => {
        console.log(currentUser)
        currentUser = { ...currentUser, isAuthorized: true }
        console.log(currentUser)
        props.history.push('/profile')
    };

    return (
        // < !----Edit Profile Wrapper Start---->
        <div className="ms_account_wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2>Manage Account</h2>
                        <div className="ms_heading">
                            <h1>Which of the following best describes you?</h1>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="ms_plan_box">
                            <div className="ms_plan_header">
                                {/* <div className="ms_plan_img">
                                    <img src="images/plan_icon1.png" alt="" />
                                </div> */}
                            </div>
                            <h3 className="plan_heading">Producer</h3>
                            <div className="plan_price">
                                {/* <div className="plan_dolar"><sup>$</sup><div className="amt" >11.99</div></div> */}
                                </div>
                            <ul>
                                <li>Gain Access To The Deep Cut Music Library</li>
                                <li>Rare Samples, Loops, and Breaks</li>
                                <li>Download 15 Tracks Per Month</li>
                                <li>Only $11.99 Per Month</li>
                            </ul>
                            <div className="ms_plan_btn">
                                <span>{products.map(p => <Product addToCart={addToCart} key={p.id} p={p} />)}</span>
                                {/* <Link to='/account' onClick={(e, p) => handleSubscription(e, p)} className="ms_btn"><span>Gain Access</span></Link> */}
                                {/* <Link to='/account' onClick={(e) => props.handleSubscription(e, p)} action="http://127.0.0.1:5000/api/product/1" method="GET" className="ms_btn"><span>Gain Access</span></Link> */}
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-lg-4">
                        <div className="ms_plan_box paln_active">
                            <div className="ms_plan_header">
                                <div className="ms_plan_img">
                                    <img src="images/plan_icon2.png" alt="" />
                                </div>
                            </div>
                            <h3 className="plan_heading">Professional</h3>
                            <div className="plan_price"><div className="plan_dolar"><sup>$</sup>50</div></div>
                            <ul>
                                <li>Monthly Downloads - 50 Songs</li>
                                <li>Monthly Upload - 50 Minutes</li>
                                <li>Plan Validity - 1 Month</li>
                                <li>Streaming - Unlimited</li>
                            </ul>
                            <div className="ms_plan_btn">
                                <a href="#" className="ms_btn">buy now</a>
                            </div>
                        </div>
                    </div> */}
                    <div className="col-lg-6">
                        <div className="ms_plan_box">
                            <div className="ms_plan_header">
                                {/* <div className="ms_plan_img">
                                    <img src="images/plan_icon3.png" alt="" />
                                </div> */}
                            </div>
                            <h3 className="plan_heading">Musician</h3>
                            <div className="plan_price">
                                {/* <div className="plan_dolar"><sup>$</sup>80</div> */}
                                </div>
                            <ul>
                                <li>Collaborate And Get Paid</li>
                                <li>Earn Royalties For Your Music</li>
                                <li>Expand Your Listener Base</li>
                                <li>Sign Up For Free</li>
                            </ul>
                            <div className="ms_plan_btn">
                                <span>{products.map(p => <Register joinAsMusician={joinAsMusician} />)}</span>
                                {/* <Link to="/profile" href="#" className="ms_btn">Get Started</Link> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        {/* <div className="ms_acc_overview">
                            <div className="ms_heading">
                                <h1>Account Overview</h1>
                            </div>
                            <div className="ms_acc_ovrview_list">
                                <ul>
                                    <li>Your Subscribed Plan  <span>- Standard</span></li>
                                    <li>Amount Paid  		  <span>- $30</span></li>
                                    <li>Validity Expires In   <span>- 15 Days</span></li>
                                    <li>Downloads Remaining   <span>- 21 Tracks</span></li>
                                    <li>Upload Remaining      <span>- 45 Minutes</span></li>
                                </ul>
                                <a href="#" className="ms_btn">renew now</a>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account
