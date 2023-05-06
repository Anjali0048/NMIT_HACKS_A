import React, { useEffect, useState } from 'react'
// import firebase from "../Firebase"
import db from '../Firebase';
import "firebase/compat/database"
import firebase from 'firebase/compat/app';
import { getDatabase, ref, child, get } from "firebase/database";
import Dashboard from './Dashboard';

// {account, Name, company, phone, desc, product, sponsorship, facilities, linkedIn, email}

const SponsorDetail = () => {

    const [allValue, setAllValue] = useState([])

    // const [name,setName] = useState('')
    // const handleAdd=()=>{
    //     if(name!==""){
    //         db.ref().child("sponsorData").push(name)
    //         setName("")
    //     }
    // }

    useEffect(()=> {
        db.ref().child("sponsorData").on('value',data=>{
            const getData = Object.values(data.val())
            setAllValue(getData)
        })
    },[])
    console.log(allValue);

    // const [info , setInfo] = useState([]);
 
    // const [blogs,setBlogs]=useState([])
    // const fetchBlogs=async()=>{
    //   const response=db.collection('sponsorData.json');
    //   const data=await response.get();
    //   data.docs.forEach(item=>{
    //    setBlogs([...blogs,item.data()])
    //   })
    // }
    // useEffect(() => {
    //   fetchBlogs();
    // }, [])

    
    // const database = getDatabase();
        
    // const dbRef = ref(getDatabase());
    // get(child(dbRef, `sponsorData/${account}`)).then((snapshot) => {
    //   if (snapshot.exists()) {
    //     console.log(snapshot.val());
    //   } else {
    //     console.log("No data available");
    //   }
    // }).catch((error) => {
    //   console.error(error);
    // });


    // database.ref('users').once('value').then((snapshot) => {
    //     const data = snapshot.val();
        
    //   });


//     const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const snapshot = await firebase.database().ref('sponsorData').once('value');
//       const data = snapshot.val();
//       setData(data);
//     };
//     fetchData();
//   }, []);

  

  return (
    <div>
        {/* <div>
            <input value={name} onChange={(e)=>{setName(e.target.value)}} />
            <button onClick={handleAdd}>Add</button>
        </div> */}
        {
            allValue.map((item,i)=> {
                <h1>{item}</h1>
            })
        }
    </div>

    
  )
}


export default SponsorDetail
