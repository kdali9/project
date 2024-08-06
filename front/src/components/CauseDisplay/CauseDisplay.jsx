import React, { useContext } from "react";
import "./CauseDisplay.css";
import { StoreContext } from "../../Context/StoreContext";
import ItemCause from "../ItemCause/ItemCause";


const CauseDisplay = ({category}) => {
  const { charity_list } = useContext(StoreContext);

  return (
    <div className="cause-display" id="cause-display">
      <h2>Recent Cause</h2>
      <div className="cause-display-list">
        {charity_list.map((item,index)=>{
          if(category ==="All"|| category ===item.category){
            return<ItemCause key={index} id={item._id} name={item.name} image={item.image} description={item.description} goalAmount ={item.goalAmount}/>
          }
            

        })}
      </div>
    </div>
  );
};

export default CauseDisplay;