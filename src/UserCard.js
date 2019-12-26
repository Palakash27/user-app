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
          <div style={{ width: "30%", height: "80%", float: "left" }}>
            <img
              src="https://images.fineartamerica.com/images-medium-large-5/businessman-vector-icon-art-sonik.jpg"
              alt="Profile"
              style={{
                padding: "20px",
                width: "75%",
                height: "75%",
                borderRadius: "50%"
              }}
            ></img>
          </div>
          <div
            style={{
              padding: "30px",
              width: "70%",
              height: "80%",
              float: "right",
              fontSize: 30,
              color: "white"
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
    </>
  );
}
const profileStyle = {
  padding: "20px",
  background: "gray",
  height: "612px"
};
export default UserCard;
