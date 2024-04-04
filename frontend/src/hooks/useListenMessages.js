import useConversations from '../zustand/useConversation.js';
import { useSocketContext } from '../context/SocketContext';

const useListenMessages = () => {
    const {socket}= useSocketContext;
    const {message, setMessages} = useConversations();
    

}

export default useListenMessages;