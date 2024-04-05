import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages.js";
import MessageSkeleton from "../skeletons/MessageSkeleton.jsx";
import { useEffect, useRef } from 'react';
import useListenMessages from "../../hooks/useListenMessages.js";

const Messages = () => {
    const { messages, loading } = useGetMessages();
    useListenMessages();
    const lastMessageRef = useRef();

    useEffect(() => {
        if (!loading && messages.length > 0) {
            // Scroll to the last message
            lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [loading, messages]);

    return (
        <div className='px-4 flex-1 overflow-auto'>
            {!loading && messages.length > 0 &&
                messages.map((message, index) => (
                    <div key={message._id} ref={index === messages.length - 1 ? lastMessageRef : null}>
                        <Message message={message} />
                    </div>
                ))
            }

            {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
            {!loading && messages.length === 0 && (
                <p className='text-center text-gray-500 mt-5'>Send a message to start conversation</p>
            )}
        </div>
    );
};

export default Messages;
