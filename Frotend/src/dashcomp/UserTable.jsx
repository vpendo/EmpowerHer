import React from 'react';

const UserTable = () => {
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
        },
        {
            id: 3,
            name: "Bob Johnson",
            course: "Graphic Design",
            joinedDate: "2024-03-05",
            completed: true,
            certificateIssued: false
        },
        {
            id: 4,
            name: "Charlie Brown",
            course: "Digital Marketing",
            joinedDate: "2024-04-20",
            completed: false,
            certificateIssued: false
        }
    ];

    return (
        <div>
            <h2>Registered Users</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid #dddddd', padding: '8px' }}>ID</th>
                        <th style={{ border: '1px solid #dddddd', padding: '8px' }}>Name</th>
                        <th style={{ border: '1px solid #dddddd', padding: '8px' }}>Course</th>
                        <th style={{ border: '1px solid #dddddd', padding: '8px' }}>Joined Date</th>
                        <th style={{ border: '1px solid #dddddd', padding: '8px' }}>Status</th>
                        <th style={{ border: '1px solid #dddddd', padding: '8px' }}>Certificate</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td style={{ border: '1px solid #dddddd', padding: '8px' }}>{user.id}</td>
                            <td style={{ border: '1px solid #dddddd', padding: '8px' }}>{user.name}</td>
                            <td style={{ border: '1px solid #dddddd', padding: '8px' }}>{user.course}</td>
                            <td style={{ border: '1px solid #dddddd', padding: '8px' }}>{new Date(user.joinedDate).toLocaleDateString()}</td>
                            <td style={{ border: '1px solid #dddddd', padding: '8px' }}>{user.completed ? 'Completed' : 'In Progress'}</td>
                            <td style={{ border: '1px solid #dddddd', padding: '8px' }}>{user.certificateIssued ? 'Yes' : 'No'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;
