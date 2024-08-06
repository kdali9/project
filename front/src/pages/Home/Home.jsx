import React, { useState } from 'react'
import "./Home.css"
import Header from '../../components/Header/Header'
import ExploreCause from '../../components/ExploreCause/ExploreCause'
import CauseDisplay from '../../components/CauseDisplay/CauseDisplay'
import Volunteer from '../../components/Volunteer/Volunteer'

const Home = () => {

    const [category,setCategory] = useState("All");
  return (
    <div>
        <Header/>
        <ExploreCause category={category} setCategory={setCategory}/>
        <CauseDisplay category={category} />
        <Volunteer/>
    </div>
  )
}

export default Home