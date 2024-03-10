import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import { getFirestore } from "firebase/firestore";
import './SignUp.css';

const auth = getAuth();

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedFaculty, setSelectedFaculty] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const adminsCollectionRef = collection(getFirestore(), "admins");
      await addDoc(adminsCollectionRef, {
        name,
        email,
        selectedRole,
        selectedFaculty,
        selectedCourse,
        selectedBranch,
        selectedSemester,
      });
      navigate('/home');
    } catch (error) {
      setError(error.message);
    }
  };  

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
    // Reset selections for subsequent dropdowns
    setSelectedFaculty('');
    setSelectedCourse('');
    setSelectedBranch('');
    setSelectedSemester('');
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Role:</label>
          <select
            value={selectedRole}
            onChange={handleRoleChange}
            required
          >
            <option value="">Select Role</option>
            <option value="Class Representative">Class Representative</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
        {selectedRole && (
          <>
            <div>
              <label>Faculty:</label>
              <select
                value={selectedFaculty}
                onChange={(e) => setSelectedFaculty(e.target.value)}
                required
              >
                <option value="">Select Faculty</option>
                <option value="Engineering">Engineering</option>
                <option value="Arts">Arts</option>
                <option value="Commerce">Commerce</option>
              </select>
            </div>
            {selectedFaculty && (
              <>
                <div>
                  <label>Course:</label>
                  <select
                    value={selectedCourse}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                    required
                  >
                    <option value="">Select Course</option>
                    {selectedFaculty === 'Engineering' && (
                      <>
                        <option value="BTECH">BTECH</option>
                        <option value="BARCH">BARCH</option>
                        <option value="BVOC">BVOC</option>
                      </>
                    )}
                    {selectedFaculty === 'Arts' && (
                      <>
                        <option value="BTECH">BTECH</option>
                        <option value="BARCH">BARCH</option>
                        <option value="BVOC">BVOC</option>
                      </>
                    )}
                    {selectedFaculty === 'Commerce' && (
                      <>
                        <option value="BTECH">BTECH</option>
                        <option value="BARCH">BARCH</option>
                        <option value="BVOC">BVOC</option>
                      </>
                    )}
                    {/* Add options for other faculties here */}
                  </select>
                </div>
                {selectedCourse && (
                  <>
                    <div>
                      <label>Branch:</label>
                      <select
                        value={selectedBranch}
                        onChange={(e) => setSelectedBranch(e.target.value)}
                        required
                      >
                        <option value="">Select Branch</option>
                        {/* Add branches for selected course here */}
                        {selectedCourse === 'BTECH' && (
                          <>
                            <option value="Mechanical">Mechanical</option>
                            <option value="Electrical">Electrical</option>
                            {/* Add more branches */}
                          </>
                        )}
                        {/* Add branches for other courses */}
                      </select>
                    </div>
                    {selectedBranch && (
                      <div>
                        <label>Semester:</label>
                        <select
                          value={selectedSemester}
                          onChange={(e) => setSelectedSemester(e.target.value)}
                          required
                        >
                          <option value="">Select Semester</option>
                          {/* Add semesters for selected branch here */}
                          {selectedBranch === 'Mechanical' && (
                            <>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              {/* Add more semesters */}
                            </>
                          )}
                          {/* Add semesters for other branches */}
                        </select>
                      </div>
                    )}
                  </>
                )}
              </>
            )}
          </>
        )}
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default SignUp;
