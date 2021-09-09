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
        <div>
            <div className="hier-main-div">
                <h1>Team Hierarchy Data</h1>
                <Team teamData={data?.data[0]}/>
            </div>


             <footer>
                <p>Made with ❤️ by <a className="nova" target="_blank" href="https://faisalalik9-portfolio.herokuapp.com/">nova</a></p>
            </footer>
        </div>
    )
}

export default Home
