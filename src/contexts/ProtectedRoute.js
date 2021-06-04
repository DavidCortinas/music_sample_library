import React from 'react'
import { Redirect, Route } from 'react-router'
import { useAuth } from './AuthContext'

const ProtectedRoute = ({ component: Component, ...rest }) => {

    const { currentUser } = useAuth()
    // console.log(currentUser)

    return (
        <Route {...rest} render={(props) => {
            const loggedIn = currentUser.loggedIn
            // console.log(loggedIn)
            if (loggedIn) {
                // console.log('yes')
                return <Component {...props} />; }
            // } 
            // else {
            //     return (
            //         <Redirect to={{ pathname: "/" }} />
            //     );
            // }
        }}
    />
)
}

export default ProtectedRoute
