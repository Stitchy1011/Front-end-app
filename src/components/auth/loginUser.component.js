import React, { Component } from "react";
//import UserDataService from "../../services/users.service";
//import * as mdb from 'mdb-ui-kit'; // lib

import "../../App.css"

export default class loginForm extends Component {
    constructor(props) {
        super(props);
        this.onChangeLogin = this.onChangeLogin.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            login: '',
            password: '',
            submitted: false
        };
    }

    onChangeLogin(e) {
        this.state({
            login: e.target.value
        });
    }
    onChangePassword(e) {
        this.state({
            password: e.target.value
        });
    }


    render() {
        return (
            <section className="h-100 gradient-form" style={{background: "#eeee"}}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-xl-10">
                            <div className="card rounded-3 text-black">
                                <div className="row g-0">
                                    <div className="col-lg-6">
                                        <div className="card-body p-md-5 mx-md-4">

                                            <div className="text-center">
                                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                                     style={{width: "185px"}} alt="logo"/>
                                                <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
                                            </div>

                                            <form>
                                                <p>Veuillez vous connecter</p>

                                                <div className="form-outline mb-4">
                                                    <input type="email" id="form2Example11" className="form-control"
                                                           placeholder="Adresse mail"/>
                                                    <label className="form-label"
                                                           htmlFor="form2Example11">Identifiant</label>
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <input type="password" id="form2Example22"
                                                           className="form-control"/>
                                                    <label className="form-label"
                                                           htmlFor="form2Example22">Mot de passe</label>
                                                </div>

                                               {/* <div className="text-center pt-1 mb-5 pb-1">
                                                    <button
                                                        className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                                                        type="button">Log
                                                        in
                                                    </button>
                                                    <a className="text-muted" href="#!">Forgot password?</a>
                                                </div>*/}

                                                <div className="d-flex align-items-center justify-content-center pb-4">
                                                    <p className="mb-0 me-2">Vous n'avez de compte ?</p>
                                                    <button type="button" className="btn btn-outline-danger">
                                                        Créer un compte
                                                    </button>
                                                </div>

                                            </form>

                                        </div>
                                    </div>
                                    <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                                        <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                            <h4 className="mb-4">We are more than just a company</h4>
                                            <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur
                                                adipisicing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                veniam, quis nostrud
                                                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                                consequat.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}