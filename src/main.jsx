import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Scratch from './components/Scratch.jsx';
import './css/output.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		{/* <App /> */}
		<Scratch></Scratch>
	</React.StrictMode>
);
