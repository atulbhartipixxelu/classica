import React, { useEffect } from 'react';

function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={'Contact'}>
            <>
                <div
                    className="pages-header"
                    style={{ background: 'url("images/contact-banner.png")' }}
                >
                    <div className="container">
                        <div className="study">
                            <h4>Contact us</h4>
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
                            <h2 className="sec-title-contact">Get in touch</h2>
                        </div>
                        <div className="row">
                            <div className="col-md-12 col-xl-6">
                                <div className="contact-form tutor-form">
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
                                            <label>NOTE</label>
                                            <div className="input-group mb-3">
                                                <textarea
                                                    name="textarea"
                                                    rows={4}
                                                    cols={50}
                                                    placeholder="I want to know about"
                                                    defaultValue={""}
                                                />
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
                            <div className="col-md-12 col-xl-6">
                                <div className="detail-user">
                                    <div className="inner-detail">
                                        <h3>Student contact center</h3>
                                        <p>info@classia.me</p>
                                    </div>
                                    <div className="inner-detail">
                                        <h3>For any media enquiry</h3>
                                        <p>info@classia.me</p>
                                    </div>
                                    <div className="inner-detail">
                                        <h3>For any business enquiry</h3>
                                        <p>info@classia.me</p>
                                    </div>
                                    <div className="inner-detail">
                                        <h3>For any product/website bugs enquiry</h3>
                                        <p>info@classia.me</p>
                                    </div>
                                    <div className="inner-detail">
                                        <h3>Uae enquiry</h3>
                                        <p>info@classia.me</p>
                                    </div>
                                    <div className="inner-detail">
                                        <h3>For any media enquiry</h3>
                                    </div>
                                    <div className="inner-detail">
                                        <h3>For any media enquiry</h3>
                                    </div>
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
export default Contact