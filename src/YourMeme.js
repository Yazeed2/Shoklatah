import React, { Component } from 'react'

export default class YourMeme extends Component {
    render() {
        return (
            <div>
                   <div id="meme" onClick={()=>this.props.openMeme(this.props.data)} style={{ 'margin': '0 auto', 'width': "100%" , 'background-image': `url(${this.props.data.img})` , 'background-repeat': 'no-repeat'}} >
              <h3 className='ttl'>{this.props.data.text}</h3>
                 
                    <img src={this.props.data.img} style={{ 'width': '100%' }} />
                </div>
            </div>
        )
    }
}
