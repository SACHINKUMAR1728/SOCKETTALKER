import { RiUserSearchLine } from "react-icons/ri";
const SearchInput = () => {
	return (
		<form className='flex items-center gap-2'>
			<input type='text' placeholder='Search…' className='input input-bordered rounded-full' />
			<button type='submit' className='btn btn-circle bg-green-500 text-white'>
				<RiUserSearchLine />
			</button>
		</form>
	);
};
export default SearchInput;