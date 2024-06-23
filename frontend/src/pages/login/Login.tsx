import './login.scss';

const Login = () => {
	return (
		<form className='login'>
			<div className='login__item'>
				<label htmlFor='username'>Username</label>
				<input
					type='text'
					name='username'
					id='username'
				/>
			</div>
			<div className='login__item'>
				<label htmlFor='password'>Password</label>
				<input
					type='password'
					name='password'
					id='password'
				/>
			</div>
			<div className='login__item'>
				<button type='submit'>Log in</button>
			</div>
		</form>
	);
};

export default Login;
