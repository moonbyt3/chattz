import Conversation from '../models/conversations.model.js';

import Message from '../models/message.model.js';

export const sendMessage = async (req, res) => {
	try {
		const { message } = req.body;
		const { id: recieverId } = req.params;
		// console.log('sender id: ', req.user);
		const senderId = req.user._id;

		console.log('Sending a message...');
		console.log(message, recieverId, senderId);

		let conversation = await Conversation.findOne({
			participants: { $all: [senderId, recieverId] },
		});

		if (!conversation) {
			conversation = await Conversation.create({
				participants: [senderId, recieverId],
			});
		}

		const newMessage = new Message({
			senderId,
			recieverId,
			message,
		});

		if (newMessage) {
			conversation.messages.push(newMessage._id);
		}

		// Socket.io functionality will go here...

		await Promise.all([conversation.save(), newMessage.save()]);

		res.status(201).json(newMessage);
	} catch (error) {
		console.log(error.message);
		res.status(500).json({
			error: 'Internal server error',
		});
	}
};

export const getMessages = async (req, res) => {
	try {
		const { id: userToChatWithId } = req.params;
		const senderId = req.user._id;

		const conversation = await Conversation.findOne({
			participants: { $all: [senderId, userToChatWithId] },
		}).populate('messages');

		res.status(200).json(conversation.messages);
	} catch (error) {
		console.log('ERR: In message.controller.js ', error.message);
		res.status(500).json({
			error: 'Internal server error',
		});
	}
};
