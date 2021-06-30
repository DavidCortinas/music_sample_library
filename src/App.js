import React, { useContext, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Player from './components/Player';
import Sidebar from './components/Sidebar';
import { Home } from './views/Home';
import firebase from './firebase';
import { useAuth } from './contexts/AuthContext';
import {startFirebaseUI} from './firebase'
import Account from './views/Account';
import Upload from './views/Upload';
import Profile from './views/Profile';
import Artists from './views/Artists';
import ArtistSingle from './views/ArtistSingle';
import SamplePacks from './views/SamplePacks';
import SamplePackSingle from './views/SamplePackSingle';
import Genres from './views/Genres';
import GenreSingle from './views/GenreSingle';
import Downloads from './views/Downloads';
import Purchased from './views/Purchased';
import Favorites from './views/Favorites';
import Hist from './views/Hist';
import ProtectedRoute from './contexts/ProtectedRoute';
import { Cart } from './components/Cart';
import { DataContext } from './contexts/DataProvider';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
// import CheckoutForm from "./CheckoutForm";
import { Products } from './views/Products';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_TEST_KEY);

const App = () => {
  const { cartList } = useContext(DataContext);
  const { cartClear } = useContext(DataContext);

  const [cart, setCart] = cartList;
  const clearCart = cartClear;
  const { currentUser } = useAuth();

  const db = firebase.database();
  const startUI = () => {
    startFirebaseUI('#firebaseui')
    // console.log(2)
  }

  (function () {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = '%PUBLIC_URL%/favicon.ico';
    document.getElementsByTagName('head')[0].appendChild(link);
  })();

  useEffect(() => {
    if (currentUser.loggedIn) {
      db.ref(`cart/${currentUser.user.id}`).once('value', (snapshot) => {
        if (!snapshot.exists()) {
          clearCart()
          setCart({ items: {}, quantity: 0, tax: 0, subtotal: 0, grandtotal: 0 })
        }
      }
      )
    }
  }, [db, currentUser, setCart, clearCart])

  // const addToCart = (eventObj, productObj) => {
  //   let newCart;
  //   if (!cart.hasOwnProperty('items')) {
  //     newCart = { ...cart, items: {} }
  //   }
  //   else {
  //     newCart = { ...cart }
  //   }

  //   if (!Object.keys(newCart.items).includes(productObj.name)) {
  //     // create new newCart items
  //     newCart.items[productObj.name] = {
  //       info: productObj,
  //       quantity: 1
  //     }
  //   }
  //   else {
  //     // find item and increase its quantity +1
  //     newCart.items[productObj.name].quantity++;
  //   }

  //   // increment entire cart quantity
  //   newCart.quantity++;

  //   // update subtotal
  //   newCart.subtotal += newCart.items[productObj.name].info.price;
  //   newCart.tax += newCart.items[productObj.name].info.tax;
  //   newCart.grandtotal = newCart.subtotal + newCart.tax;


  //   // update cart in database
  //   let cartListRef = db.ref(`cart/${currentUser.user.id}`);
  //   var newCartItem = {
  //     ...newCart,
  //   }
  //   cartListRef.set(newCartItem);

  //   // set cart from database
  //   // cartListRef.once('value', snapshot => {
  //   //     console.log(snapshot[0])
  //   // })
  //   // .orderByChild(`items/${productObj.name}`)
  //   db.ref(`cart/${currentUser.user.id}`).on('value', snapshot => {
  //     setCart({ ...snapshot.val() });
  //   })
  // };

  // const handleSubscription = () => {
  //   console.log(1)
  //   addToCart()
  //   console.log(2)
  //   // await fetch('http://127.0.0.1:5000/api/product/1', {
  //   //     method: "GET",
  //   //     mode: 'no-cors',
  //   //     headers: {
  //   //         "Content-type": "application/json",
  //   //         "Origin": "http://127.0.0.1:3000"
  //   //     },
  //   //     body: JSON.stringify()
  //   // })
  //   // .then(res => res)
  //   // .then(getCart())
  //   // .catch(err => console.log(err))
  // };

  const signOut = () => {
    firebase.auth().signOut()
      .then(()=> {
        console.log('User signed out.')
      })
      .catch(err => {
        console.error(err)
      })
  };

  
  return (
    <div>
      <header id="firebaseui">
        <Header startUI={startUI} signOut={signOut} />
      </header>

      <main>
        <div>
          <Sidebar />
        </div>
        <Elements stripe={stripePromise}>
          <Switch>
            <Route exact path='/' render={() => <Home startUI={startUI} signOut={signOut} />} />
            <ProtectedRoute redirectTo="/" exact path='/account' user={currentUser.user} component={Account} render={() => <Account />} />
            <ProtectedRoute redirectTo="/" exact path='/profile' user={currentUser.user} component={Profile} render={() => <Profile />} />
            <ProtectedRoute redirectTo="/" exact path='/upload' user={currentUser.user} component={Upload} render={() => <Upload />} />
            <Route exact path='/samplepacks' user={currentUser.user} component={SamplePacks} render={() => <SamplePacks />} />
            <Route exact path='/samplepacksingle' user={currentUser.user} component={SamplePackSingle} render={() => <SamplePackSingle />} />
            <Route exact path='/artists' user={currentUser.user} component={Artists} render={() => <Artists />} />
            <Route exact path='/artistsingle' user={currentUser.user} component={ArtistSingle} render={() => <ArtistSingle />} />
            <Route exact path='/genres' user={currentUser.user} component={Genres} render={() => <Genres />} />
            <Route exact path='/genresingle' user={currentUser.user} component={GenreSingle} render={() => <GenreSingle />} />
            <Route exact path='/downloads' user={currentUser.user} component={Downloads} render={() => <Downloads />} />
            <Route exact path='/purchased' user={currentUser.user} component={Purchased} render={() => <Purchased />} />
            <Route exact path='/favorites' user={currentUser.user} component={Favorites} render={() => <Favorites />} />
            <Route exact path='/hist' user={currentUser.user} component={Hist} render={() => <Hist />} />
            {/* <Route exact path='/products' user={currentUser.user} component={Products} render={() => <Products />} /> */}
            <Route exact path='/cart' user={currentUser.user} component={Cart} render={() => <Cart />} />
          </Switch>
        </Elements>
      </main>

      <footer>
        <Footer />
        <Player />
      </footer>
    </div>
  )
}

export default App

