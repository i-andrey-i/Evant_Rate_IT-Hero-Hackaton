import './App.css'
import Log_in from './components/Autorization/Log_in';
import Events from './components/MainPage/All_Events/Events';
import My_Events from './components/MainPage/My_events/My_Events';
import Navigation from './components/MainPage/Navigation/Navigation';
import Registration from './components/Registration/Registration';

function App() {
  return (
		<div className='App'>
			{/* <Navigation /> */}
      		{/* <Events/> */}
			{/* <My_Events/> */}
			{/* <Log_in/> */}
			<Registration/>
		</div>
	)
}

export default App;
