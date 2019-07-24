import React from 'react';
import PropType from 'prop-types';

const Skill = ({ skill }) => <div>{skill}</div>;

const SkillsList = ({ skills }) => {
  const skillItems = skills.map((skill, index) => <Skill index={`skill_${index}`} skill={skill} />);

  return (
    <div>
      Skills go here...
      {skillItems}
    </div>
  );
};

Skill.propTypes = {
  skill: PropType.string,
};

Skill.defaultProps = {
  skill: null,
};

SkillsList.propTypes = {
  skills: PropType.arrayOf(PropType.string),
};

SkillsList.defaultProps = {
  skills: [],
};

export default SkillsList;
