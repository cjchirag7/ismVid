import React, {Component} from 'react';
import {Card,CardBody, CardText, CardTitle} from 'reactstrap';

class VideoPlay extends Component{

    constructor(props){
        super(props);
        this.state={
          likes: 0  
        };
    }

    render(){
        return(
            <React.Fragment>
            <Card>
            <div className="video_Container"> <iframe src={this.props.video.src} width="100%" title={this.props.video.title} className="frame" height="100%" frameborder="0" scrolling="auto" allowfullscreen></iframe> </div>
            <CardBody>
            <div class="container">
            <CardTitle>{this.props.video.title}</CardTitle>
            <CardText>{this.props.video.description}</CardText>
            <br/>
            </div>
            </CardBody>
            </Card>
            </React.Fragment>
            );
    }
}

export default VideoPlay;