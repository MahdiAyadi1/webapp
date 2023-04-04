import React, { useState,useEffect } from "react";
import './home.css' ;
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase-config";
import {LeafletMap,Metroinfo,Manageaccounts,Sidebar,Timetable, Declarations , Metrolist} from '../../components'
const Home = ()=> {
    const [nav,setNav]= useState('map')
    const [filtre,setFiltre]= useState([])
    const [target,setTarget] = useState('empty')
    const [declarationList, setdeclarationList] = useState([]);
    var nbDeclarations=declarationList.length
    const declarationCollectionRef = collection(db, "declaration");

    useEffect(() => {
        const getdeclaraions = async () => {
          const data = await getDocs(declarationCollectionRef);
          setdeclarationList(
            data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          );
        };
        getdeclaraions();
      }, []);
      nbDeclarations=declarationList.length;
      console.log(nbDeclarations)

    return (
        <div className="home">
            <Sidebar nav={nav}  setNav={setNav} nbDeclarations={nbDeclarations}/>
            {nav=='map' && <LeafletMap filtre={filtre} />}
            {nav=='map' && <Metroinfo setFiltre={setFiltre}  filtre={filtre}/>}
            {nav=='manageaccounts' &&<Manageaccounts setTarget={setTarget} setNav={setNav} />}
            {nav=='timetable' && <Timetable target={target} />}
            {nav=='declarations' && <Declarations declarationList={declarationList}/>}
            {nav=='metrolist' && <Metrolist/>}
        </div>
    )
}
export default Home