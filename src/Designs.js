import React, { Component } from 'react'
import YourMeme from './YourMeme'
import NewThing from './NewThing'

export default class Designs extends Component {
    state={
        data: [],
        edit:null
    }
    componentDidMount(){
        let previos = JSON.parse(window.localStorage.getItem('meme'))
        this.setState({
            data: previos
        })
    }
    openMeme=(item)=>{
        this.setState({
            edit: item
        })
        console.log(item);
        
    }
    render() {
        return (
            <div>
                {this.state.edit === null?
                  <h1 className='title'>Your Designs</h1>: ''}
                  {this.state.edit === null? <div className="grid">
                {this.state.data.map(item=> <YourMeme data={item} openMeme={this.openMeme}/>

                )}
              
                </div> : ''
                }
                       {this.state.edit !== null?
                <NewThing data={this.state.edit}/>
                :''}
            </div>
        )
    }
}
