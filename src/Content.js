import React, { useEffect, useRef, useState } from "react";
import "./Content.css";

import db from "./firebase";
import img1 from "./images/Chrysanthemum.jpg";
import img2 from "./images/Desert.jpg";
import Masonry from "react-masonry-css";

function Content() {
  const [data, setData] = useState([]);
  useEffect(() => {
    db.collection("photo").onSnapshot((snapshot) => {
      setData(
        snapshot.docs.map((snap) => ({ id: snap.id, details: snap.data() }))
      );
    });
  }, []);

  const handleDelete = (ids) => {
    db.collection("photo")
      .doc(ids)
      .delete()
      .then(() => {
        alert("Deleted Successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="content">
      <div className="content__gallery">
        {data.map(({ id, details }) => (
          <div className="content__box">
            <img src={details.imageUrl} alt={details.label} />
            <p>{details.label}</p>
            <button
              className="btn btn-danger"
              onClick={(e) => handleDelete(id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Content;
