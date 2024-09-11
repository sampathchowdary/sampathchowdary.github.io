import React from 'react';

import {
  Col,
} from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="6">
      <div className="pb-5 text-center">
        <a href={data.companyUrl}  target="_blank">
        <img className=" bg-white mb-3" style={{height: '70px', width: '300px'}} src={data.companylogo} alt={data.companyName} />
        </a>
        <p className="lead">
          {data.role}
          <br />
          {data.date}
        </p>

      </div>
    </Col>
  );
}

export default ExperienceCard;