import React from 'react';

const PageHeader = (props) => (
  <section className={`hero ${props.color}`}>
    <div className="hero-body">
      <div className="container">
        <h1 className="title">
          {props.title}
        </h1>
        <h3 className="subtitle">
          {props.children}
        </h3>
      </div>
    </div>
  </section>
)
export default PageHeader;
