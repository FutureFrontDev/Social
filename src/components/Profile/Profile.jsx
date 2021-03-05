import React from "react";
import s from "./Profile.module.css";
import Post from "./MyPosts/Post/Post.jsx";
const Profile = () => {
  return (
    <div className={s.Profile}>
        <div> <textarea ></textarea>
            <button>Add</button></div>

     <Post massage='Hi'/>
     <Post message='Hello'/>


    </div>
  );
};

export default Profile;
