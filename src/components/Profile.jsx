import React from "react";
import s from "./Profile.module.css";
const Profile = () => {
  return (
    <div className={s.Profile}>
      <div>
        <img src="https://www.goodcore.co.uk/blog/wp-content/uploads/2019/08/coding-vs-programming-2.jpg" />
      </div>
      <div>ava+desc</div>
      <div>
        My post
        <div>New posts</div>
        <div>
          <div className={s.item}>post1</div>
          <div>post2</div>
          <div>post3</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
