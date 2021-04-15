import React, { useRef } from 'react';
import './Login.css';
import foxbelLogo from '../../../media/foxbel-music.png';
import { Button, Form, FormGroup, Label } from 'reactstrap';
import { auth } from '../../../backend/firebase';

export default function Login() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then( (authUser) => {
            console.log(authUser);
        }).catch((error) => {
            alert(error.message);
        });
    }; 

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser)
        }).catch((error) => {
            alert(error.message);
        })
    }
    
    return (
        <div className="login__container">
            <div className="login">
                <img src={foxbelLogo} alt=""/>
                <Form>
                    <h1>Sign In</h1>
                    <FormGroup>
                        <Label for="exampleEmail" className="label">Email</Label>
                        <input className="login__input" ref={emailRef} placeholder="Email" type="email" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword" className="label">Password</Label>
                        <input className="login__input" ref={passwordRef} placeholder="Password" type="password" />
                    </FormGroup>
                    <Button type="submit" onClick={signIn}>SIGN IN</Button>

                    <h4>
                        <span className="login__gray">New to Foxbel Music?</span>
                        <span className="login__link" onClick={register}> Sign Up now.</span>
                    </h4>
                </Form>
            </div>
        </div>

    );
}
