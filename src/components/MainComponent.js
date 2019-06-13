import React, {Component} from 'react';
import Header from './HeaderComponent.js';
import Footer from './FooterComponent.js';
import Home from './HomeComponent.js';
import Search from './SearchComponent.js';
import VideoPlay from './VideoPlayComponent.js';
import {Switch,Route,Redirect} from 'react-router-dom';
import {FESTS} from '../shared/fests';
import {VIDEOS} from '../shared/videos';

class Main extends Component {

constructor(props){
    super(props);
    this.state={
        fests: FESTS,
        videos: VIDEOS
    };
}

render(){
  const VideoWithId = ({match}) => {
    return(
      <VideoPlay video={this.state.videos.filter((video) => video.id === parseInt(match.params.videoId,10))[0]}
      />
      );
  };

return ( 
      <div className="App">
      <Header/>
      <Switch location={this.props.location}>
                  <Route exact path='/home' component={() => <Home fests={this.state.fests} videos={this.state.videos} />} />
                  <Route path='/home/:videoId' component={VideoWithId} />
                  <Route exact path='/search' component={() => <Search/>}/>
                  <Redirect to="/home"/>
      </Switch>
    <Footer/>
      </div>
       );     
}
}
export default Main;