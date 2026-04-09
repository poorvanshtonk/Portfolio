import React from 'react';

const Connect = () => {
  return (
    <section id="connect" className="section container-fluid">
      <h2 className="section-title hidden">Let’s Connect</h2>

      <div className="row g-5 align-items-center mt-3">
        <div className="col-12 col-md-7 hidden">
          <p className="connect-text">
            Interested in collaborating, hiring, or discussing ideas?
            Let’s connect and build something impactful.
          </p>

          <div className="connect-icons">
            <a
              href="https://github.com/poorvanshtonk"
              target="_blank"
              rel="noreferrer"
              className="icon-link d-inline-flex align-items-center justify-content-center"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden="true">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56 0-.28-.01-1.2-.02-2.17-3.2.7-3.88-1.36-3.88-1.36-.52-1.31-1.27-1.66-1.27-1.66-1.04-.71.08-.69.08-.69 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.72-1.54-2.56-.29-5.25-1.28-5.25-5.68 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.17A10.9 10.9 0 0 1 12 6.03c.97 0 1.95.13 2.86.38 2.19-1.48 3.15-1.17 3.15-1.17.63 1.59.24 2.77.12 3.06.74.8 1.18 1.82 1.18 3.07 0 4.41-2.69 5.38-5.26 5.67.41.35.78 1.05.78 2.12 0 1.54-.01 2.77-.01 3.15 0 .31.21.67.8.55A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
              </svg>
            </a>

            <a
              href="https://linkedin.com/in/poorvansh-tonk-7170b8366/"
              target="_blank"
              rel="noreferrer"
              className="icon-link d-inline-flex align-items-center justify-content-center"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden="true">
                <path d="M4.98 3.5A1.75 1.75 0 1 0 5 7a1.75 1.75 0 0 0-.02-3.5ZM3.5 8.75h3V20h-3V8.75Zm5.25 0h2.88v1.54h.04c.4-.76 1.38-1.79 2.84-1.79 3.04 0 3.6 2 3.6 4.59V20h-3v-6.12c0-1.46-.03-3.34-2.03-3.34-2.04 0-2.36 1.59-2.36 3.24V20h-2.97V8.75Z" />
              </svg>
            </a>

            <a
              href="mailto:poorvanshtonk@gmail.com"
              className="icon-link d-inline-flex align-items-center justify-content-center"
              aria-label="Email"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden="true">
                <path d="M3 5.5h18A1.5 1.5 0 0 1 22.5 7v10a1.5 1.5 0 0 1-1.5 1.5H3A1.5 1.5 0 0 1 1.5 17V7A1.5 1.5 0 0 1 3 5.5Zm0 1.8v.29l9 5.76 9-5.76V7.3H3Zm18 2.43-8.6 5.5a.75.75 0 0 1-.8 0L3 9.73V17h18V9.73Z" />
              </svg>
            </a>

            <a
              href="https://calendly.com/poorvanshtonk"
              target="_blank"
              rel="noreferrer"
              className="icon-link d-inline-flex align-items-center justify-content-center"
              aria-label="Calendly"
            >
              <svg viewBox="0 0 24 24" fill="none" width="22" height="22" aria-hidden="true">
                <rect x="3" y="4.5" width="18" height="16" rx="3" stroke="currentColor" strokeWidth="1.8" />
                <path d="M7 2.75v3.5M17 2.75v3.5M3 9.25h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M8 13h3M8 16h5M15.5 13.25l1 .9 1.75-2.15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        <div className="col-12 col-md-5 d-flex justify-content-md-end hidden delay-200">
          <a href="/Users/poorvanshtonk/Downloads/Resume-POORVANSH TONK.pdf" className="btn-primary-custom large text-center" download>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Connect;
