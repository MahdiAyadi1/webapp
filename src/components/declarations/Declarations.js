import React from 'react'
import { useState , useEffect} from 'react'
import { db } from "../../firebase-config";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import './declaration.css'
const Declarations = () => {
    const [declarationList, setdeclarationList] = useState([]);
    const declarationCollectionRef = collection(db, "declaration");

    useEffect(() => {
        const getdeclaraions = async () => {
          const data = await getDocs(declarationCollectionRef);
          setdeclarationList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getdeclaraions();
      }, []);
    
  return (
    <div className='declaration'>
      <div className='declaration--list'>
        {declarationList.map((item)=> { return <div className='declaration--list--item'> {item.text}</div>})}
      </div>
    </div>
  )
}

export default Declarations