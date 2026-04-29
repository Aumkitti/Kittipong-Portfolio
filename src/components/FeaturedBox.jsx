import avatar from "../assets/images/Kitti.jpg";
import cv from "../assets/download/Resume kittipong.pdf";

//หน้า 2

const FeaturedBox = () => {
  return (
    <section className="featured-box" id="home">
      <div className="featured-text">
        <div className="featured-text-card">
          <span>Kittipong Dachjit</span>
        </div>
        <div className="featured-name">
          <p>
            I'm <span className="typedText"></span>
          </p>
        </div>
        <div className="featured-text-info">
          <p>
            Software Engineering graduate with a strong interest in Frontend
            Development. Experienced in building web applications and eager to
            contribute to real-world projects while continuously improving as a
            developer.
          </p>
        </div>
        <div className="featured-text-btn">
          <a href={cv} download>
            <button className="btn">
              Download Resume <i className="uil uil-file-alt"></i>
            </button>
          </a>
        </div>
        <div className="social_icons">
          <div className="icon">
            <a href="https://www.instagram.com/aum.ktpd/" target="_blank">
              <i className="uil uil-instagram"></i>
            </a>
          </div>

          <div className="icon">
            <a
              href="https://www.facebook.com/profile.php?id=100015293261179"
              target="_blank"
            >
              <i className="uil uil-facebook"></i>
            </a>
          </div>
          <div className="icon">
            <a href="https://github.com/Aumkitti" target="_blank">
              <i className="uil uil-github-alt"></i>
            </a>{" "}
          </div>
        </div>
      </div>
      <div className="featured-image">
        <div className="image">
          <img src={avatar} alt="avatar" />
        </div>
      </div>
      <div className="scroll-icon-box">
        <a href="#about" className="scroll-btn">
          <i className="uil uil-mouse-alt"></i>
          <p>Scroll Down</p>
        </a>
      </div>
    </section>
  );
};

export default FeaturedBox;
