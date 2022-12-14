import React from 'react';

// const clickHanler = e =>{
//     console.log('event', e)
// }

export class ClickButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {isToggleOn: true};
    }
    handleClick (){
        this.setState(state =>({
            isToggleOn: !state.isToggleOn
        }));
    }
   
    componentDidMount(){
        this.newComponent = setInterval(()=>
            <p>Hello world</p>,
            alert('Component was closed')
        )
    }
    componentWillUnmount(){
        clearInterval(this.newComponent)
        alert('component was opened')
    }
    render(){
        return(
           
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'Press ME' : 'Close ME'}</button>
         
        );
    }
}
