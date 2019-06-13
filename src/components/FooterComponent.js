import React from 'react';
import {Button} from 'reactstrap';

function Footer(props) {
    return(
    <div className="footer mt-3">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                    <h4>ismVid</h4>
                    <h5> The Official Video Streaming website of IIT (ISM)</h5>
                </div>
                <div className="col-7 col-sm-5 align-self-center">
                <div className="text-center ">
                <Button color="primary" size="md" active>Suggest a video</Button>
                </div>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                    <Button color="warning" size="md" active>Give Feedback</Button>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2019 Chirag Jain</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;
