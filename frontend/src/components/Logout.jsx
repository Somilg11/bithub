// import { MdLogout } from "react-icons/md";
import { TbDoorExit } from "react-icons/tb";
import { useAuthContext } from "../context/AuthContext";
import { toast } from "react-hot-toast";
// TODO Implement Logout functionality

const Logout = () => {
	const { authUser, setAuthUser } = useAuthContext();
    // const authUser = true;

	const handleLogout = async () => {
		try {
			const res = await fetch("/api/auth/logout", { credentials: "include" });
			const data = await res.json();
			console.log(data);
			setAuthUser(null);
			toast.success("Logged out");
		} catch (error) {
			toast.error(error.message);
		}
	};

	return (
		<>
			<img src={authUser?.avatarUrl} className='w-10 h-10 rounded-full border border-gray-800' />

			<div
				className='cursor-pointer flex items-center p-2 rounded-lg bg-glass mt-auto border border-gray-800'
				onClick={handleLogout}
			>
				{/* <MdLogout size={22} /> */}
                <TbDoorExit size={22} />
			</div>
		</>
	);
};

export default Logout;