import React from "react";
import Badge from "react-bootstrap/Badge";

function SkillsBar({ skill, value, isScrolled }) {
  return (
    <div>
      <Badge bg="secondary">{skill}</Badge>{' '}
    </div>
  );
}

export default SkillsBar;
