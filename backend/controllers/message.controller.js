import Message from '../models/message.model.js';
import Conversation from '../models/conversation.model.js';

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;

        const { id: recieverId } = req.params;

        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, recieverId] }
        })

        if (!conversation) {
            conversation = new Conversation({
                participants: [senderId, recieverId]
            });
        }


        const newMessage = await Message({
            senderId: senderId,
            receiverId: recieverId,
            message: message
        })

        await Conversation.updateOne(
            { participants : { $all: [senderId, recieverId] } },
            { $push: { messages: newMessage._id } }
        );
        // await newMessage.save();
        // await conversation.save();
        await Promise.all([newMessage.save(), conversation.save()]); //this runs in parallel.

        res.status(200).json(newMessage);


    } catch (error) {
        console.log("Error in sendMessage: ", error.message)
        res.status(500).json({ error: "Internal server error" });

    }
}
