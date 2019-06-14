import React,{Component} from 'react';
import {Input,InputGroup,InputGroupAddon, InputGroupText, ListGroup, ListGroupItem, Badge } from 'reactstrap';

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
        <br/>
        <div className="row">
        <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Enter something about the video : </InputGroupText>
        </InputGroupAddon>
        <Input value={this.state.keyword} onChange={this.changeInput} />
      </InputGroup>
      </div>
      <br/>
      <div>
      <ListGroup>
        <ListGroupItem tag="a" href="#">Cras justo odio <Badge color="info">Info</Badge></ListGroupItem>
        <ListGroupItem tag="a" href="#">Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem tag="a" href="#">Morbi leo risus</ListGroupItem>
        <ListGroupItem tag="a" href="#">Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem tag="a" href="#">Vestibulum at eros</ListGroupItem>
      </ListGroup>
      </div>
      </div>
        );
     }
}

export default Search;