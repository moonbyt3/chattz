import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';

const SALT_WORK_FACTOR = 10;

const UserSchema = new mongoose.Schema(
	{
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

		// createdAt, updatedAt
	},
	{ timestamps: true }
);

UserSchema.pre('save', function (next) {
	var user = this;

	// only hash the password if it has been modified (or is new)
	if (!user.isModified('password')) return next();

	// generate a salt
	bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
		if (err) return next(err);

		// hash the password using our new salt
		bcrypt.hash(user.password, salt, function (err, hash) {
			if (err) return next(err);

			// override the cleartext password with the hashed one
			user.password = hash;
			next();
		});
	});
});

UserSchema.methods.comparePassword = async function (password) {
	console.log('Comparing passwords: ', password, this.password);
	return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', UserSchema);

export default User;
