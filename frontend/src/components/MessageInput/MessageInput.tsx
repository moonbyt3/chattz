import './message-input.scss';

const MessageInput = () => {
	return (
		<form className='message-input'>
			<input
				type='text'
				placeholder='Send a message...'
			/>
			<button
				className='btn'
				type='submit'
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
				>
					<path
						fill='#080341'
						fill-rule='evenodd'
						d='M15 10.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-.82 4.74a6 6 0 1 1 1.06-1.06l4.79 4.79-1.06 1.06-4.79-4.79Z'
						clip-rule='evenodd'
					/>
				</svg>
			</button>
		</form>
	);
};

export default MessageInput;
