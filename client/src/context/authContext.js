import React, { createContext, useState, useEffect } from 'react';
import * as AuthService from '../services/authService';

// Global state for the whole app. Gives a provider and a consumer
export const AuthContext = createContext();

// Children are the components that the provider will wrap around
// eslint-disable-next-line import/no-anonymous-default-export
export default ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoaded,setIsLoaded] = useState(false);

    useEffect(() => {
        AuthService.isAuthenticated().then(data => {
            setUser(data.user);
            setIsAuthenticated(data.isAuthenticated);
            setIsLoaded(true);
        });
    }, []); // Empty array to be exectued once

    // Anything wrapped within the provider will have access to the global state
    // value = {what we want available as global state}
    return (
        <div>
            {!isLoaded ? <h1>Loading</h1> : 
            <AuthContext.Provider value={{user, setUser, isAuthenticated, setIsAuthenticated}}>
                { children }
            </AuthContext.Provider>}
        </div>
    )
}