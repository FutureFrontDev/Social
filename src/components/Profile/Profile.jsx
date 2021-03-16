import React from "react";
import s from "./Profile.module.css";
import Post from "./MyPosts/Post/Post.jsx";

const Profile = () => {
    return (
        <div>
        <div><textarea></textarea>
            <button>Add</button>
        </div>

        <Post massage='Hi' likes='23'/>
        <Post massage='Hello' likes='2'/>


</div>
);
};

export default Profile;
