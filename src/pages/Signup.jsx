import React, { useEffect } from 'react';

function Sign() {
    useEffect(() => {
        document.body.classList.add('Sign')
        return () => {
            document.body.classList.remove('Sign')
        }
    }, [])
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={'Sign'}>
            <div className="login-wrap">
                <div className="container">
                    <div className="login-form-wrapper">
                        <div className="row">
                            <div className="col-md-6 login-img"> </div>
                            <div className="col-md-6 logn-sprt">
                                <div className="tutor-login">
                                    <div className="tutor-hd">
                                        <h2>Register</h2>
                                        <p>
                                            Already have an account?{" "}
                                            <a href="login.html" className="signt">
                                                Sign in.
                                            </a>
                                        </p>
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
                                        <div className="form-group">
                                            <label>Confirm password</label>
                                            <div className="input-group mb-3">
                                                {" "}
                                                <span className="input-group-text">
                                                    <i className="fa-solid fa-key" />
                                                </span>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    placeholder="Enter your password again"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                                id="exampleCheck1"
                                            />
                                            <label className="form-check-label" htmlFor="exampleCheck1">
                                                I certify that i have read and accept the{" "}
                                                <a href="terms-conditions.html">Terms of</a> Use and{" "}
                                                <a href="privacy-policy.html">Privacy Policy.</a>
                                            </label>
                                        </div>
                                        <div className="btn-smt">
                                            <button type="submit" className="btn btn-primary">
                                                Sign up
                                            </button>
                                        </div>
                                        <div className="back-home">
                                            <a href="index.html">Back to Home</a>
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


export default Sign