import React from 'react';

const MentorTable = () => {
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
        },
        {
            id: 3,
            name: "Ms. Sarah Johnson",
            expertise: "Graphic Design"
        },
        {
            id: 4,
            name: "Prof. Alan Brown",
            expertise: "Digital Marketing"
        }
    ];

    return (
        <div>
            <h2>Mentor List</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid #dddddd', padding: '8px' }}>Mentor ID</th>
                        <th style={{ border: '1px solid #dddddd', padding: '8px' }}>Name</th>
                        <th style={{ border: '1px solid #dddddd', padding: '8px' }}>Expertise</th>
                    </tr>
                </thead>
                <tbody>
                    {mentors.map((mentor) => (
                        <tr key={mentor.id}>
                            <td style={{ border: '1px solid #dddddd', padding: '8px' }}>{mentor.id}</td>
                            <td style={{ border: '1px solid #dddddd', padding: '8px' }}>{mentor.name}</td>
                            <td style={{ border: '1px solid #dddddd', padding: '8px' }}>{mentor.expertise}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MentorTable;
