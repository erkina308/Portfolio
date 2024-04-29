import { Link } from "react-router-dom";
import MainContainer from "../styledComponents/MainContainer";
import ProjectsContainer from "../styledComponents/ProjectsContainer";
import SocialsContainer from "../styledComponents/SocialsContainer";
import PicContainer from "../styledComponents/PicContainer";
import ProfileContainer from "../styledComponents/ProfileContainer";
import ButtonContainer from "../styledComponents/ButtonContainer";
import CvBtn from "../styledComponents/CvBtn";
import ContactBtn from "../styledComponents/ContactBtn";
import GlobalStyles from "../styledComponents/GlobalStyles";
import linkedinLogo from "../assets/linkedin.png";
import githubLogo from "../assets/github.png";
import SocialsIcon from "../styledComponents/SocialsIcon";
import NavBar from "../components/NavBar";
import AboutContainer from "../styledComponents/AboutContainer";
import experience from "../assets/experience.png";
import education from "../assets/education.png";
import ExperienceContainer from "../styledComponents/ExperienceContainer";
import checkmark from "../assets/checkmark.png";
import projectTwoImg from "../assets/particle.png";
import projectThreeImg from "../assets/memory.png";
import emailPng from "../assets/email.png";
import ContactContainer from "../styledComponents/ContactContainer";
import Nav from "../styledComponents/Nav";
import "../App.css";

