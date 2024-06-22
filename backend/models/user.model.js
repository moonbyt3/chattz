import mongoose from 'mongoose';

const SALT_WORK_FACTOR = 10;

const UserSchema = new mongoose.Schema({
	fullName: {
		type: String,
		required: true,
	},
	userName: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
		minlength: 6,
	},
	gender: {
		type: String,
		required: true,
		enum: ['male', 'female'],
	},
	profileImage: {
		type: String,
		default: '',
	},
});

const User = mongoose.model('User', UserSchema);

export default User;
