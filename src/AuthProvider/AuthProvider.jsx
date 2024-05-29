import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";


export const AuthContext = createContext(null);
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    //create User
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //image name update user
    const updateUserProfile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        })
    }


    //sign in user
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    //logout
    const logoutUser = () => {
        setUser(null);
        signOut(auth);


    }

    //current user
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                // User is signed out
                // ...
            }
        });
        return () => unSubscribe();
    }, [])

    const allValue = {
        createUser,
        signInUser,
        updateUserProfile,
        logoutUser,
        user
    }
    return (
        <AuthContext.Provider value={allValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;