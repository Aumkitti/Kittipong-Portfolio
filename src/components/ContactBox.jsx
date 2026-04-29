const ContactBox = () => {
  return (
    <section className="section" id="contact">
      <div className="top-header">
        <h1>Get in touch</h1>
        <span>Do you have a project in your mind, contact me here</span>
      </div>
      <div className="row">
        <div className="col">
          <div className="contact-info">
            <h2>
              Find Me <i className="uil uil-corner-right-down"></i>
            </h2>
            <p>
              <i className="uil uil-envelope"></i> Email:
              kittipong.ktpd@gmail.com
            </p>
            <p>
              <i className="uil uil-phone"></i> Tel: +66 98 865 0599
            </p>
            <p>
              <i className="uil uil-phone"></i> Tel: +66 96 340 9260
            </p>
          </div>
        </div>
        <div className="col">
          <div className="contact-info">
            <h2>Social</h2>

            <p>
              <i className="uil uil-github"></i>
              <a
                href="https://github.com/Aumkitti"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </p>

            <p>
              <i className="uil uil-linkedin"></i>
              <a
                href="https://www.linkedin.com/in/kittipong-dachjit-56b084407/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </p>

            <p>
              <i className="uil uil-instagram"></i>
              <a
                href="https://www.instagram.com/aum.ktpd/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </p>

            <p>
              <i className="uil uil-facebook"></i>
              <a
                href="https://www.facebook.com/profile.php?id=100015293261179"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBox;
