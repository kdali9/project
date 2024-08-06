import React from "react";
import "./ExploreCause.css";
import { cause_list } from "../../assets/assets";

const ExploreCause = ({category,setCategory}) => {
  return (
    <div className="explore-cause" id="explore-cause">
      <h1>Explore our Causes</h1>
      <p className="explore-cause-text">
        Choose from an Array of Causes.Our mission to bring to attention
        different Causes that need our Help and time.
      </p>
      <div className='explore-cause-list'>
      {cause_list.map((item,index)=>{
        return(
          <div onClick={()=>setCategory(prev=>prev===item.cause_name?"All":item.cause_name)} key={index} className="explore-cause-list-item">
          <img className={category===item.cause_name?"active":""} src={item.cause_image} alt=""/>
          <p>{item.cause_name}</p>
          </div>
        )
      })}
      </div>
      <hr/>

    </div>
  );
};

export default ExploreCause