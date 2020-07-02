import React from 'react'



class About extends React.Component {
    render() {
        return (
            <div id="aboutme" className="jumbotron jumbotron-fluid m-0 min-vh-100">
                <div className="container container-fluid p-5">
                    <div className="row">

                        <div className={`col-lg-`}>
                            <h3 className="display-3 mb-3 text-center">{"About"}</h3>
                            <p className="lead text-center">{"About me"}</p>
                            <br />
                            
                                
                                
                                <br></br>
                                <p>I started my journey in the world of computers from an young age,
                                now I’m 20 years old, Pursuing my Software Engineering Degree in
                                VIT University Vellore.  Web development is my center of interest, i always
                                love the idea of cross-platform development, 1-n one code base deploy into almost
                                any platform, which web technology like Javascript enables me to do. I also like
                                creating Interactive UI components for better UX  and share those desgin and codes
                                to the world through Github, Codepen and Instagram.
            </p>

                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default About