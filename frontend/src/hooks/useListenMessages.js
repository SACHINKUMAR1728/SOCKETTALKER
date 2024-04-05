import useConversation from '../zustand/useConversation.js';
import  {useSocketContext } from '../context/SocketContext.jsx';
import { useEffect } from 'react';

const useListenMessages = () => {
    const {socket}= useSocketContext();
    const { messages, setMessages } = useConversation();

    useEffect( () => {
        socket?.on("newMessage", async (newMessage) => {
            await setMessages([...messages, newMessage]);
            
        })


        return ()=> socket?.off("newMessage");
        
    }, [socket, setMessages, messages]);
    

}

export default useListenMessages;