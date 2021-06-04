import { loadStripe } from '@stripe/stripe-js';
import React, { useState, useContext } from 'react'
import { useAuth } from '../contexts/AuthContext';
import { DataContext } from '../contexts/DataProvider';
import NoCart from '../views/NoCart';
import axios from 'axios';
// stripe
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import CardInput from './CardInput'

export const Cart = (props) => {
    var { currentUser } = useAuth();
    const { cartList } = useContext(DataContext)
    const { cartClear } = useContext(DataContext);
    const [email, setEmail] = useState('');
    const [cart, setCart] = cartList;
    const clearCart = cartClear;
    const stripe = useStripe();
    const elements = useElements();
    

    const handleSubmitPay = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        const res = await axios.post('http://localhost:3000/pay', { email: email });

        const clientSecret = res.data['client_secret'];

        const result = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    email: email,
                },
            },
        });

        if (result.error) {
            // Show error to your customer (e.g., insufficient funds)
            console.log(result.error.message);
        } else {
            // The payment has been processed!
            if (result.paymentIntent.status === 'succeeded') {
                console.log('Money is in the bank!');
                clearCart()
                console.log(currentUser.downloadsAvailable, currentUser.isSubscribed)
                currentUser = { ...currentUser, downloadsAvailable: 15 }
                console.log(currentUser.downloadsAvailable, currentUser.isSubscribed)
                alert('You have successfully completed your payment!')
                // Show a success message to your customer
                // There's a risk of the customer closing the window before callback
                // execution. Set up a webhook or plugin to listen for the
                // payment_intent.succeeded event that handles any business critical
                // post-payment actions.
            }
        }
    };

    const handleSubmitSub = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        const result = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
            billing_details: {
                email: email,
            },
        });

        if (result.error) {
            console.log(result.error.message);
        } else {
            const res = await axios.post('http://localhost:3000/sub', {'payment_method': result.paymentMethod.id, 'email': email})
    
            console.log(res.data);
            const { client_secret, status } = res.data;
    
            if (status === 'requires_action') {
                stripe.confirmCardPayment(client_secret).then(function(result) {
                    if (result.error) {
                        console.log("There was an issue.")
                        console.log(result.error)
                    } else {
                        console.log('Cha-ching!');
                    }
                });
            } else {
                console.log('Cha-ching!');
                clearCart()
                console.log(currentUser.downloadsAvailable, currentUser.isSubscribed)
                currentUser = {...currentUser, isSubscribed: true ,downloadsAvailable: 15}
                console.log(currentUser.downloadsAvailable, currentUser.isSubscribed)
                alert('You have successfully completed your payment!')
            }
        }  
    };


    if (!cart.items) {
        return (
            <NoCart />
        )
    }
    else {
        return (
            <div className="row" id="cart">
                <div className="col-md-1"></div>
                <div>
                    <div className="row"><br></br></div>
                    <div className="row"><br></br></div>
                    <div className="row"><br></br></div>
                    <div className="row"><br></br></div>
                    <p id="your-cart" className="d-flex justify-content offset-1 mb-3">
                        <span className="text-muted">Your cart</span>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        <span className="badge badge-secondary badge-pill">{cart.quantity}</span>
                    </p>
                    <div className="col-md-6">
                        <ul className="list-group mb-3">
                            {Object.values(cart.items).map(item => (
                                <li key={item.info.id} className="list-group-item d-flex justify-content-between lh-condensed">
                                    <div>
                                        <p id="itemized">{item.info.name}</p>
                                        {/* <small className="text-muted">Brief description</small> */}
                                    </div>
                                    <span className="text-muted">${Number(item.info.price).toFixed(2)} x{item.quantity}</span>
                                </li>
                            ))}

                            {/* <li className="list-group-item d-flex justify-content-between bg-light">
                        <div className="text-success">
                            <h6 className="my-0">Promo code</h6>
                            <small>EXAMPLECODE</small>
                        </div>
                        <span className="text-success">-$5</span>
                        </li> */}
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Tax</span>
                                <strong>${Number(cart.tax).toFixed(2)}</strong>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total</span>
                                <strong>${Number(cart.subtotal).toFixed(2)}</strong>
                            </li>
                        </ul>
                    </div>


                    {/* <form className="card p-2">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Promo code" />
                        <div className="input-group-append">
                            <button type="submit" className="btn btn-secondary">Redeem</button>
                        </div>
                        </div>
                    </form> */}
                </div>
                <div className="col-md-6 order-md-1">
                    <div className="row"><br></br></div>
                    <div className="row"><br></br></div>
                    <div className="row"><br></br></div>
                    <div className="row"><br></br></div>
                    <p className="mb-3">Shipping Address</p>
                        <form className="needs-validation" noValidate>
                            <div className="row">
                                <div className="col-md-6 my-3">
                                    <label htmlFor="firstName">First name</label>
                                    <br></br>
                                    <input type="text" id="firstName" size="50" placeholder="" defaultValue="" required />
                                    <div className="invalid-feedback">
                                        Valid first name is required.
                                </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="lastName">Last name</label>
                                    <br></br>
                                    <input type="text" id="lastName" size="50" placeholder="" defaultValue="" required />
                                    <div className="invalid-feedback">
                                        Valid last name is required.
                                </div>
                                </div>
                            </div>

                            <div className="my-3">
                                <label htmlFor="email">Email <span className="text-muted">(Optional)</span></label>
                                <br></br>
                            <input type="email" id="email" size="105" placeholder="you@example.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
                                <div className="invalid-feedback">
                                    Please enter a valid email address for shipping updates.
                            </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="address">Address</label>
                                <input type="text" size="105" id="address" placeholder="1234 Main St" required />
                                <div className="invalid-feedback">
                                    Please enter your shipping address.
                            </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="address2">Address 2</label>
                                <input type="text" size="105" id="address2" placeholder="Apartment or suite" />
                            </div>

                            <div className="row">
                                <div className="col-md-5 mb-3">
                                    <label htmlFor="country">Country</label>
                                    <br></br>
                                    <input size="30" id="country" required>
                                        {/* <option defaultValue="">Choose...</option>
                                    <option>United States</option> */}
                                    </input>
                                    <div className="invalid-feedback">
                                        Please select a valid country.
                                </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label htmlFor="state">State</label>
                                    <input size="30" id="state" required>
                                        {/* <option defaultValue="">Choose...</option>
                                    <option>California</option> */}
                                    </input>
                                    <div className="invalid-feedback">
                                        Please provide a valid state.
                                </div>
                                </div>
                                <div className="col-md-3 mb-3">
                                    <label htmlFor="zip">Zip</label>
                                    <br></br>
                                    <input type="text" size="23" id="zip" placeholder="" required />
                                    <div className="invalid-feedback">
                                        Zip code required.
                                </div>
                                </div>
                            </div>
                            {/* <hr className="mb-4" /> */}

                            {/* <p className="mb-3">Payment</p> */}

                            <div className="d-block my-3">
                                {/* <div className="custom-control custom-radio">
                                <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" disabled={true} required />
                                <label className="custom-control-label" htmlFor="debit">PayPal (Coming Soon)</label>
                            </div> */}
                                {/* <div className="custom-control custom-radio">
                                <input id="paypal" name="paymentMethod" type="radio"  defaultChecked required />
                                <label className="custom-control-label" htmlFor="paypal">Stripe</label>
                            </div> */}
                            </div>
                            <div className="col-md-2"></div>
                            {/* <hr className="mb-4" /> */}
                            <br></br>
                            <CardInput />
                            <br></br>
                        <button className="btn-primary" type="submit" size="200" id="checkout-btn" onClick={handleSubmitSub}>Monthly Subscription - $11.99/month</button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button className="btn-primary" type="submit" size="200" id="checkout-btn" onClick={handleSubmitPay}>One Month Access - $15.00</button>
                        </form>
                </div>
            </div>
        )
    }
}



