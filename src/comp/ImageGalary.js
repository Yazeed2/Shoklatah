import React, { Component } from 'react'
import axios from 'axios'
import Photos from './Photos'
import { Row, Col } from 'react-bootstrap'

export default class ImageGalary extends Component {
    state={
        data : []
    }
componentDidMount(){
//   axios.get('https://cors-anywhere.herokuapp.com/https://cuenets.com/data.json')
//   .then(resp => {
//       console.log(resp);
//       this.setState({
//         data: resp.data.arr
//     })
      
//   })
  axios.get('https://api.unsplash.com/photos/?client_id=08645e293249c4339da240774a54c4c2a8b0e428368a3428c4fee2905f92a9da')
  .then(resp=>{
    console.log(resp);
    this.setState({
        data: resp.data
    })
    
  
  })
}

    render() {
        return (
            <div style={{'margin':'0 auto', 'width': '80%'}}>
  <h1 className='title'>Choose a Picture to start</h1>
  
  <Row>
                {this.state.data.map(item=><Photos data={item} chooseImg={this.props.chooseImg}/>)}
                </Row>
            </div>
        )
    }
}
