import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import '../../firebaseConfig'
function Json() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const firestore = getFirestore();
      const subjectsCollectionRef = collection(firestore, 'subjects');
  
      try {
        const fileReader = new FileReader();
        fileReader.onload = async (event) => {
          const fileContent = JSON.parse(event.target.result);
          if (Array.isArray(fileContent)) {
            for (const item of fileContent) {
              await addDoc(subjectsCollectionRef, item);
            }
          } else {
            await addDoc(subjectsCollectionRef, fileContent);
          }
          console.log('JSON file uploaded successfully!');
        };
        fileReader.readAsText(selectedFile);
      } catch (error) {
        console.error('Error uploading JSON file:', error);
      }
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload JSON</button>
    </div>
  );
}

export default Json;
