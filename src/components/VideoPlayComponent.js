import React, {Component} from 'react';
import {Card,CardBody, CardText, CardTitle, Button} from 'reactstrap';
import RenderComments from './CommentComponent'
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
            <div className="row">
            <div className="mr-auto">
            <Button color="primary"><i class="fa fa-thumbs-up"></i> 33</Button>
            &nbsp;&nbsp;<Button color="success"><i class="fa fa-pencil"></i>Comment</Button>
            </div>
         <div className="ml-auto mt-2 a2a_kit a2a_kit_size_32 a2a_default_style">
            <a className="a2a_dd" href="https://www.addtoany.com/share">.</a>
            <a className="a2a_button_email"></a>
            <a className="a2a_button_linkedin"></a>
            <a className="a2a_button_whatsapp"></a>
            <a className="a2a_button_google_gmail"></a>
            <a className="a2a_button_facebook"></a>
            <a className="a2a_button_twitter"></a>
        </div>
        </div>
            </div>
            <RenderComments videoId={this.props.video.id}/>
            </CardBody>
            </Card>
            </React.Fragment>
            );
    }
}

export default VideoPlay;