import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function UserCard() {
  const params = useParams();
  const [user, setuser] = useState();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then(res => res.json())
      .then(data => setuser(data));
  }, [params.id]);
  return (
    <>
      {!user && <h2 style={{ textAlign: "center" }}>Loading profile</h2>}
      {user && (
        <div style={profileStyle}>
          <div style={{ width: "500px", height: "500px", float: "left" }}>
            <img
              src="https://images.fineartamerica.com/images-medium-large-5/businessman-vector-icon-art-sonik.jpg"
              alt="Profile"
              style={{
                width: "500px",
                height: "500px",
                borderRadius: "50%"
              }}
            ></img>
          </div>
          <div
            style={{
              width: "900px",
              height: "500px",
              float: "right",
              fontSize: 30,
              color: "white"
            }}
          >
            <p>Name: {user.name}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>
              Address: {user.address.street}, {user.address.suite},{" "}
              {user.address.city}, {user.address.zipcode}
            </p>
            <p>Phone: {user.phone}</p>
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
    </>
  );
}
const profileStyle = {
  padding: "20px",
  background: "gray",
  height: "612px"
};
export default UserCard;
