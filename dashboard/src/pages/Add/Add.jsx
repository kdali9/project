import React from "react";
import "./Add.css";
import { assets } from "../../assets/assets";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Add = () => {
  const url = "http://localhost:4000";
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    goalAmount: "",
    category: "Natural Disaster",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("goalAmount", Number(data.goalAmount));
    formData.append("category", data.category);
    formData.append("image", image);
    const response = await axios.post(`${url}/api/charity/add`, formData);
    if (response.data.success) {
      setData({
        name: "",
        description: "",
        goalAmount: "",
        category: "Natural Disaster",
      })
      setImage(false)
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };
  return (
    <div className="add">
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Upload image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>
        <div className="add-charity-name flex-col">
          <p>charity name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            placeholder="Type here"
          />
        </div>
        <div className="add-charity-description flex-col">
          <p>charity description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            rows="6"
            placeholder="Write content here"
            required
          />
        </div>
        <div className="add-category-target">
          <div className="add-category flex-col">
            <p>Charity category</p>
            <select onChange={onChangeHandler} name="category">
              <option value="Natural Disaster">Natural Disaster</option>
              <option value="Children">Children</option>
              <option value="Social Justice">social justice</option>
              <option value="Education">Education</option>
              <option value="Environment">Environment</option>
              <option value="Health">Health</option>
              <option value="Religion">Religion</option>
            </select>
          </div>
          <div className="add-target flex-col">
            <p>Charity target</p>
            <input
              onChange={onChangeHandler}
              value={data.goalAmount}
              type="number"
              name="goalAmount"
              placeholder="$1000"
              required
            />
          </div>
        </div>
        <button type="submit" className="add-btn">
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
