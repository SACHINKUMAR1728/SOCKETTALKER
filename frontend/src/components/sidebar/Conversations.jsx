import React from 'react'
import Conversation from "./Conversation.jsx"
import useGetConversations from '../../hooks/useGetConversations.js'


const Conversations = () => {
    const {loading, conversations} = useGetConversations();
    console.log("reached");
    console.log(conversations);

  return (
    <div className="py-2 flex flex-col overflow-auto">
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
    </div>
  )
}

export default Conversations;