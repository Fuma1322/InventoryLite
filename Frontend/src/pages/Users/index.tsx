import { useState } from "react";
import Model from "./Components/Model.user";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { LuView } from "react-icons/lu";

const UserPage = () => {
    const [visible, setVisible] = useState(false);
  return (
    <>
    <div className="mb-3 flex justify-end w-[90%] mx-auto">
        <button onClick={() => setVisible(!visible)} className="px-5 py-2 bg-purple-500 text-white rounded-sm">
            Add User
        </button>
    </div>
    <div className="mb-3 flex justify-end w-[90%] mx-auto">
        <input className="w-[90%] mx-auto lg:mx-0 lg:w-1/2 rounded-sm border py-3 px-5 outline-none" placeholder="Search Consumer"/>
    </div>
    <div className="w-full">    
        <div className="relative overflow-x-auto shadow">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Mobile
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Array(10).fill(null).map((c,i) => {
                            return <tr key={i} className="bg-white border-b">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrape">
                               Fuma
                            </th>
                            <td className="px-6 py-4">
                                fuma26@gmail.com
                            </td>
                            <td className="px-6 py-4">
                                +266 62601042
                            </td>
                            <td className="px-6 py-4">
                                <button title="View" className="p-4 bg-teal-500 text-white rounded-sm mx-2"><LuView className="text-xl" /></button>
                                <button title="Edit" className="p-4 bg-orange-400 text-white rounded-sm mx-2"><FaRegEdit className="text-xl" /></button>
                                <button title="Delete" className="p-4 bg-red-600 text-white rounded-sm mx-2"><FaRegTrashAlt className="text-xl" /></button>
                            </td>
                        </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
        <Model visible={visible} setVisible={setVisible} />
    </>
  )
}

export default UserPage