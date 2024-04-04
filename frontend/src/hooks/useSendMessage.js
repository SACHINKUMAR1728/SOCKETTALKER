import React from 'react';
import { useState } from 'react';
import  toast  from 'react-hot-toast';
import useConversation from '../zustand/useConversation.js';

const useSendMessage = () => {
    const [loading, setLoading] = useState(false);
    const {messages, setMessages, selectedConversation} = useConversation();

    const sendMessage = async (message)=>{
        try{
            setLoading(true);
            const res = await fetch(`http://localhost:8080/api/message/send/${selectedConversation._id}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message }),  
                credentials: "include",
            })
            const data = await res.json();
            if(data.error){
                throw new Error(data.error);
            }
            setMessages([...messages, data]);
        }
        catch(error){
           toast.error(error.message);
        }
        finally{
            setLoading(false);
        }
    }

    return {sendMessage, loading};  
}

export default useSendMessage