import React from 'react';
import './timeline.css';

export default function Timeline({ items = [] }) {
  return (
    <div className="timeline">
      {items.map((it, idx) => (
        <div className="timeline-item" key={idx}>
          <div className="timeline-marker" />
          <div className="timeline-content">
            <span className="timeline-date">{it.date}</span>
            <h3 className="timeline-title">{it.title}</h3>
            <p className="timeline-desc">{it.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
