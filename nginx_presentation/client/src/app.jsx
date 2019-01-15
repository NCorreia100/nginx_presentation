import React from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-bootstrap';



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dog: null,
            cat: null,
            other: null           
        }        
    }
    getPictures() {
        fetch('/pics', {
            method: 'GET',
            mode: 'cors',
            headers: { 'content-type': 'application/json' }
        })
            .then(response => response.json())
            .then(({ dog, cat, other }) => this.setState({ dog, cat, other }))
            .catch(fetchingErr => console.log('FetchingError: ',fetchingErr))
    }
    componentDidMount() {
        this.getPictures();           
    }
    render() {
        if (this.state.dog === null) {
            return (<div><h1>Loading...</h1></div>)
        } else {
            return(                
            <Carousel> 
                <Carousel.Item>        
                    <img width={auto} height={500} alt="pic #1" src={this.state.dog} />                  
                    <Carousel.Caption>
                        <h3>A dog</h3>                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>                    
                        <img width={auto} height={500} alt="pic #2" src={this.state.cat} />                      
                    <Carousel.Caption>
                        <h3>A cat</h3>                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>                   
                   <img width={auto} height={500} alt="pic #3" src={this.state.other} />                   
                    <Carousel.Caption>
                        <h3>What pet is this?</h3>                        
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            )
        }
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

