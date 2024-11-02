import React from 'react';

const AdminCheckTable = () => {
    // Hardcoded user data
    const users = [
        {
            id: 1,
            name: "Jane Doe",
            course: "Web Development",
            joinedDate: "2024-01-15",
            completed: true,
            certificateIssued: true
        },
        {
            id: 2,
            name: "Alice Smith",
            course: "Data Science",
            joinedDate: "2024-02-10",
            completed: false,
            certificateIssued: false
        }
    ];

    // Hardcoded mentor data
    const mentors = [
        {
            id: 1,
            name: "Dr. Emily Smith",
            expertise: "Web Development"
        },
        {
            id: 2,
            name: "Mr. John Doe",
            expertise: "Data Science"
        }
    ];

    return (
        <div className="p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Admin Check: Users and Mentors</h2>
            <table className="min-w-full bg-gray-100 border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-green-600 text-white">
                    <tr>
                        <th className="py-2 px-4 text-left">ID</th>
                        <th className="py-2 px-4 text-left">Name</th>
                        <th className="py-2 px-4 text-left">Type</th>
                        <th className="py-2 px-4 text-left">Details</th>
                    </tr>
                </thead>
                <tbody className="text-gray-700">
                    {users.map((user) => (
                        <tr key={user.id} className="hover:bg-gray-200">
                            <td className="py-2 px-4 border-b">{user.id}</td>
                            <td className="py-2 px-4 border-b">{user.name}</td>
                            <td className="py-2 px-4 border-b">User</td>
                            <td className="py-2 px-4 border-b">
                                Course: {user.course}, Joined: {new Date(user.joinedDate).toLocaleDateString()},
                                Status: {user.completed ? 'Completed' : 'In Progress'},
                                Certificate: {user.certificateIssued ? 'Yes' : 'No'}
                            </td>
                        </tr>
                    ))}
                    {mentors.map((mentor) => (
                        <tr key={mentor.id} className="hover:bg-gray-200">
                            <td className="py-2 px-4 border-b">{mentor.id}</td>
                            <td className="py-2 px-4 border-b">{mentor.name}</td>
                            <td className="py-2 px-4 border-b">Mentor</td>
                            <td className="py-2 px-4 border-b">Expertise: {mentor.expertise}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="mt-4 text-right">
                <button
                    className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-500"
                    onClick={() => alert('Exporting data...')}
                >
                    Export Data
                </button>
            </div>
        </div>
    );
};

export default AdminCheckTable;
