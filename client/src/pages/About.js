
import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';


class About extends Component {

    render() {
        console.log(process.env.REACT_APP_SECRET_CODE);
        return (

            // <!-- Start Our Team
            <section className="team" id="team">
                <div className="container">
                    {/* <!-- section title --> */}
                    <div className="title text-center">
                        <h2>About Our Project</h2>
                        <p>The idea is to create a website for ecommerce sellers to find out the current product price and figure out whether it would be a profitable idea to sell that specific product after taking into consideration the shipping cost and wholesale price. E-zdig is a platform to help beginner and experienced ecommerce companies and individuals to discover the right product. You can save time by locating goods and calculating profits in one place. </p>
                        <div className="border"></div>
                        <h4>Contributors</h4>
                    </div>

                    {/* <!-- /section title --> */}
                    <div className="row">
                        {/* <!-- team member --> */}
                        <div className="col-md-4 col-sm-6 " >
                            <div className="team-member text-center">
                                <div className="member-photo">
                                    {/* <!-- member photo --> */}
                                    <img className="img-responsive" src="../images/john.jpg" alt="john" />
                                </div>

                                {/* <!-- member name & designation --> */}
                                <div className="member-content">
                                    <h5>Can Atay</h5>
                                    <span>Web Developer</span>
                                    <p><a class="text-black" target="_blank" href="https://github.com/canjohn1905"><i class="fab fa-github-square"></i>
                                        Can Atay Github </a></p>
                                </div>
                                {/* <!-- /member name & designation --> */}

                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6 " >
                            <div className="team-member text-center">
                                <div className="member-photo">
                                    {/* <!-- member photo --> */}
                                    <img className="img-responsive" src="../images/irving.jpg" alt="irving" />
                                    {/* <!-- /member photo --> */}
                                    {/* <!-- /member social profile --> */}
                                </div>

                                {/* <!-- member name & designation --> */}
                                <div className="member-content">
                                    <h5>Irving Aramburo</h5>
                                    <span>Web Developer</span>
                                    <p><a class="text-black" target="_blank" href="https://github.com/vinirg22"><i class="fab fa-github-square"></i> Irving

                                    Aramburo Github</a></p>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 " >
                            <div className="team-member text-center">
                                <div className="member-photo">
                                    {/* <!-- member photo --> */}
                                    <img className="img-responsive" src="../images/damian.jpg" alt="irving" />
                                    {/* <!-- /member photo --> */}
                                    {/* <!-- /member social profile --> */}
                                </div>

                                {/* <!-- member name & designation --> */}
                                <div className="member-content">
                                    <h5>Damian Sanchez</h5>
                                    <span>Web Developer</span>
                                    <p><a class="text-black" target="_blank" href="https://github.com/xxdamianxx"><i class="fab fa-github-square"></i>

                                        Damian Sanchez</a></p>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 ">
                            <div className="team-member text-center">
                                <div className="member-photo">
                                    {/* <!-- member photo --> */}
                                    <img className="img-responsive" src="../images/jack.jpg" alt="jack" />
                                    {/* <!-- /member photo --> */}
                                </div>

                                {/* <!-- member name & designation --> */}
                                <div className="member-content">
                                    <h5>Kanwee Kiatnikorn</h5>
                                    <span>Web Developer</span>
                                    <p><a class="text-black" target="_blank" href="https://github.com/kkiathub"><i class="fab fa-github-square"></i>

                                        Kanwee Kiatnikorn</a></p>
                                </div>
                                {/* <!-- /member name & designation --> */}

                            </div>
                        </div>
                        {/* <!-- end team member --> */}
                    </div>
                </div>
            </section>

        );
    }
}

export default About;

