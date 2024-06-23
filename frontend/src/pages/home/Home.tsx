import MessageContainer from '../../components/MessageContainer/MessageContainer';
import Sidebar from '../../components/Sidebar/Sidebar';

import './home.scss';

const Home = () => {
	return (
		<div className='home'>
			<div className='container'>
				<div className='row'>
					<Sidebar />
					<MessageContainer />
				</div>
			</div>
		</div>
	);
};

export default Home;
