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
        // Socket.io code goes here

        // await newMessage.save();
        // await conversation.save();
        await Promise.all([newMessage.save(), conversation.save()]); //this runs in parallel.

        res.status(200).json(newMessage);


    } catch (error) {
        console.log("Error in sendMessage: ", error.message)
        res.status(500).json({ error: "Internal server error" });

    }
}

export const getMessage = async (req, res) => {
    try {
        const {id : userToChatid} = req.params;
        const userId = req.user._id;

        const conversation = await Conversation.findOne({
            participants:{ $all : [userId, userToChatid]}
        }).populate("messages");

        if(!conversation){
            return res.status(200).json({messages: []});
        }
        res.status(200).json(conversation.messages);


        
    } catch (error) {
        console.log("Error in getMessage: ", error.message);
        res.status(500).json({ error: "Internal server error"});
    }
};