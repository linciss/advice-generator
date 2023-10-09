import { Card, Button } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
function AdviceCard() {
  const [advice, setAdvice] = useState('');

  useEffect(() => {
    fetchAdvice();
  }, []);

  const fetchAdvice = async () => {
    await fetch('https://api.adviceslip.com/advice')
      .then((res) => res.json())
      .then((data) => setAdvice(data.slip))
      .catch((err) => console.log(err));

    console.log(advice);
  };
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>Advice #{advice.id}</Card.Title>
          <Card.Text>{advice.advice}</Card.Text>
          <div className="line">
            <hr></hr>

            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
                fill="#202733"
              />
            </svg>
            <hr></hr>
          </div>
          <Button onClick={fetchAdvice}>Click</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default AdviceCard;
// Advice API url: https://api.adviceslip.com/advice
