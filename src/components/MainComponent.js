import React, {Component} from 'react';
import Header from './HeaderComponent.js';
import Footer from './FooterComponent.js';
import Home from './HomeComponent.js';
import Search from './SearchComponent.js';
import VideoPlay from './VideoPlayComponent.js';
import firebase from 'firebase';
import {Switch,Route,Redirect} from 'react-router-dom';
import {FESTS} from '../shared/fests';
import {VIDEOS} from '../shared/videos';


class Main extends Component {

constructor(props){
    super(props);
    this.state={
        fests: FESTS,
        videos: VIDEOS,
        isSignedIn: false,
        userEmail: "",
        userName: "Anonymous" 
    };
    this.changeSignIn=this.changeSignIn.bind(this);
}

changeSignIn(){
this.setState({isSignedIn: true});
}

componentDidMount(){
if(firebase.auth().currentUser!==null)
  {
    this.setState({      userEmail: firebase.auth().currentUser.email,
    userName: firebase.auth().currentUser.displayName
  });
  }
}

render(){
  const VideoWithId = ({match}) => {
    return(
      <VideoPlay video={this.state.videos.filter((video) => video.id === parseInt(match.params.videoId,10))[0]}
                  userEmail={this.state.userEmail}
                  userName={this.state.userName}
                  isSignedIn={this.state.isSignedIn}
      />
      );
  };

return ( 
      <div className="App">
      <Header changeSignIn={this.changeSignIn} isSignedIn={this.state.isSignedIn}/>
      <Switch location={this.props.location}>
                  <Route exact path='/home' component={() => <Home fests={this.state.fests} videos={this.state.videos} />} />
                  <Route path='/home/:videoId' component={VideoWithId} />
                  <Route exact path='/search' component={() => <Search fests={this.state.fests} videos={this.state.videos}/>}/>
                  <Redirect to="/home"/>
      </Switch>
    <Footer/>
      </div>
       );     
}
}
export default Main;