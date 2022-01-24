import React, { useState, useEffect } from "react";
import axios from "axios";

const Api_call = () => {
  const [postData, setPos] = useState([]);
  console.log("hey");

  useEffect(() => {
    const getPostDataList = async () => {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/users`); //await  expression to wait for the promises to return
      //console.log(res);
      setPos(res);
    };
    getPostDataList();
  }, []); //passing an empty array as 2nd argument to useEffect causes the hook to only be run once when the component first loads.

  const getPostData = () => {
    return (
      postData &&
      postData.data &&
      postData.data.map((data, index) => {
        return (
          <tr>
            <p>{data.id} Name: {data.name}<br/>
            username: {data.username}<br/>
            Email: {data.email}<br/>
            Address: {data.address.street}, {data.address.city},PIN- {data.address.zipcode}
            </p>
          </tr>
        );
      })
    );
  };

  return (
    <>
      <table border="1">
        <h1>Details</h1>
        {getPostData()}
      </table>
    </>
  );
};

export default Api_call;