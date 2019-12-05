import React, { Component } from 'react'
import './index.css';

// terminal to start front-end: nwb react run index.js
const size_rect = 50
const size_container= 800

const containerStyle={
    width: `${size_container}px`,
    height: `${size_container}px`
}

// const socket = new WebSocket()
// const url = 

export default class App extends Component {
    state={
        counter:0,
        }

    //TODO connet with webscket, send meesgae to websoket.
    //TODO 
    componentDidMount(){
            
        const socket = new WebSocket("ws://localhost:8765/")
        socket.onopen = function (e){
            alert ("Connection Established")
            console.log("Connection Established")
        }

        socket.onmessage = e =>{
            // console.log (e.data)
            this.setState({counter:e.data})
            this.rectPosition()
        }
        socket.onclose = e =>{
            console.log("Disconnecting")
        }
        this.my_socket = socket;
    }


    // rectPosition=()=>{
    //    const {counter} = this.state;
    //    const col = Math.floor ( size_container / size_rect);
    //    console.log("size rect", size_rect);
    //    console.log("this state", this.state);
    //    const y = counter % ( col * col);
    //    console.log("y is", y);
    //    const i = Math.floor(y / col);
    //    const j = y%col;
    //    console.log("size_rect", size_rect, "i", i, "j", j);
    //    return {
    //     width: `${size_rect}px`,
    //     height:`${size_rect}px`,
    //     top:  `${size_rect}`* i,
    //     left: 750 -`${size_rect}`*j
    //    }
       
    // }

// Sony's Version
    // rectPosition=()=>{
    //     const {counter} = this.state;
    //     const col = Math.floor ( size_container / size_rect);
    //     console.log("this state", this.state, "size rect", size_rect);
    //     const y = counter % ( col * col);
    //     const i = Math.floor(y / col);
    //     const j = y%col;
    //     console.log("y", y, "col", col, "i", i, "j", j);
    //     return {
    //      width: `${size_rect}px`,
    //      height:`${size_rect}px`,
    //      top:  `${size_rect}`* i,
    //     }
        
    //  }
    
    // rectPosition=()=>{
    //      //number of rows
    //      // satCordinat x = 0
    //      // end COrdinat x = m -1    //m is 
    //      // while x < n-1, keep looping until
    //      // if x = n-1 then enter 
    //      //   while y >= 0 {y-1 y--}
     
    //     let n = Math.floor ( size_container / size_rect);
    //     console.log("n", n);
    //     console.log("size rect", size_rect);
    //     let startRow = 0; // 
    //     let endRow = n - 1 ;
    //     let startCol = 750;
    //     let endCol = 0;
    //     let i = 0;
    //     while(i < endRow){
    //         // console.log ('whileloop')
    //         console.log("my current i is", i);
    //         i++;
    //         // the problem is once you return, you return to the oringal rectpositon function.
    //         return {
    //         top:  `${i}px`
    //        }
    //     }
    // }
    // rectPosition=()=>{
    //     let n = 3
    //     let i = 0
    //     // let j = 2
    //     var j
            
    //     for (i==0; i<n-1;i++){
    //         console.log("movingdown",i, j)   
    //     }
        
    //     for (j=2; j>=0;j--){
    //         console.log("movingleft",i, j)
    //     }    
     rectPosition=()=>{
         const {counter} = this.state;
         const col = Math.floor( size_container/size_rect)
         const y = counter % (4* (col -1));
         const side = Math.floor( y/ col-1);
         const start = [
             [0,col-1] // 0 side 
             [col-1,col-1] // 1 side
             [col-1 ,0] // 2 side
             [0,0] // 3rd side
         ][side]
         const sign = [ 1,-1, -1,1][side]
         const d = y % (col-1)
         start[]

     }

    handleReset=()=>{
        this.setState({counter:0});
        console.log("set counter to 0");
        this.my_socket.send(0);
      }


    render() {
        const {counter}=this.state;
        return (
        <div>
            <div id="button">
			    <button onClick={this.handleReset}>Reset</button>
		    </div>
            <div id="counter"></div>
	            <div id="counter">{counter}</div>
		    <div id="container" style={containerStyle}>
			    <div id="rect" style={this.rectPosition()}></div>
            </div>
        </div>
        )
    }
}



// export default App;