import React, { useEffect } from 'react';

function Home() {
    useEffect(() => {
        document.body.classList.add('login')
        return () => {
            document.body.classList.remove('login')
        }
    }, [])
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={'homepage'}>
            <div className="login-wrap">
                <div className="container">
                    <div className="login-form-wrapper">
                        <div className="row">
                            <div className="col-md-6 login-img"> </div>
                            <div className="col-md-6 logn-sprt">
                                <div className="tutor-login">
                                    <div className="tutor-hd">
                                        <h2>Login</h2>
                                        <p>Fill in your account credentials to sign in to Account</p>
                                    </div>
                                </div>
                                <div className="tutor-form">
                                    <form>
                                        <div className="form-group">
                                            <label>EMAIL ADDRESS</label>
                                            <div className="input-group mb-3">
                                                {" "}
                                                <span className="input-group-text">
                                                    <i className="fa-solid fa-envelope" />
                                                </span>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter Your Email"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>PASSWORD</label>
                                            <div className="input-group mb-3">
                                                {" "}
                                                <span className="input-group-text">
                                                    <i className="fa-solid fa-key" />
                                                </span>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    placeholder="Enter Your Password"
                                                />
                                            </div>
                                        </div>
                                        <div className="fgt-pass">
                                            <a href="forgot-password.html">Forgot Password?</a>
                                        </div>
                                        <div className="btn-smt">
                                            <button type="submit" className="btn btn-primary">
                                                Login
                                            </button>
                                        </div>
                                        <div className="sin-mo">
                                            <a href="sign-up.html">New here? Sign up now!</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}


export default Home