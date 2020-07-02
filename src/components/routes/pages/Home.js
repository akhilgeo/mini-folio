import React from 'react'
import Typist from "react-typist";
import  ReactDOM  from  'react-dom';
import {SocialMediaIconsReact} from 'social-media-icons-react';
import {FirstName, tagline} from '../customize.json'

class Home extends React.Component {
    render() {
        return (
            <div>
                <div
                    id="home"
                    className="title jumbotron jumbotron-fluid bgstyle text-dark min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
                >
                    <div id="stars"></div>
                    <div className="container container-fluid text-center ">
                        <h1 className="display-2">
                            {"Hello There! I'm "}{FirstName}
                        </h1>
                        <Typist className="lead"> {tagline}</Typist>

                        <br/>
                        <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="2" borderStyle="solid" icon="github" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(28,186,223,1)" iconSize="3" roundness="20%" url="https://some-website.com/my-social-media-url" size="40" />
                        &nbsp;
                        <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="2" borderStyle="solid" icon="facebook" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(28,186,223,1)" iconSize="3" roundness="20%" url="https://some-website.com/my-social-media-url" size="40" />
                        &nbsp;
                        <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="2" borderStyle="solid" icon="youtube" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(28,186,223,1)" iconSize="3" roundness="20%" url="https://some-website.com/my-social-media-url" size="40" />
                        &nbsp;
                        <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="2" borderStyle="solid" icon="linkedin" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(28,186,223,1)" iconSize="3" roundness="20%" url="https://some-website.com/my-social-media-url" size="40" />
                        &nbsp;
                        <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="2" borderStyle="solid" icon="twitter" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(28,186,223,1)" iconSize="3" roundness="20%" url="https://some-website.com/my-social-media-url" size="40" />
                    </div>
                </div>
            </div>

        )
    }

}
export default Home