import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

export default function Header() {
    const navigate = useNavigate();

    // Event functions
    function onClick_item(item) {
        navigate(item);
    }

    return (
        <>
            <header className="header">
                <img className="logo" src="images/logo.png" alt="Logo" />
                <h1>The Shop</h1>
            </header>
            <div className="header-links">
                <li onClick={() => onClick_item('/')}>Home</li>
                <li onClick={() => onClick_item('/shop')}>Products</li>
                <li onClick={() => onClick_item('/login')}>Login</li>
            </div>
        </>
    );
}
