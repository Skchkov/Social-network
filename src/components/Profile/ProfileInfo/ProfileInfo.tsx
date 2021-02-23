/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props: any) => {
  return (
    <div>
      <div>
        <img src="https://fsb.zobj.net/crop.php?r=np3jvFAXj6-2RF0jN-xK9ps0NhNXrErpINHaWeNr2SHQCf89BZQAjIdcrdWug_bqvyoZLo_PNxxSqrhZRU3CB-6MIdg875Y8vXZbe4fJ5pZzV5R2NTnKMZTckbp7V34BrLF_DkbcUC1_RwGJ" />
      </div>
      <div className={s.descriptionBlock}>
        {props.profile && props.profile.photos && (
          <img src={props.profile.photos.large} />
        )}
        ava + description
      </div>
    </div>
  );
};

export default ProfileInfo;
