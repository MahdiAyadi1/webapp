import './App.css';
import {db} from './firebase-config'
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { useEffect } from 'react';
function App() {
  const collection_name = collection(db, "test");
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection_name);
      console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    };
    getPosts();
  }, []);
  return (
    <div className="App">
      yo
    </div>
  );
}

export default App;
