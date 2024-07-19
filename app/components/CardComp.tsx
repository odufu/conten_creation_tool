import styles from "../styles/NavBar.module.css";

const About = () => {
  return (
    <div className={styles.card}>
      <img src="/w3images/team2.jpg" alt="John" />
      <h1>Joel Odufu</h1>
      <p className="title">Applicant, Example</p>
      <p>Full Stack Developer</p>
      <div>
        <a href="#">
          <i className="fa fa-dribbble"></i>
        </a>
        <a href="#">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="#">
          <i className="fa fa-linkedin"></i>
        </a>
        <a href="#">
          <i className="fa fa-facebook"></i>
        </a>
      </div>
      <p>
        <button>Contact</button>
      </p>
    </div>
  );
};

export default About;
