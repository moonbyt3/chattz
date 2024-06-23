import Avatar from '../Avatar/Avatar';
import './conversation.scss';

const Conversation = () => {
	return (
		<>
			<div className='conversations__item'>
				<Avatar />
				<p className='conversations__item-text'>John Doe</p>
			</div>
		</>
	);
};

export default Conversation;
