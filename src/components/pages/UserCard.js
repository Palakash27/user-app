import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function UserCard(props) {
  const params = useParams();
  const [user, setuser] = useState();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then(res => res.json())
      .then(data => setuser(data));
  }, [params.id]);
  return (
    <div
      style={{
        padding: "30px"
      }}
    >
      {!user && <h2 style={{ textAlign: "center" }}>Loading profile</h2>}
      {user && (
        <div style={profileStyle}>
          <div
            style={
              {
                // width: "30%",
                // height: "80%",
                // display: "flex",
                // flexDirection: "row"
              }
            }
          >
            <img
              src={props.images[Number(params.id) - 1]}
              alt="Profile"
              style={{
                // padding: "20px",
                width: "50%",
                // height: "80%",
                borderRadius: "50%"
              }}
            ></img>
          </div>
          <div
            style={{
              fontSize: 30,
              textAlign: "center",
              color: "black"
            }}
          >
            <p>Name: {user.name}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>
              Address: {user.address.street}, {user.address.suite},{" "}
              {user.address.city}
            </p>
            <p>Zipcode: {user.address.zipcode}</p>
            <p>
              Website: <u>{user.website}</u>
            </p>
            <p>
              Works at{" "}
              <b>
                <i>{user.company.name}</i>({user.company.catchPhrase})
              </b>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
const profileStyle = {
  background: "gray",
  // display: "flex",
  fontSize: 20,
  boxShadow: "10px 10px 18px grey",
  padding: "30px",
  backgroundColor: "rgb(236, 232, 232)",
  textAlign: "center"
};
export default UserCard;
