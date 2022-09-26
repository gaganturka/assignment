import {TailSpin} from "react-loader-spinner";
import {React, useContext, useEffect, useState} from "react";
import {AuthContext} from "../Context/AuthContext";
import {ToastContainer, toast} from "react-toastify";
import {useNavigate, Link} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import * as http from '../Utils/Http';
import {handleRequestError} from "../Utils/Helpers";

const Login = (props) => {
    const [loading, setLoading] = useState(false);
    const [loginCredential, setLoginCredential] = useState({
        email: "",
        password: "",
    });

    const {authState, authDispatch} = useContext(AuthContext);

    const navigate = useNavigate();

    const onChangeLogin = (e) => {
        setLoginCredential({...loginCredential, [e.target.name]: e.target.value});
    };

    const onSubmitLogin = async () => {
        if (loginCredential.email.length < 5) {
            toast("Enter a valid email");
            return;
        } else if (loginCredential.password.length < 1) {
            toast("Enter a valid password");
            return;
        }
        setLoading(true);
        http.post('/firm/loginFirm', loginCredential).then((res) => {
            setLoading(false);
            localStorage.setItem("token", res.token);
            localStorage.setItem("user", JSON.stringify(res.user));
            authDispatch({type: "SET_USER", payload: res.user});
            toast("Login successful");
            navigate("/clients");
        }).catch((error) => {
            handleRequestError(error);
            setLoading(false);
        });
    };

    return (
        <>
            {loading ? (
                <div className="custm-loader">
                    <TailSpin color="#000" height={200} width={200}/>
                </div>
            ) : null}
            <section className="login-page">
                <div className="container-fluid">
                    <div className="row border">
                        <div className="col-lg-6 p-0">
                            <div className="auth-modal-artwork">
                                <img
                                    src="./assets/img/human-right-artwok.png"
                                    className="img img-fluid"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 p-0">
                            <div className="text-center auth-form-area">
                                <div className="login-form w-100">
                                    <div className="auth-form-fields">
                                        <div className="auth-modal-logo">
                                            <img
                                                src="./assets/img/logo-login.png"
                                                className="img img-fluid logo-login"
                                                alt=""
                                            />
                                        </div>
                                        <h5 className="mt-3">Please Login in your Account</h5>
                                        <div className="">
                                            <div className=" mt-5 ">
                                                <label

                                                    htmlFor="email"
                                                    className="form-label d-flex justify-content-start"
                                                >
                                                    Email ID:
                                                </label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="email"
                                                    name="email"
                                                    onChange={onChangeLogin}
                                                    placeholder="Enter your Email ID"
                                                    value={loginCredential.email}
                                                />
                                            </div>
                                            <div className="mb-3 mt-3">
                                                <label

                                                    htmlFor="pwd"

                                                    className="form-label d-flex justify-content-start"
                                                >
                                                    Password:
                                                </label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    id="pwd"
                                                    name="password"
                                                    onChange={onChangeLogin}
                                                    value={loginCredential.password}
                                                    placeholder="Enter your password"
                                                />
                                            </div>
                                            <button
                                                type="submit"
                                                className="btn w-100 mt-4 login-btn "
                                                onClick={onSubmitLogin}
                                            >
                                                Login
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;
