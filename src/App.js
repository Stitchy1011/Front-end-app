import React, { Component} from "react";
import { Routes, Route, Link,} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">{/*
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Disabled</a>
                            </li>*/}
                            <li className="nav-item">
                                <Link to={"/"} className="nav-link">Accueil</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/menu"} className="nav-link">La carte</Link>
                            </li>

                            <li className="nav-item dropdown">
                                <Link to={"#"} className="nav-link">Connexion / Inscription</Link>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link to={"/connexion"} className="nav-link">Connexion</Link>
                                    </li>
                                    <li>
                                        <Link to={"/inscription"} className="nav-link">Inscription</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to={"/dashboard"} className="nav-link"> Mon compte</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

                <div className="container">
                    <Routes>
                        <Route path="/" />
                        <Route path="/menu" />
                        <Route path="/connexion" />
                        <Route path="/inscription" />
                        <Route path="/dashboard" />
                    </Routes>
                </div> {/*
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/menu" element={<MenuList/>}/>
                        <Route path="/connexion" element={<loginForm/>}/>
                        <Route path="/inscription" element={<registerForm/>}/>
                        <Route path="/dashboard" element={<Dasboard/>}/>
                    </Routes>
                </div> */}
            </div>
            // Routes

        )
    }
}

export default App;