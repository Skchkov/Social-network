import React from "react";
import styles from "./users.module.css";

let Users = (props: any) => {
  if (props.users.length === 0) {
    props.seUsers([
      {
        id: 1,
        photoUrl:
          "https://m.media-amazon.com/images/M/MV5BMTQzMjkwNTQ2OF5BMl5BanBnXkFtZTgwNTQ4MTQ4MTE@._V1_.jpg",
        followed: false,
        fullName: "Nikita",
        status: "Dead inside",
        location: { city: "Minsk", country: "Belarus" },
      },
      {
        id: 2,
        photoUrl:
          "https://m.media-amazon.com/images/M/MV5BMTQzMjkwNTQ2OF5BMl5BanBnXkFtZTgwNTQ4MTQ4MTE@._V1_.jpg",
        followed: true,
        fullName: "Misha",
        status: "ez for me",
        location: { city: "Moscow", country: "Russia" },
      },
      {
        id: 3,
        photoUrl:
          "https://m.media-amazon.com/images/M/MV5BMTQzMjkwNTQ2OF5BMl5BanBnXkFtZTgwNTQ4MTQ4MTE@._V1_.jpg",
        followed: false,
        fullName: "Andrew",
        status: "Your best choice",
        location: { city: "Kiev", country: "Ukraine" },
      },
    ]);
  }

  return (
    <div>
      {props.users.map((u: any) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} className={styles.usersPhoto} alt="asd" />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
