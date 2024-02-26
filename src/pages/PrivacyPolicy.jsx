import React, { useEffect } from 'react';

function Privacy() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={'Privacy'}>

            <>
                {/*[Pages Header]*/}
                <div
                    className="pages-header"
                    style={{ background: 'url("images/privacy-policy-banner.png")' }}
                >
                    <div className="container">
                        <div className="study">
                            <h4>Privacy policy</h4>
                            <h1>
                                <span className="line-anmt">Fueling</span> the world’s
                                <br />
                                ambition
                            </h1>
                            <p>
                                Classia is an interesting platform that will teach you in more
                                <br />
                                an interactive way
                            </p>
                        </div>
                    </div>
                </div>
                {/*[/Pages Header]*/}
                {/*[Privacy Policy]*/}
                <div className="privacy-policy-detail">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="page-content">
                                    <h2 className="sec-title">
                                        Privacy <span>Policy</span>
                                    </h2>
                                    <p>
                                        Welcome to Classia, an e-learning platform committed to protecting
                                        your personal data. This Privacy Policy outlines how we collect,
                                        use, share, and safeguard your data when you interact with our
                                        website and services.
                                    </p>
                                    <div id="tab-1" className="list-content">
                                        <h3>We may collect and process the following information:</h3>
                                        <p>
                                            Registration Data: When you register with Classia, we collect
                                            your name, email address, password, and other necessary details
                                            for account creation.
                                        </p>
                                        <p>
                                            Profile Information: As a student or instructor, you can add
                                            additional details to your profile, such as a photo, biography,
                                            etc.
                                        </p>
                                        <p>
                                            Usage Data: We gather information on how you use our platform,
                                            including the courses you take, assessments you complete, and
                                            more.
                                        </p>
                                        <p>
                                            Communication Data: If you communicate with us or other users
                                            through Classia, we keep records of those communications.
                                        </p>
                                    </div>
                                    <div id="tab-2" className="list-content">
                                        <h3>We use the information we collect to:</h3>
                                        <p>Provide, maintain, and enhance our service.</p>
                                        <p>Process transactions and send related notifications.</p>
                                        <p>Respond to your queries and requests.</p>
                                        <p>
                                            Send promotional communications (from which you can opt-out).
                                        </p>
                                    </div>
                                    <div id="tab-3" className="list-content">
                                        <h3>
                                            We do not sell your personal data. However, we may share your
                                            information with:
                                        </h3>
                                        <p>
                                            Third-party providers: For functions such as payment processing,
                                            data analysis, email marketing, etc. These providers are
                                            prohibited from using your data for any other purpose. Law
                                            enforcement: We may disclose your data if we believe it's
                                            necessary to comply with a law, regulation, or legal request.
                                        </p>
                                    </div>
                                    <div id="tab-4" className="list-content">
                                        <h3>Your Rights</h3>
                                        <p>
                                            Access and Rectification: You can access, correct, or delete
                                            your personal information at any time from your account settings
                                            section.
                                        </p>
                                        <p>
                                            <strong>Objection:</strong> You have the right to object to the
                                            processing of your personal data under certain circumstances.
                                        </p>
                                        <p>
                                            <strong> Withdrawal:</strong> You can opt-out of receiving
                                            promotional communications by following the unsubscribe link in
                                            any email.
                                        </p>
                                    </div>
                                    <div id="tab-5" className="list-content">
                                        <h3>Security</h3>
                                        <p>
                                            We strive to protect your personal information using technical
                                            and organizational measures. While no system is 100% secure, we
                                            work diligently to ensure the protection of your data.
                                        </p>
                                    </div>
                                    <div id="tab-6" className="list-content">
                                        <h3>Changes to This Policy</h3>
                                        <p>
                                            From time to time, we may make changes to this Privacy Policy.
                                            If we make significant changes, we will notify you through our
                                            platform or by email.
                                        </p>
                                    </div>
                                    <div id="tab-7" className="list-content">
                                        <h3>Contact</h3>
                                        <p>
                                            If you have questions about this Privacy Policy, please contact
                                            us at <a href="mailto:info@classia.m">info@classia.me</a>
                                        </p>
                                        <p>
                                            By using Classia, you agree to the terms of this Privacy Policy.
                                            We thank you for trusting us with your education and your
                                            personal data.
                                        </p>
                                        <p>
                                            This is a simplified translation of the Privacy Policy. Always
                                            ensure that a real policy for your website meets the legal
                                            standards and regulations of your country or jurisdiction by
                                            consulting with a legal expert.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*[/Privacy Policy]*/}
                {/*[learning ]*/}
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
                {/*[/learning ]*/}
            </>

        </div>

    );
}

export default Privacy;