import React from "react";


function AISection() {
  return (
    <section id="ai" className="ai-section section">

      <div className="section-container">

        <div className="ai-header">
          <p>AI & AUTOMATION</p>

          <h2>
            Moving from applications
            <span>to intelligent systems.</span>
          </h2>

          <p className="ai-intro">
            I'm exploring how AI can be combined with full-stack
            development to create software that doesn't just store
            information, but can understand, process and act on it.
          </p>
        </div>

        <div className="ai-grid">

          <article className="ai-card">
            <div className="ai-icon">AI</div>

            <h3>AI Applications</h3>

            <p>
              Building applications that integrate AI models and APIs
              to provide useful responses, analysis and intelligent
              interactions.
            </p>
          </article>

          <article className="ai-card">
            <div className="ai-icon">⚙</div>

            <h3>Automation</h3>

            <p>
              Exploring automated workflows that reduce repetitive
              work and connect different systems through APIs.
            </p>
          </article>

          <article className="ai-card">
            <div className="ai-icon">↗</div>

            <h3>Intelligent Workflows</h3>

            <p>
              Interested in systems that can evaluate information,
              make decisions and trigger appropriate actions.
            </p>
          </article>

        </div>

        <div className="ai-focus">
          <span>Currently exploring</span>

          <div>
            <b>AI APIs</b>
            <b>Chatbots</b>
            <b>Workflow Automation</b>
            <b>Response Evaluation</b>
            <b>API Integrations</b>
          </div>
        </div>

      </div>

    </section>
  );
}

export default AISection;