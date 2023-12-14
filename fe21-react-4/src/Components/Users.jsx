import React, { useEffect } from "react";

const Users = ({ istifadeciler }) => {
  useEffect(function () {
    console.log("users komponenti YARANDI");

    return () => {
      console.log("users komponenti ÖLDÜ");
    };
  }, []); //dependency
  return (
    <div>
      <div className="container">
        <div className="row">
          {istifadeciler.map(({ id, name, email }) => {
            return (
              <div key={id} className="col-4 mb-3">
                <div className="card">
                  <div className="card-header">{name}</div>
                  <div className="card-body">{email}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Users;
