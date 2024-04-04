import { RiUserSearchLine } from "react-icons/ri";
import { useState } from "react";
import  useConversation from "../../zustand/useConversation.js";
import useGetConversations from "../../hooks/useGetConversations";
import  toast from "react-hot-toast";
const SearchInput = () => {
	const [search , setsearch] = useState('');
	const {setselectedConversation} = useConversation();
	const {conversations} = useGetConversations();
	const handlesubmit = (e)=>{
		e.preventDefault();
		if(!search) return;
		if(search.length < 3){
			return toast.error ('Search query must be at least 3 characters long');
		}
		const conversation = conversations.find((c)=> c.fullname.toLowerCase().includes(search.toLowerCase())); 
		if(conversation){
			setselectedConversation(conversation);	
		}
		else{
			toast.error('No user found with this name');
		}
		setsearch('');
	
	}
	return (
		<form onSubmit={handlesubmit} className='flex items-center gap-2'>
			<input type='text' placeholder='Search…' className='input input-bordered rounded-full' 
			value={search} 
			onChange={(e)=> setsearch(e.target.value)}
			/>
			<button type='submit' className='btn btn-circle bg-green-500 text-white'>
				<RiUserSearchLine />
			</button>
		</form>
	);
};

export default SearchInput;