import './message.scss';

const Message = () => {
	return (
		<div className='messages__item'>
			<div className='messages__item-img'>
				<img
					src='https://via.placeholder.com/50x50'
					alt=''
				/>
			</div>
			<div className='messages__item-text'>Hello what's up?</div>
		</div>
	);
};

export default Message;
