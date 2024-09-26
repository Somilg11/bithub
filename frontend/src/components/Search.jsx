import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { ArrowUpRight } from 'lucide-react';

const Search = ({ onSearch }) => {
	const [username, setUsername] = useState("");

	return (
		<form className='max-w-xl mx-auto p-2' onSubmit={(e) => onSearch(e, username)}>
			<label htmlFor='default-search' className='mb-2 text-sm font-medium text-gray-900 sr-only'>
				Search
			</label>
			<div className='relative'>
				<div className='absolute inset-y-0 start-0 flex items-center z-10 ps-3 pointer-events-none'>
					<IoSearch className='w-5 h-5' />
				</div>
				<input
					type='search'
					id='default-search'
					className='block w-full p-4 ps-10 text-sm rounded-lg bg-glass focus:ring-blue-500 focus:border-blue-500 bg-transparent focus:bg-transparent '
					placeholder='i.e. johndoe'
					required
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<button
					type='submit'
					className='text-black absolute end-2.5 bottom-2.5 bg-white hover:bg-green-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 hover:scale-95 active:scale-90 transition-all duration-300'
				>
					<ArrowUpRight size={20} />
				</button>
			</div>
		</form>
	);
};
export default Search;