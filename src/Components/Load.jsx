import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Load = ({ onLoadingComplete }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const count = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter < 100) {
          return prevCounter + 0.5; // Adjust this value to control speed (0.5 increments)
        } else {
          clearInterval(count);
          return 100;
        }
      });
    }, 50); // Adjust the interval time to control speed
  }, []);

  const handleClick = () => {
    onLoadingComplete(); // Call the function to display main content
  };

  return (
    <Loading>
      {counter < 100 ? (
        <ProgressBar>
          <Progress style={{ width: `${counter}%` }} />
        </ProgressBar>
      ) : null}
      {counter === 100 && (
        <Button onClick={handleClick}>START</Button>
      )}
    </Loading>
  );
};

export default Load;

const Loading = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  position: absolute;
  top: 0;
  left: 0;
`;

const ProgressBar = styled.div`
  width: 30%;
  height: 5px;
  background-color: rgb(54, 53, 53);
  border-radius: 5px;
  margin-bottom: 20px;
  overflow: hidden;
`;

const Progress = styled.div`
  height: 100%;
  background-color:rgb(173, 169, 169);
  transition: width 0.4s ease-out;
`;

const Button = styled.button`
  background-color: black;
  color: rgb(54, 53, 53);
  border: none;
  border-radius:24px;
  padding: 10px 20px;
  font-size: 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border:2px solid rgb(54, 53, 53);

  
`;
