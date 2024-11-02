import React, { useState } from 'react';
import {
    FiPackage, FiShoppingCart,
    FiDollarSign, FiUsers,
} from 'react-icons/fi';
import { useTheme } from '../App';
export const HomeDash = ({ isAdmin }) => {
    const { theme, setTheme, systemDark, setSystemDark, userInfo } = useTheme();

    const StatCard = ({ icon: Icon, title, value, trend }) => (
        <div className="bg-white  p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-500">{title}</h3>
                <Icon className="h-6 w-6 text-gray-400 dark:text-gray-200" />
            </div>
            <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">{value}</div>
                <span className={`text-sm ${trend >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {trend >= 0 ? '+' : ''}{trend}%
                </span>
            </div>
        </div>
    );

    return (
        <>
            <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-4">
                <StatCard
                    icon={FiPackage}
                    title="Total activities"
                    value="142"
                    trend={'20.1'}
                />
                <StatCard
                    icon={FiShoppingCart}
                    title="My portal"
                    value="89"
                    trend={10}
                />
                <StatCard
                    icon={FiDollarSign}
                    title="Completed"
                    value="$12,234"
                    trend={15}
                />

                <StatCard
                    icon={FiUsers}
                    title="Pending"
                    value="2,345"
                    trend={5.8}
                />
            </div>

            {/* Dynamic Content Based on Role */}
            <div className="bg-white  rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-semibold">
                        {isAdmin ? 'Recent Course' : 'Recent '}
                    </h2>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                        View All
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b ">
                                <th className="text-left py-3 px-4 ">Avatar</th>
                                <th className="text-left py-3 px-4 ">ID</th>
                                <th className="text-left py-3 px-4 ">
                                    Course
                                </th>
                                <th className="text-left py-3 px-4 ">
                                    start Date
                                </th>
                                <th className="text-left py-3 px-4 ">Status</th>
                                <th className="text-left py-3 px-4 ">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[1, 2, 3].map((item) => (
                                <tr key={item} className="border-b ">
                                    <td className="py-3 px-4 ">
                                        <div className="h-28 w-[90px] overflow-hidden rounded-lg">
                                            <img src={userInfo?.UserInfo?.avatar} alt="" srcset="" className='h-full w-full object-cover' />
                                        </div>
                                    </td>
                                    <td className="py-3 px-4 ">#{item}</td>
                                    <td className="py-3 px-4 ">
                                        {`Product ${item}`}
                                    </td>
                                    <td className="py-3 px-4 ">
                                        {isAdmin ? 'Purchase' : '2024-01-0' + item}
                                    </td>
                                    <td className="py-3 px-4 ">
                                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                                            {'Delivered'}
                                        </span>
                                    </td>
                                    <td className="py-3 px-4 ">${(item * 100).toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
