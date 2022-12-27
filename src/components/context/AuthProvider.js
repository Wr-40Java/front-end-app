import React, {Component,  createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    
    const credentialsFromLocalStorage = localStorage.getItem('credentials')
    const usernameFromLocalStorage = localStorage.getItem('username')

    const[auth,setAuth] = useState(credentialsFromLocalStorage)
    const[username, setUsername] = useState(usernameFromLocalStorage)

    return (
        <AuthContext.Provider value={{auth: auth, username: username}}>
        </AuthContext.Provider>
    )
}

export default AuthContext;

// const AuthContext = createContext({});

// export default class AuthProvider extends React.Component {
//     state = {
//         auth: localStorage.getItem('credentials'),
//         username: localStorage.getItem('username')
//       }

//   render() {
//     return (
//       <AuthContext.Provider value={this.state}>
//         {this.props.children}
//       </AuthContext.Provider>
//     )
//   }
// }




