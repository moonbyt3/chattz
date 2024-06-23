import './sidebar.scss';

import SearchInput from '../SearchInput/SearchInput';
import Conversations from '../Conversations/Conversations';
import LogoutButton from '../LogoutButton/LogoutButton';
const Sidebar = () => {
	return (
		<div className='sidebar'>
			<SearchInput />
			<Conversations />
			<LogoutButton />
		</div>
	);
};

export default Sidebar;
