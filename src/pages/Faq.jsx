import React, { useEffect } from 'react';

function FAQ() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={'FAQ'}>

            <>
                <div
                    className="pages-header"
                    style={{ background: 'url("images/contact-banner.png")' }}
                >
                    <div className="container">
                        <div className="study">
                            <h4>FAQ</h4>
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
                <div className="FAQ-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="faq-title">
                                    <h2>GETTING STARTED</h2>
                                </div>
                                <div
                                    className="panel-group"
                                    id="accordion"
                                    role="tablist"
                                    aria-multiselectable="true"
                                >
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingOne">
                                            <h4 className="panel-title">
                                                <a
                                                    data-toggle="collapse"
                                                    data-parent="#accordion"
                                                    href="#collapseOne"
                                                    aria-expanded="true"
                                                    aria-controls="collapseOne"
                                                >
                                                    Are Classia programs applicable for all classes?
                                                </a>
                                            </h4>
                                        </div>
                                        <div
                                            id="collapseOne"
                                            className="panel-collapse collapse in"
                                            role="tabpanel"
                                            aria-labelledby="headingOne"
                                        >
                                            <div className="panel-body">
                                                BYJU’S learning programs are for students from LKG to Class
                                                12. We also offer programs for competitive exams like JEE,
                                                NEET, and IAS.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingTwo">
                                            <h4 className="panel-title">
                                                <a
                                                    className="collapsed"
                                                    data-toggle="collapse"
                                                    data-parent="#accordion"
                                                    href="#collapseTwo"
                                                    aria-expanded="false"
                                                    aria-controls="collapseTwo"
                                                >
                                                    How do I get started?
                                                </a>
                                            </h4>
                                        </div>
                                        <div
                                            id="collapseTwo"
                                            className="panel-collapse collapse"
                                            role="tabpanel"
                                            aria-labelledby="headingTwo"
                                        >
                                            <div className="panel-body">
                                                BYJU’S learning programs are for students from LKG to Class
                                                12. We also offer programs for competitive exams like JEE,
                                                NEET, and IAS.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingThree">
                                            <h4 className="panel-title">
                                                <a
                                                    className="collapsed"
                                                    data-toggle="collapse"
                                                    data-parent="#accordion"
                                                    href="#collapseThree"
                                                    aria-expanded="false"
                                                    aria-controls="collapseThree"
                                                >
                                                    Do all programs have live-doubt solving?
                                                </a>
                                            </h4>
                                        </div>
                                        <div
                                            id="collapseThree"
                                            className="panel-collapse collapse"
                                            role="tabpanel"
                                            aria-labelledby="headingThree"
                                        >
                                            <div className="panel-body">
                                                BYJU’S learning programs are for students from LKG to Class
                                                12. We also offer programs for competitive exams like JEE,
                                                NEET, and IAS.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingThree">
                                            <h4 className="panel-title">
                                                <a
                                                    className="collapsed"
                                                    data-toggle="collapse"
                                                    data-parent="#accordion"
                                                    href="#collapsefour"
                                                    aria-expanded="false"
                                                    aria-controls="collapsefour"
                                                >
                                                    What is a free demo class and how do I register for it?
                                                </a>
                                            </h4>
                                        </div>
                                        <div
                                            id="collapsefour"
                                            className="panel-collapse collapse"
                                            role="tabpanel"
                                            aria-labelledby="headingThree"
                                        >
                                            <div className="panel-body">
                                                BYJU’S learning programs are for students from LKG to Class
                                                12. We also offer programs for competitive exams like JEE,
                                                NEET, and IAS.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingThree">
                                            <h4 className="panel-title">
                                                <a
                                                    className="collapsed"
                                                    data-toggle="collapse"
                                                    data-parent="#accordion"
                                                    href="#collapsefive"
                                                    aria-expanded="false"
                                                    aria-controls="collapsefive"
                                                >
                                                    Are the demo classes free?
                                                </a>
                                            </h4>
                                        </div>
                                        <div
                                            id="collapsefive"
                                            className="panel-collapse collapse"
                                            role="tabpanel"
                                            aria-labelledby="headingThree"
                                        >
                                            <div className="panel-body">
                                                BYJU’S learning programs are for students from LKG to Class
                                                12. We also offer programs for competitive exams like JEE,
                                                NEET, and IAS.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingThree">
                                            <h4 className="panel-title">
                                                <a
                                                    className="collapsed"
                                                    data-toggle="collapse"
                                                    data-parent="#accordion"
                                                    href="#collapsesix"
                                                    aria-expanded="false"
                                                    aria-controls="collapsesix"
                                                >
                                                    Are Classia programs mapped to the school
                                                    syllabus/curriculum?
                                                </a>
                                            </h4>
                                        </div>
                                        <div
                                            id="collapsesix"
                                            className="panel-collapse collapse"
                                            role="tabpanel"
                                            aria-labelledby="headingThree"
                                        >
                                            <div className="panel-body">
                                                BYJU’S learning programs are for students from LKG to Class
                                                12. We also offer programs for competitive exams like JEE,
                                                NEET, and IAS.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingThree">
                                            <h4 className="panel-title">
                                                <a
                                                    className="collapsed"
                                                    data-toggle="collapse"
                                                    data-parent="#accordion"
                                                    href="#collapseSeven"
                                                    aria-expanded="false"
                                                    aria-controls="collapseSeven"
                                                >
                                                    What is the difference between Classia Teacher and BYJU’S
                                                    Mentor?
                                                </a>
                                            </h4>
                                        </div>
                                        <div
                                            id="collapseSeven"
                                            className="panel-collapse collapse"
                                            role="tabpanel"
                                            aria-labelledby="headingThree"
                                        >
                                            <div className="panel-body">
                                                BYJU’S learning programs are for students from LKG to Class
                                                12. We also offer programs for competitive exams like JEE,
                                                NEET, and IAS.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="faq-title second">
                                    <h2>SUBSCRIPTION AND BILLING</h2>
                                </div>
                                <div
                                    className="panel-group"
                                    id="accordion"
                                    role="tablist"
                                    aria-multiselectable="true"
                                >
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingOne">
                                            <h4 className="panel-title">
                                                <a
                                                    data-toggle="collapse"
                                                    data-parent="#accordion"
                                                    href="#collapse1"
                                                    aria-controls="collapseOne"
                                                >
                                                    Is the app available for free?
                                                </a>
                                            </h4>
                                        </div>
                                        <div
                                            id="collapse1"
                                            className="panel-collapse collapse in"
                                            role="tabpanel"
                                            aria-labelledby="headingOne"
                                        >
                                            <div className="panel-body">
                                                BYJU’S learning programs are for students from LKG to Class
                                                12. We also offer programs for competitive exams like JEE,
                                                NEET, and IAS.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="heading2">
                                            <h4 className="panel-title">
                                                <a
                                                    className="collapsed"
                                                    data-toggle="collapse"
                                                    data-parent="#accordion"
                                                    href="#collapse2"
                                                    aria-expanded="false"
                                                    aria-controls="collapseTwo"
                                                >
                                                    When do I start getting charged?
                                                </a>
                                            </h4>
                                        </div>
                                        <div
                                            id="collapse2"
                                            className="panel-collapse collapse"
                                            role="tabpanel"
                                            aria-labelledby="headingTwo"
                                        >
                                            <div className="panel-body">
                                                BYJU’S learning programs are for students from LKG to Class
                                                12. We also offer programs for competitive exams like JEE,
                                                NEET, and IAS.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="heading3">
                                            <h4 className="panel-title">
                                                <a
                                                    className="collapsed"
                                                    data-toggle="collapse"
                                                    data-parent="#accordion"
                                                    href="#collapse3"
                                                    aria-expanded="false"
                                                    aria-controls="collapseThree"
                                                >
                                                    Can the subscription be cancelled?
                                                </a>
                                            </h4>
                                        </div>
                                        <div
                                            id="collapse3"
                                            className="panel-collapse collapse"
                                            role="tabpanel"
                                            aria-labelledby="headingThree"
                                        >
                                            <div className="panel-body">
                                                BYJU’S learning programs are for students from LKG to Class
                                                12. We also offer programs for competitive exams like JEE,
                                                NEET, and IAS.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingThree">
                                            <h4 className="panel-title">
                                                <a
                                                    className="collapsed"
                                                    data-toggle="collapse"
                                                    data-parent="#accordion"
                                                    href="#collapse4"
                                                    aria-expanded="false"
                                                    aria-controls="collapsefour"
                                                >
                                                    What is the cost of subscribing to Classia programs?
                                                </a>
                                            </h4>
                                        </div>
                                        <div
                                            id="collapse4"
                                            className="panel-collapse collapse"
                                            role="tabpanel"
                                            aria-labelledby="headingThree"
                                        >
                                            <div className="panel-body">
                                                BYJU’S learning programs are for students from LKG to Class
                                                12. We also offer programs for competitive exams like JEE,
                                                NEET, and IAS.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingThree">
                                            <h4 className="panel-title">
                                                <a
                                                    className="collapsed"
                                                    data-toggle="collapse"
                                                    data-parent="#accordion"
                                                    href="#collapse5"
                                                    aria-expanded="false"
                                                    aria-controls="collapsefive"
                                                >
                                                    How many profiles can I add on the Disney. Classia Early
                                                    Learn App?
                                                </a>
                                            </h4>
                                        </div>
                                        <div
                                            id="collapse5"
                                            className="panel-collapse collapse"
                                            role="tabpanel"
                                            aria-labelledby="headingThree"
                                        >
                                            <div className="panel-body">
                                                BYJU’S learning programs are for students from LKG to Class
                                                12. We also offer programs for competitive exams like JEE,
                                                NEET, and IAS.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="faq-title second">
                                    <h2>SUBSCRIPTION AND BILLING</h2>
                                </div>
                                <div
                                    className="panel-group"
                                    id="accordion"
                                    role="tablist"
                                    aria-multiselectable="true"
                                >
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingFirst">
                                            <h4 className="panel-title">
                                                <a
                                                    data-toggle="collapse"
                                                    data-parent="#accordion"
                                                    href="#collapseFirst"
                                                    aria-expanded="true"
                                                    aria-controls="collapseOne"
                                                >
                                                    Are Classia programs applicable for all classes?
                                                </a>
                                            </h4>
                                        </div>
                                        <div
                                            id="collapseFirst"
                                            className="panel-collapse collapse in"
                                            role="tabpanel"
                                            aria-labelledby="headingOne"
                                        >
                                            <div className="panel-body">
                                                BYJU’S learning programs are for students from LKG to Class
                                                12. We also offer programs for competitive exams like JEE,
                                                NEET, and IAS.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingTwo">
                                            <h4 className="panel-title">
                                                <a
                                                    className="collapsed"
                                                    data-toggle="collapse"
                                                    data-parent="#accordion"
                                                    href="#collapseSecond"
                                                    aria-expanded="false"
                                                    aria-controls="collapseTwo"
                                                >
                                                    How do I get started?
                                                </a>
                                            </h4>
                                        </div>
                                        <div
                                            id="collapseSecond"
                                            className="panel-collapse collapse"
                                            role="tabpanel"
                                            aria-labelledby="headingTwo"
                                        >
                                            <div className="panel-body">
                                                BYJU’S learning programs are for students from LKG to Class
                                                12. We also offer programs for competitive exams like JEE,
                                                NEET, and IAS.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingThird">
                                            <h4 className="panel-title">
                                                <a
                                                    className="collapsed"
                                                    data-toggle="collapse"
                                                    data-parent="#accordion"
                                                    href="#collapseThird"
                                                    aria-expanded="false"
                                                    aria-controls="collapseThree"
                                                >
                                                    Do all programs have live-doubt solving?
                                                </a>
                                            </h4>
                                        </div>
                                        <div
                                            id="collapseThird"
                                            className="panel-collapse collapse"
                                            role="tabpanel"
                                            aria-labelledby="headingThree"
                                        >
                                            <div className="panel-body">
                                                BYJU’S learning programs are for students from LKG to Class
                                                12. We also offer programs for competitive exams like JEE,
                                                NEET, and IAS.
                                            </div>
                                        </div>
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
    );
}

export default FAQ;