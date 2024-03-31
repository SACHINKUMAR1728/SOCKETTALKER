import mongoose from 'mongoose';
import Message from '../models/message.model.js';
import User from '../models/user.model.js';
import Conversation from '../models/conversation.model.js';

export const sendMessage = async (req, res) => {
   try {
     const {message} = req.body;
     const {id} = req.params;
     const {userid } = req.user;
      

   } catch (error) {
    console.log("Error in sendMessage: ", error.message)
    res.status(500).json({ error: "Internal server error"});

   }
}
