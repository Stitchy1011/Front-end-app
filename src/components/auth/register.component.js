import React, { Component } from "react";
import UserDataService from "../../services/users.service";

export  default  class registerForm extends  Component {

    constructor(props) {
        super(props);
        this.onChangeFirstName= this.onChangeFirstName.bind(this);
        this.onChangeLastName= this.onChangeLastName.bind(this);
        this.onChangeMail= this.onChangeMail.bind(this);
        this.onChangePhone= this.onChangePhone.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);

        this.state = {
            firstName: '',
            lastName: '',
            mail: '',
            phone: '',
            password: '',
            confirmPassword: '',
            submitted: false
        };
    }

    onChangeFirstName(e) {
        this.state({
            firstName: e.target.value
        });
    }
    onChangeLastName(e) {
        this.state({
            Lastname: e.target.value
        });
    }
    onChangeMail(e) {
        this.state({
            mail: e.target.value
        });
    }
    onChangePhone(e) {
        this.state({
            phone: e.target.value
        });
    }
    onChangePassword(e) {
        this.state({
            password: e.target.value
        });
    }
    onChangeConfirmPassword(e) {
        this.state({
            confirmPassword: e.target.value
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
                                                     style={{width: "185px;"}} alt="logo"/>
                                                <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
                                            </div>

                                            <form>
                                                <p>Veuillez vous inscrire</p>

                                                <div className="form-outline mb-4">
                                                    <input type="text" id="form2Example11" className="form-control"
                                                           placeholder="First Name"/>
                                                    <label className="form-label"
                                                           htmlFor="form2Example11">First Name</label>
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input type="text" id="form2Example11" className="form-control"
                                                           placeholder="Last Name"/>
                                                    <label className="form-label"
                                                           htmlFor="form2Example11">Last Name</label>
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input type="email" id="form2Example11" className="form-control"
                                                           placeholder="Your email"/>
                                                    <label className="form-label"
                                                           htmlFor="form2Example11">Email</label>
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input type="text" id="form2Example11" className="form-control"
                                                           placeholder="N° Telephone"/>
                                                    <label className="form-label"
                                                           htmlFor="form2Example11">N° Telephone</label>
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <input type="password" id="form2Example22"
                                                           className="form-control"/>
                                                    <label className="form-label"
                                                           htmlFor="form2Example22">Mot de passe</label>
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input type="password" id="form2Example22"
                                                           className="form-control"/>
                                                    <label className="form-label"
                                                           htmlFor="form2Example22">Confirmation mot de passe</label>
                                                </div>

                                                <div className="text-center pt-1 mb-5 pb-1">
                                                    <button
                                                        className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                                                        type="button">Log
                                                        in
                                                    </button>
                                                    <a className="text-muted" href="#!">Forgot password?</a>
                                                </div>

                                                <div className="d-flex align-items-center justify-content-center pb-4">
                                                    <p className="mb-0 me-2">Already have an account?</p>
                                                    <button type="button" className="btn btn-outline-danger">Create
                                                        new
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