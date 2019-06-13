import React,{Component} from 'react';
import {Input,InputGroup,InputGroupAddon, InputGroupText} from 'reactstrap';

class Search extends Component {
    constructor(props){
    super(props);
    this.state={
        keyword: ''
    };
    this.changeInput=this.changeInput.bind(this);
    }
    changeInput(e) {
        let val=e.target.value;
        this.setState({keyword: val });
    }
    render(){
        return(
        <div className="container">
        <div className="row">
        <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Enter something about the video : </InputGroupText>
        </InputGroupAddon>
        <Input value={this.state.keyword} onChange={this.changeInput} />
      </InputGroup>
      </div>
      <div>
          <h2> Search Results </h2>
      </div>
      </div>
        );
     }
}

export default Search;