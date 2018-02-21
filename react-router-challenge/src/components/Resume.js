import React from 'react';
import { Link } from 'react-router';
import SkillsContainer from '../containers/SkillsContainer';
import VolunteerExperienceContainer from '../containers/VolunteerExperienceContainer';
import WorkExperienceContainer from '../containers/WorkExperienceContainer';
import EducationExperienceContainer from '../containers/EducationExperienceContainer';

const Resume = (props) => {
 return(
   <div className="small-12 small-centered columns">
     <div className="large-12 columns">
       <ul className="list">
    <li><a className="link" href="#skills">Skills</a></li>
    <li><a className="link" href="#education">Education</a></li>
    <li><a className="link" href="#past-work">Past Work</a></li>
    <li><a className="link" href="#volunteer-experience">Volunteer Experience</a></li>
  </ul>
</div>

     <div className="resume-section" id="skills"><SkillsContainer /></div>
     <div className="resume-section" id="education"><EducationExperienceContainer /></div>
     <div className="resume-section" id="past-work"><WorkExperienceContainer /></div>
     <div className="resume-section" id="volunteer-experience"><VolunteerExperienceContainer /></div>
   </div>
 )
}

export default Resume;
