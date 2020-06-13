import React from 'react';
import {useParams} from 'react-router';
import '../App.css';

function User() {
    const {firstname,lastname} = useParams();
  return (
    <div className="body-wrapper">
      <div className="body-contant">
  <h1>user <span>{firstname}{lastname}</span></h1>
      </div>
    </div>
  );
}

export default User;