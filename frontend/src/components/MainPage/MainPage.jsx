import Events from "./All_Events/Events"
import My_Events from "./My_events/My_Events"
import Navigation from "./Navigation/Navigation"

function MainPage(){
    return (
			<div>
				<Navigation />
				<Events />
				<My_Events />
			</div>
		)
}

export default MainPage