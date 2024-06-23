import './signup.scss';

const SignUp = () => {
	return (
		<div className='signup'>
			<form action=''>
				<div className='form-row__item'>
					<label htmlFor='fullname'>Full Name</label>
					<input
						type='text'
						name='fullname'
						id='fullname'
					/>
				</div>
				<div className='form-row__item'>
					<label htmlFor='username'>Username</label>
					<input
						type='text'
						name='username'
						id='username'
					/>
				</div>
				<div className='form-row__item'>
					Gender
					<div className='form-row__item-radio'>
						<div className='form-row__item-radio-item'>
							<input
								type='radio'
								id='male'
								name='gender'
								value='Male'
							/>
							<label htmlFor='male'>Male</label>
						</div>
						<div className='form-row__item-radio-item'>
							<input
								type='radio'
								id='female'
								name='gender'
								value='Female'
							/>
							<label htmlFor='female'>Female</label>
						</div>
					</div>
				</div>
				<div className='form-row__item'>
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						name='password'
						id='password'
					/>
				</div>
				<div className='form-row__item'>
					<label htmlFor='confirm-password'>Confirm Password</label>
					<input
						type='password'
						name='confirm-password'
						id='confirm-password'
					/>
				</div>
				<div className='form-row__item-btn-wrapper centered'>
					<button
						className='btn'
						type='submit'
					>
						Register
					</button>
				</div>
			</form>
		</div>
	);
};

export default SignUp;
