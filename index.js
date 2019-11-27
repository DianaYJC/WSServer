import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// terminal to start front-end: nwb react run index.js

const url = 'ws://localhost:8765/';
let socket = new WebSocket(url);


function App() {
    socket.onopen = function(e) {
        alert("Sending to server");
        socket.send("10");
      };

      socket.onmessage = function(e) {
        // const xCor = 50 - e.data % 50
        const counter = e.data % 800 
        console.log(e.data)
        moveDown(counter)
      }

      const handleReset =(e)=>{
        const rect = document.getElementById("rect")
        console.log('reset')
        const top = rect.style.top= 0+"px"
        rect.style.left= 750+"px"
        console.log(top)
        // moveDown(x,y)

    }

    const moveDown =( counter)=>{

        const rect = document.getElementById("rect")
        rect.style.top= counter+ "px"
        // console.log ("moveDown:" + counter)
    }


    return (
    <div>
        <div id="button">
			<button onClick={handleReset}>Reset</button>
		</div>
	    <div id="counter">integer</div>
		<div id="container">
			<div id="rect" ></div>
            <div id="red" ></div>


		</div>

    </div>
    )
}

ReactDOM.render(<App />, document.getElementById('app'));

// export default App;