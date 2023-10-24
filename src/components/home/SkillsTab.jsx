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
          skills={skills.slice(0, skills.length/4)}
          isScrolled={isScrolled}
        />
      </Col>
      <Col xs={12} md={3}>
        <SkillsSection
          skills={skills.slice(skills.length/4 , (skills.length/4) * 2)}
          isScrolled={isScrolled}
        />
      </Col>
      <Col xs={12} md={3}>
        <SkillsSection
          skills={skills.slice((skills.length/4) * 2, (skills.length/4) * 3)}
          isScrolled={isScrolled}
        />
      </Col>
      <Col xs={12} md={3}>
        <SkillsSection
          skills={skills.slice((skills.length/4) * 3,(skills.length))}
          isScrolled={isScrolled}
        />
      </Col>
    </>
  );
}

export default SkillsTab;
