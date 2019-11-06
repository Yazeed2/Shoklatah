import React, { Component } from 'react'
import {Card} from 'react-bootstrap'

export default class Photos extends Component {
    render() {
        return (
            <div>
            <Card style={{ width: '18rem' }}>
  <Card.Img  sm={12} src={this.props.data.urls.regular} onClick={()=>this.props.chooseImg(this.props.data.urls.regular)}/>
 
</Card>
            </div>
        )
    }
}
