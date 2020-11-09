import React from 'react';
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg" />
      </div>
      <div className={s.descriptionBlock}>
        ava+desc
      </div>
    </div>);
}

export default ProfileInfo;