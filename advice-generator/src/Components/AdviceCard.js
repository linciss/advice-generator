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
          <Card.Title>ADVICE #{advice.id}</Card.Title>
          <Card.Text>"{advice.advice}"</Card.Text>
          <div className="line">
            <div className="space"></div>
            {/* <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
                <g transform="translate(212)" fill="#CEE3E9">
                  <rect width="6" height="16" rx="3" />
                  <rect x="14" width="6" height="16" rx="3" />
                </g>
              </g>
            </svg> */}
            {/* <svg className="space"></svg> */}
          </div>
          <Button onClick={fetchAdvice}>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
                fill="#202733"
              />
            </svg>
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default AdviceCard;
// Advice API url: https://api.adviceslip.com/advice
