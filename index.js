import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
// import * as serviceWorker from './serviceWorker';

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

// const App =()=>{
    
//     return 
//     <div>
//        <div id="button">
// 			<button onclick="reset()">Reset</button>
// 		</div>
// 		<div id="counter">integer</div>
// 		<div id="container">
// 			<div id="rect"></div>
// 		</div>
//         </div>
// }

function App() {
    return (
    <div>
        <div id="button">
			<button onclick="reset()">Reset</button>
		</div>
	    <div id="counter">integer</div>
		<div id="container">
			<div id="rect"></div>
            green
		</div> 
            
    </div>
    )
}

ReactDOM.render(<App />, document.getElementById('app'));

// export default App;