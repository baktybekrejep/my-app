import React from "react"
import foto from '../images/logo.png'

const Header = () => {
    return (
        <header className="header">
            <div className="flex-container">
                <div className="logo-block">
                    <img src={foto} alt=""/>
                    <span className="logo-text">BuhOne</span>
                </div>
                <nav>
                    <ul className="nav-ul">
                        <li className="nav-li"><a className="nav-link" href="#">Главная</a></li>
                        <li className="nav-li"><a className="nav-link" href="#">услуги</a></li>
                        <li className="nav-li"><a className="nav-link" href="#">кейсы</a></li>
                        <li className="nav-li"><a className="nav-link" href="#">о компании</a></li>
                        <li className="nav-li"><a className="nav-link" href="#">контакты</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header