import React,{Component,PropTypes} from 'react';
import Map from './Map';
import request from './request';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      currentQuakes:[]
    }
    setInterval(()=>{this.getNewQuakeData();},5000);
  }
  async getNewQuakeData(){
    let {currentQuakes} = await request('./data/newQuakeData.json');
    currentQuakes= currentQuakes.filter(()=>{
        if(Math.floor(Math.random() * 2) === 0){
          return true;
        }
        return false;
      })
    this.setState({currentQuakes});
  }
  render(){
    return (
      <div>
        <Map {...this.props} currentQuakes={this.state.currentQuakes}/>
      </div>);
  }
}

App.propTypes={
  indiaTopoJSON:PropTypes.object,
  earthquakeZones:PropTypes.object,
}
export default App;