export default function MainPage() {
  return (
    <>
      <GlobalStyles />
      <NavBar />
      <MainContainer id="profile">
        {/* // profile */}
        <PicContainer>
          <img src="stock2.jpg" alt="Erkin Ayna profile picture" />
        </PicContainer>
        <ProfileContainer>
          <p className="p1-of-profile">Hello, I'm</p>
          <h1>Erkin Ayna</h1>
          <p className="p2">Junior Software Developer</p>
          <ButtonContainer>
            {/* <CvBtn
              className="btn-color-2"
              onClick={() => window.open("../assets/CVwithProjects.pdf")}
            >
              Download CV
            </CvBtn> */}
            <ContactBtn className="btn-color-1">
              <a
                href="#contact"
                style={{ textDecoration: "none", color: "white" }}
              >
                Contact Info
              </a>
            </ContactBtn>
            {/* // this section should have styled components after and the contact info should lead to a contacts page */}
          </ButtonContainer>
          {/* // Socials */}
          <SocialsContainer>
            <SocialsIcon
              src={linkedinLogo}
              alt="My Linkedin Profile"
              className="icon"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/erkin-ayna-113545271/",
                  "_blank"
                )
              }
            />
            <SocialsIcon
              src={githubLogo}
              alt="My Github Profile"
              className="icon"
              onClick={() =>
                window.open("https://github.com/erkina308", "_blank")
              }
            />
          </SocialsContainer>
        </ProfileContainer>
      </MainContainer>
      <AboutContainer id="about">
        <p className="p1">Get to know more</p>
        <h1>About me</h1>
        <div className="first">
          <div className="about-details-container">
            <div className="about-containers">
              <div className="experience_container">
                <img src={experience} alt="Experience icon" className="icon" />
                <h3>Experience</h3>
                <p>
                  3 months <br />
                  Full Stack Developer
                </p>
              </div>
              <div className="experience_container">
                <img src={education} alt="Education icon" className="icon" />
                <h3>Education</h3>
                <p>
                  BSc Hons <br />
                  Sport Rehabilitation
                </p>
              </div>
              {/* make sure to pay attention to these divs and how they work */}
            </div>
            <div className="text-container">
              <p className="about_text">
                A passionate Junior Software Developer, who enjoys the feeling
                of completing a project or even something as small as making a
                function that does what you require it to do. I am keen on
                always having a good structure to my day this includes, what I
                do when programming, and setting time frames on when to do
                activities and tasks throughout the day. This begins in the
                morning and continues to the evening.
              </p>
            </div>
          </div>
        </div>
      </AboutContainer>
      <ExperienceContainer id="experience">
        <p className="p1">Explore my</p>
        <h1>Experience</h1>
        <div className="experience-details-container">
          <div className="project_containers experience">
            <div className="details-container">
              <h2 className="experience-sub-title">Frontend Development</h2>
              <div className="article-container">
                <article>
                  <img src={checkmark} alt="Experience icon" className="icon" />
                  <div>
                    <h3>HTML</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img src={checkmark} alt="Experience icon" className="icon" />
                  <div>
                    <h3>CSS</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img src={checkmark} alt="Experience icon" className="icon" />
                  <div>
                    <h3>JavaScript</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img src={checkmark} alt="Experience icon" className="icon" />
                  <div>
                    <h3>React</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
              </div>
            </div>
            <div className="details-container">
              <h2 className="experience-sub-title">Backend Development</h2>
              <div className="article-container">
                <article>
                  <img src={checkmark} alt="Experience icon" className="icon" />
                  <div>
                    <h3>SQL</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img src={checkmark} alt="Experience icon" className="icon" />
                  <div>
                    <h3>Node.js</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img src={checkmark} alt="Experience icon" className="icon" />
                  <div>
                    <h3>Express.js</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img src={checkmark} alt="Experience icon" className="icon" />
                  <div>
                    <h3>MongoDB</h3>
                    <p>Beginner</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </ExperienceContainer>
      <ProjectsContainer id="projects">
        <p className="p1 project_p1">Browse my recent</p>
        <h1>Projects</h1>
        <div className="experience-details-container">
          <div className="project_containers">
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src={projectThreeImg}
                  alt="Project-1"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">
                Memory Forge
              </h2>
              <ButtonContainer>
                <CvBtn
                  className="btn btn-color-2 project-btn"
                  onClick={() =>
                    window.open(
                      "https://github.com/erkina308/memory-forge-fe",
                      "_blank"
                    )
                  }
                >
                  Github
                </CvBtn>
                <CvBtn
                  className="btn btn-color-2 project-btn"
                  onClick={() =>
                    window.open("https://memory-forge.netlify.app", "_blank")
                  }
                >
                  Live Demo
                </CvBtn>
              </ButtonContainer>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src={projectTwoImg}
                  alt="Project-2"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">Particle</h2>
              <ButtonContainer>
                <CvBtn
                  className="btn btn-color-2 project-btn"
                  onClick={() =>
                    window.open(
                      "https://github.com/erkina308/e-fe-nc-news",
                      "_blank"
                    )
                  }
                >
                  Github
                </CvBtn>
                <CvBtn
                  className="btn btn-color-2 project-btn"
                  onClick={() =>
                    window.open("https://p-article.netlify.app", "_blank")
                  }
                >
                  Live Demo
                </CvBtn>
              </ButtonContainer>
            </div>
            {/* <div className="details-container color-container">
              <div className="article-container">
                <img
                  src={projectThreeImg}
                  alt="Project-3"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">
                Project Three
              </h2>
              <ButtonContainer>
                <CvBtn className="btn btn-color-2 project-btn">Github</CvBtn>
                <CvBtn className="btn btn-color-2 project-btn">Live Demo</CvBtn>
              </ButtonContainer>
            </div> */}
          </div>
        </div>
      </ProjectsContainer>
      <ContactContainer id="contact">
        <p className="p1">Get in Touch</p>
        <h1>Contact Me</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <img
              src={emailPng}
              alt="Email icon"
              className="icon contact-icon"
            />
            <p>
              <a>erkinay308@gmail.com</a>
            </p>
          </div>
          <div className="contact-info-container">
            <img
              src={emailPng}
              alt="Email icon"
              className="icon contact-icon"
            />
            <p>
              <a
                style={{ textDecoration: "none", color: "black" }}
                href="https://www.linkedin.com/in/erkin-ayna-113545271/"
              >
                Linkedin
              </a>
            </p>
          </div>
        </div>
      </ContactContainer>
      <footer>
        {/* <Nav>
          <div className="nav-links-container">
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </Nav> */}
        <p>Copyright &#169; 2024 Erkin Ayna. All Rights Reserved</p>
      </footer>
    </>
  );
}
