import React from "react";

const Contact = ({ content }) => {
  return (
    <div className="grid">
      <div className="column-6">
        <h3>{content.contactHeader}</h3>
        <ul>
          {content.contactLinks.map(({ title, url }) => (
            <li>
              <a href={url} target="_blank">
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="column-6">
        <h3>{content.resumeHeader}</h3>
        <a href="/camden_phalen_resume_2018.pdf" target="_blank">
          {content.resumeText}
        </a>
      </div>
    </div>
  );
};

export default Contact;
