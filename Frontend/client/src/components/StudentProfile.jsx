import React from 'react';

const StudentProfile = ({ data }) => {
  const {
    sr_no,
    name,
    avg_call_time,
    social_media_usage,
    class_participation_percentage,
    study_group_participation,
    reaction_to_feedback,
    img_link,
  } = data;

  return (
    <div className="student-profile">
      <h2>{name}</h2>
      <p>Serial Number: {sr_no}</p>
      <p>Average Call Time: {avg_call_time} minutes</p>
      <p>Social Media Usage: {social_media_usage} hours/day</p>
      <p>Class Participation Percentage: {class_participation_percentage}%</p>
      <p>Study Group Participation: {study_group_participation ? 'Yes' : 'No'}</p>
      <p>Reaction to Feedback: {reaction_to_feedback}</p>
      <img src={img_link} alt={`${name}'s profile`} style={{ width: '200px', borderRadius: '50%' }} />
    </div>
  );
};

export default StudentProfile;
