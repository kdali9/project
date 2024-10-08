import React, { useContext } from "react";
import "./ItemCause.css";
import { useNavigate } from "react-router-dom";
import Progress from "../Progress/Progress";
import {Link} from "react-router-dom"


const ItemCause = ({ id, name, image, description,goalAmount }) => {




  return (
    <div className="cause-item">
      <div className="cause-item-img-container">
        <img className="cause-item-image" src={image} alt="" />
      </div>
      <div className="cause-item-info">
        <p className="name">{name}</p>
      </div>
      <p className="cause-item-desc">{description}</p>
      <Progress goalAmount={goalAmount}/>
      <div>
      <Link to ="/make"><button className="cause-item-btn">Donate</button></Link>
 
      </div>
    </div>
     
  );
};

export default ItemCause;
