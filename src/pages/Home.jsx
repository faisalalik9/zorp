import axios from 'axios';
import React,{useState,useEffect} from 'react';
import Team from '../Components/Team';
import '../assets/css/Home.css'


const URL = "http://dev.zorp.one/bff-service/team/hierarchy";
function Home() {

    const[data,setData]=useState();

    useEffect(()=>{

        async function fetchData(){
            var result = await axios.get(URL);
            setData(result?.data);
            // console.log(result?.data?.data);
            // console.log((result?.data?.data)[0].children);
        }

        fetchData();
    },[]);

    return (
        <div className="hier-main-div">
            <h1>Data</h1>
            <Team teamData={data?.data[0]}/>

            {/* <TeamInfo teamInfo={data?.data[0]} />
            <UserCarousel usersData={data?.data[0]?.users} /> */}
            {/* <h4>Children</h4>
            {data?.data[0]?.children.map(child=>{
                return(
                    <Team teamData={child}/>
                )
            })} */}
        </div>
    )
}

export default Home
