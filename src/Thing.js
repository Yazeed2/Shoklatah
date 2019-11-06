import React, { Component } from 'react'
import {Navbar,Form,FormControl,Button,Nav} from 'react-bootstrap'
import domtoimage from 'dom-to-image';
var urls = ''
export default class Thing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            text: '',
            on: '',
            url: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    handleChangetext(e) {
        this.setState({ text: e.target.value });
    }


    handleSubmit(event) {
        console.log('A name was submitted: ' + this.state.value);
        this.setState({ on: 'yup' });

        event.preventDefault();

        let previos = JSON.parse(window.localStorage.getItem('meme'))
        if(previos){
            console.log(previos);
            previos.push({img : this.props.image ,  text :this.state.value})
            window.localStorage.setItem('meme',JSON.stringify(previos))
        }else{
            window.localStorage.setItem('meme',JSON.stringify([]))
        }
        var node = document.getElementById('meme');
 
domtoimage.toPng(node)
    .then(function (dataUrl) {
        var img = new Image();
        urls = dataUrl

        img.src = dataUrl;
        console.log(urls);
        
        document.body.appendChild(img);

    })
    .catch(function (error) {
        console.error('oops, something went wrong!', error);
    });
 
    }

    render() {
        return (
            <div>
               
      

<form onSubmit={this.handleSubmit}>
    <Form inline>

      <FormControl value={this.state.value} onChange={this.handleChange}  type="text" placeholder="Text" expand='xl' 
    style={{'width':'90%', 'margin':'70px auto'}}

     />
      <Button  type="submit"  variant="outline-success" >Save!</Button>
    </Form>
    </form>


                <div id="meme" style={{ 'margin': '0 auto', 'width': "100%" , 'background-image': `url(${this.props.image})` , 'background-repeat': 'no-repeat'}} >
                {this.state.on === 'yup'? <h1 className='ttl'>{this.state.value}</h1>:''}
                 
                    <img src={this.props.image} style={{ 'width': '100%' }} />
                </div>

       <a href={urls} download="Meme.png">download mate :))))))))))))))))))))))))))</a> 
            </div>
        )
    }
}
//https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwifi6XEltLlAhWmx4UKHXCxBmoQjRx6BAgBEAQ&url=https%3A%2F%2Ftime.com%2Ftop-100-photos-of-2017%2F&psig=AOvVaw3kzGnxM9xaK8wXHpiX_s8H&ust=1573012531139118