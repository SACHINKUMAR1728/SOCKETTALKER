import React from 'react'
import {useEffect } from 'react';
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TiMessages } from 'react-icons/ti'
import useConversation from '../../zustand/useConversation'
import { useAuthContext } from '../../context/AuthContext';

const MessageContainer = () => {
    const {selectedConversation, setselectedConversation} = useConversation();
    console.log('selectedConversation', selectedConversation);
    useEffect(() => {
        // cleanup function (unmounts)
        return () => setselectedConversation(null);
    }, [setselectedConversation]);
    
    return (
        <div className='md:min-w-[450px] flex flex-col'>
            {!selectedConversation ? <NoChatSelected /> : 
            (<>
            <div className=' flex bg-gray-700 px-4 py-2 mb-2 justify-between'>
                <img src={selectedConversation.profilepic} className='w-7 rounded-full' alt="userimg" />
                <span className='text-white font-bold mx-auto'>{selectedConversation.fullname}</span>
            </div>

            <Messages />
            <MessageInput />

        </>)
        }
        </div>

    )
}

export default MessageContainer;

const NoChatSelected = () => {
    const {authUser} = useAuthContext();
    return (
        <div className='flex items-center justify-center w-full h-full'>
            <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
                <p>Welcome 👋 {authUser.fullname} ❄</p>
                <p>Select a chat to start messaging</p>
                <TiMessages className='text-3xl md:text-6xl text-center' />
            </div>
        </div>
    );
};