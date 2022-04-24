import React, {useState, useContext} from "react";
import { AuthContext } from "./index";
import { auth, authentication } from "./firebase.config";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Join = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setErrors] = useState("");

    const Auth = useContext(AuthContext);
    
    const handleForm = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then(res => {
                if(res.user) Auth.setLoggedIn(true);
            })
            .catch(e => {
                setErrors(e.message);
            });
    };

    // Sign In With Google 
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(authentication, provider)
        .then((res)=> {
            if(res) Auth.setLoggedIn(true);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    return (
        <div>
            <h1>Join</h1>
            <form onSubmit={e => handleForm(e)}>
                <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    name="email"
                    type="email"
                    placeholder="email"
                />
                <input
                    onChange={e => setPassword(e.target.value)}
                    name="password"
                    value={password}
                    type="password"
                    placeholder="password"
                />
                <hr/>
                <button className="googleBtn" type="button" onClick={signInWithGoogle}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                        alt="logo"
                    />
                    Join With Google
                </button>

                <button type="submit">Login</button>
                <span>{error}</span>
            </form>
        </div>
    )
}

export default Join;