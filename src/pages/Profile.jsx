import React, { useEffect } from 'react';

function Profile() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={'Profile'}>
            <>
                <div
                    className="pages-header"
                    style={{ background: 'url("images/contact-banner.png")' }}
                >
                    <div className="container">
                        <div className="study">
                            <h4>Profile</h4>
                            <h1>
                                <span className="line-anmt">Frequently</span> asked
                                <br />
                                questions
                            </h1>
                            <p>
                                Classia is an interesting platform that will teach you in more
                                <br />
                                an interactive way
                            </p>
                        </div>
                    </div>
                </div>
                <div className="profile-section">
                    <div className="container">
                        <div className="title-sec">
                            <h2 className="sec-title">Profile</h2>
                        </div>
                        <div className="row">
                            <div className="col-md-12 col-xl-6">
                                <div className="inner-profile">
                                    <div className="user-infomation">
                                        <div className="user-profile">
                                            <img src="images/user.png" />
                                        </div>
                                        <div className="profile-edit">
                                            <img src="images/edit.png" />
                                        </div>
                                    </div>
                                    <div className="user-info">
                                        <h2>Abhishek Kumer</h2>
                                        <p>
                                            Abrama, <span>India</span>
                                        </p>
                                    </div>
                                    <div className="user-form">
                                        <form>
                                            <div className="form-group">
                                                <select
                                                    className="form-select form-select-sm"
                                                    aria-label=".form-select-sm example"
                                                >
                                                    <option selected="">2nd Grade</option>
                                                    <option value={1}>2nd Grade</option>
                                                    <option value={2}>2nd Grade</option>
                                                    <option value={3}>2nd Grade</option>
                                                </select>
                                            </div>
                                            <div className="btn-scrib">
                                                <a href="#">No Subscriptions</a>
                                            </div>
                                            <div className="btn-smt">
                                                <button type="submit" className="btn btn-primary">
                                                    Request a Callback
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-xl-6">
                                <div className="user-registration tutor-form">
                                    <form>
                                        <div className="form-group">
                                            <label>NAME</label>
                                            <div className="input-group mb-3">
                                                {" "}
                                                <span className="input-group-text">
                                                    <i className="fa fa-user" aria-hidden="true" />
                                                </span>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter Your Name"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>EMAIL</label>
                                            <div className="input-group mb-3">
                                                {" "}
                                                <span className="input-group-text">
                                                    <i className="fa fa-envelope" aria-hidden="true" />
                                                </span>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="Enter Your Password"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>GENDER</label>
                                            <div className="input-group mb-3">
                                                {" "}
                                                <span className="input-group-text">
                                                    <i className="fa-solid fa-venus-mars" />
                                                </span>
                                                <select
                                                    className="form-select"
                                                    aria-label="Default select example"
                                                >
                                                    <option selected="">Select Your Gender</option>
                                                    <option value={1}>Male</option>
                                                    <option value={2}>Female</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>PHONE NUMBER</label>
                                            <div className="input-group mb-3">
                                                {" "}
                                                <span className="input-group-text">
                                                    <i className="fa fa-phone" aria-hidden="true" />
                                                </span>
                                                <input
                                                    type="tel"
                                                    className="form-control"
                                                    placeholder="Enter your Phone Number"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>DATE OF BIRTH</label>
                                            <div className="input-group mb-3">
                                                {" "}
                                                <span className="input-group-text">
                                                    <i className="fa-solid fa-calendar" />
                                                </span>
                                                <input
                                                    className="form-control"
                                                    id="date"
                                                    name="date"
                                                    placeholder="MM/DD/YYY"
                                                    type="text"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>CITY</label>
                                            <div className="input-group mb-3">
                                                {" "}
                                                <span className="input-group-text">
                                                    <i className="fa-solid fa-location-dot" />{" "}
                                                </span>
                                                <select
                                                    className="form-select"
                                                    aria-label="Default select example"
                                                >
                                                    <option selected="" className="select-city">
                                                        Select Your city
                                                    </option>
                                                    <option value={1}>city</option>
                                                    <option value={2}>city</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="btn-smt">
                                            <button type="submit" className="btn btn-primary">
                                                Save
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="learning">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <img src="images/call-action.png" alt="#" className="img-fluid" />
                            </div>
                            <div className="col-md-6 larg-lran">
                                <h2>
                                    Join <span>World's largest</span> learning
                                    <br />
                                    platform today
                                </h2>
                                <p>Start learning by registering for free</p>
                                <a href="#" className="site-btn">
                                    Sign up for Free
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        </div>
    )
}


export default Profile