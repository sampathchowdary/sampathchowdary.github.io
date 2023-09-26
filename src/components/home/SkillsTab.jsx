import React from "react";
import Col from "react-bootstrap/Col";
import SkillsBar from "./SkillsBar";

function SkillsSection({ skills, isScrolled }) {
  return (
    <>
      {skills.map((skill, index) => (
        <SkillsBar
          key={`${skill}-${index}`}
          skill={skill.name}
          value={skill.value}
          isScrolled={isScrolled}
        />
      ))}
    </>
  );
}

function SkillsTab({ skills, isScrolled }) {
  return (
    <>
      <Col xs={12} md={3}>
        <SkillsSection
          skills={skills.slice(0, 10)}
          isScrolled={isScrolled}
        />
      </Col>
      <Col xs={12} md={3}>
        <SkillsSection
          skills={skills.slice(11, 20)}
          isScrolled={isScrolled}
        />
      </Col>
      <Col xs={12} md={3}>
        <SkillsSection
          skills={skills.slice(21, 30)}
          isScrolled={isScrolled}
        />
      </Col>
      <Col xs={12} md={3}>
        <SkillsSection
          skills={skills.slice(31,40)}
          isScrolled={isScrolled}
        />
      </Col>
    </>
  );
}

export default SkillsTab;
