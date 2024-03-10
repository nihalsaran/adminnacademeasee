import React from 'react';
import { useLocation } from 'react-router-dom';


const APL = () => {
  const { state = {} } = useLocation();
  const subjectData = state || {};

  return (
    <div style={{ textAlign: 'center', padding: '1rem' }}>
      <h1 style={{ fontSize: '2rem', margin: '1rem 0' }}>APL</h1>
      {/* Conditionally render fields based on data availability */}
      {subjectData && (
        <>
          <p style={{ margin: '0.5rem 0' }}>Course Type: {subjectData.courseType}</p>
          <p style={{ margin: '0.5rem 0' }}>Credits: {subjectData.credits}</p>
          <p style={{ margin: '0.5rem 0' }}>Ct-Papers: {subjectData.ctPapers}</p>
          <p style={{ margin: '0.5rem 0' }}>End Sem Papers: {subjectData.endSemPapers}</p>
          <p style={{ margin: '0.5rem 0' }}>Notes: {subjectData.notes}</p>
          <p style={{ margin: '0.5rem 0' }}>QB: {subjectData.questionBank}</p>
          <p style={{ margin: '0.5rem 0' }}>Subject Code : {subjectData.subjectCode}</p>
          <p style={{ margin: '0.5rem 0' }}>Subject Name: {subjectData.subjectName}</p>

          {/* ... display other relevant details */}
        </>
      )}
      {/* Display a message if no data is available (optional) */}
      {!subjectData && <p style={{ textAlign: 'center' }}>No subject data found.</p>}
    </div>
  );
};

export default APL;
