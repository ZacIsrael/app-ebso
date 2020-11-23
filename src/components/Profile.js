import React from "react";
import AuthService from "../services/auth.service";

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();
  console.log('currentUser.body', currentUser.body)
  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.body.username}</strong> Profile
        </h3>
      </header>
      <p>
        <strong>Name:</strong> {currentUser.body.firstName} {currentUser.body.lastName} 
      </p>
      <p>
        <strong>Email:</strong> {currentUser.body.email} 
      </p>
      
      <strong>Authorities:</strong>
      <ul>
        {currentUser.body.roles &&
          currentUser.body.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul>
    </div>
  );
};

export default Profile;
