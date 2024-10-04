import { useState, useEffect } from "react";
import axios from "axios";
import IUser from "../../interfaces/user.interface";
import { useDispatch } from "react-redux";
import { setUserCount } from "../../redux/userSlice";

function Home() {
    const [users, setUsers] = useState<IUser[]>([]);
    const dispatch = useDispatch();
    const getUsers = async () => {
        try {
            const { data } = await axios.get("https://66fd3c26c3a184a84d199414.mockapi.io/api/v1/users");
            setUsers(data);
            dispatch(setUserCount(data.length));
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div className="min-h-96 py-0 m-14">
            <div className="container mx-auto px-4">
                <div className="overflow-x-auto">
                    <table className="table-auto w-full bg-white shadow-md overflow-hidden">
                        <thead className="bg-teal-200">
                            <tr>
                                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Name</th>
                                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Email</th>
                                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Password</th>
                            </tr>
                        </thead>

                        <tbody>
                            {users?.map((item) => (
                                <tr key={item.id} className="border-t border-gray-200">
                                    <td className="px-4 py-2 text-left text-sm text-gray-700">{item.name}</td>
                                    <td className="px-4 py-2 text-left text-sm text-gray-700">{item.email}</td>
                                    <td className="px-4 py-2 text-left text-sm text-gray-700">{item.password}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Home;