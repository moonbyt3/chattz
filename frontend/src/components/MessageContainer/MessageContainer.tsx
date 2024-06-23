import MessageInput from '../MessageInput/MessageInput';
import Messages from '../Messages/Messages';
import './message-container.scss';

const MessageContainer = () => {
	const noChatSelected = true;
	return (
		<div className='message-container'>
			{noChatSelected ? (
				<NoChatSelected />
			) : (
				<>
					<div className='message-container__header'>
						<span className='message-container__header-label'>
							To:{' '}
						</span>
						<span className='message-container__header-user'>
							John Doe
						</span>
					</div>
					<Messages />
					<MessageInput />
				</>
			)}
		</div>
	);
};

const NoChatSelected = () => {
	return (
		<div className='no-chat-selected'>
			<div className='no-chat-selected__wrapper'>
				<p>Welcome John Doe</p>
				<p>Select a chat to start messaging</p>
			</div>
		</div>
	);
};

export default MessageContainer;
