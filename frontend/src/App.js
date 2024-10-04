import './App.css'
import Log_in from './components/Autorization/Log_in';
import Events from './components/MainPage/All_Events/Events';
import MainPage from './components/MainPage/MainPage';
import My_Events from './components/MainPage/My_events/My_Events';
import Navigation from './components/MainPage/Navigation/Navigation';
import Registration from './components/Registration/Registration';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
		<div className='App'>
			<Router>
				<Routes>
					<Route path='/main_page' element={<MainPage/>}/>
					<Route path='/'element={<Log_in/>}/>
					<Route path='/regist' element={<Registration/>} />
				</Routes>
			</Router>
		</div>
	)
}

export default App;
