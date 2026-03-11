import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Developer Intern</h4>
                <h5>Seedlinglabs Pvt Ltd, Bangalore</h5>
              </div>
              <h3>Present</h3>
            </div>
            <p>
              Working on AI-powered solutions and intelligent systems.
              Building and integrating AI models, developing automation
              tools, and contributing to innovative projects using modern
              AI technologies and frameworks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
