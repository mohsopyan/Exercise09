import { Link } from "react-router-dom";
import { useSelector} from "react-redux";
import { Icount } from "../../redux/userSlice";

function Navbar() {
    const count = useSelector((state: {userSlice: Icount}) => state.userSlice.value)

    return (
        <div className='bg-teal-600 flex justify-between items-center h-24 w-full mx-auto px-4 text-white'>
            <h1 className='text-[24px] font-bold text-black bg-white rounded-lg'>Network Call Practice </h1>
            <ul className='flex justify-center items-center'>
                <li className='p-4 hover:bg-teal-400 rounded-xl m-2 cursor-pointer duration-300 hover:text-black'>
                    <Link to="/"><a>Users</a></Link>
                </li>
                <li className='p-4 hover:bg-teal-400 rounded-xl m-2 cursor-pointer duration-300 hover:text-black'>
                    <Link to="/register"><a>Register</a></Link>
                </li>
            </ul>
            <h1>Total User : {count}</h1>
        </div>
    )
}

export default Navbar;