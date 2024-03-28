import { React, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SignupForm from "../SignupForm/SignupForm";
import LoginForm from "../LoginForm/LoginForm";

import "./LoginPage.css";

export default function LoginPage() {
    const [state, setState] = useState("login");

    function setPageState(){
        setState(state === "login" ? "signup" : "login");
    }

    return (
        <div>
            <Header />
            {
                state === "login" ? <LoginForm setPageState={setPageState}/> : <SignupForm setPageState={setPageState}/>
            }
            <Footer />
        </div>
    );
}