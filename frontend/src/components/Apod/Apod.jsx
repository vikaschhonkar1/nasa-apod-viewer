import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";


const ApodPage = () => {
  const [apodData, setApodData] = useState({});

  useEffect(() => {
    const fetchApodData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/apod`);
        if (response.ok) {
          const data = await response.json();
          setApodData(data);
        } else {
          console.error("Error fetching APOD:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching APOD:", error.message);
      }
    };

    fetchApodData();
  }, []);

  return (
    <>
      <div className={styles["apod-container"]}>
      <div className={styles["image-container"]}>
        <img src={apodData.url} alt="apod" className={styles["apod-image"]} />
      </div>
      <div>
        <h2 className={styles.title}>{apodData.title}</h2>
      </div>
      <div className={styles.date}>Date: {apodData.date}</div>
      <div className={styles.explanation}>{apodData.explanation}</div>
    </div>
    </>
  );
};

export default ApodPage;
