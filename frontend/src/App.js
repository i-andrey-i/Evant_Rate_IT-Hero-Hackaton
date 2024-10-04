import './App.css'
import Log_in from './components/Autorization/Log_in';
import Events from './components/MainPage/All_Events/Events';
import ComandAdd from './components/MainPage/comp/ComandAdd';
import EventPage from './components/MainPage/comp/EventPage';
import QrCodePage from './components/MainPage/comp/QrCodePage';
import RatingPage from './components/MainPage/comp/RatingPage';
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
					<Route className="no-underline" path='/main_page/:id' element={<EventPage/>}/>
					<Route path='/main_page/qr-code/:id' element={<QrCodePage/>} />
					<Route path='/main_page/raiting/:id' element={<RatingPage/>}/>
					<Route path='/main_page/commandad/:id' element={<ComandAdd/>}/>
				</Routes>
			</Router>
		</div>
	)
}

export default App;
