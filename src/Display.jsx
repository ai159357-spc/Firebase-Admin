import React, { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from './firebase/firebase';
import "./App.css";

const Display = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setUsers(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="page-wrap">
      {users.length > 0 ? (
        users.map((user) => (
          <div className="card" key={user.id}>
            <h3 className="card-title">{user.name}</h3>
            <img src={user.url} alt={user.name} style={{ width: '100%', borderRadius: '8px', marginBottom: '10px' }} />
            <p>Price: ₹{user.price}</p>
          </div>
        ))
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default Display;
