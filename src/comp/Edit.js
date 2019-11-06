import React, { Component } from 'react'
import Thing from '../Thing'

export default class Edit extends Component {
    render() {
        return (
            <div>
                <h1 className='title'>Type your text here :)</h1>
                
                <Thing image ={this.props.image}/>
            </div>
        )
    }
}
