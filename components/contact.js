import React from "react";

const Contact = ({ content }) => {
  return (
    <div className="grid" id="contact">
      <div className="column-6">
        <h3>{content.contactHeader}</h3>
        <ul>
          {content.contactLinks.map(({ title, url }, index) => (
            <li key={index}>
              <a href={url} target="_blank">
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="column-6">
        <h3>{content.resumeHeader}</h3>
        <a href={content.resumeLink} target="_blank">
          {content.resumeText}
        </a>
      </div>
    </div>
  );
};

export default Contact;
