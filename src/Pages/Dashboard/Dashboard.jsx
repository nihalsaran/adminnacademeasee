import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom'; // Import for navigation

const Dashboard = () => {
    const [subjects, setSubjects] = useState([]);
    const navigate = useNavigate(); // Access the navigation function
  

  useEffect(() => {
    const fetchSubjects = async () => {
      const querySnapshot = await getDocs(collection(db, 'subjects'));
      const subjectsData = querySnapshot.docs.map((doc) => doc.data());
      setSubjects(subjectsData);
    };

    fetchSubjects();
  }, []);

  const handleSubjectClick = (subject) => {
    navigate('/apl', { state: subject }); // Pass subject object as state
  };

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <table>
      <thead>
          <tr>
            <th>Subject Code</th>
            <th>Subject Name</th>
            <th>Selected Semester</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject) => (
            <tr key={subject.subjectCode}>
              <td>{subject.subjectCode}</td>
              <td onClick={() => handleSubjectClick(subject)}>
                {subject.subjectName}
              </td>
              <td>{subject.selectedSemester}</td>
              
              {/* ... */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
