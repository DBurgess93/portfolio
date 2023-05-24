import './App.scss'
import deepworkLanding from './images/deepworkLanding.png'
import defitLanding from './images/defitLanding.png'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

const Navbar = ({ handles }) => {
  return (
    <header>
      <nav>
        <ul className="nav-links headings">
          <li><a href="#about">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="DanielBurgessResume.pdf" target="_blank">Resume</a></li>
        </ul>
      </nav>
      <nav>
        <ul className="nav-links">
          {handles.map(handle => (
            <li key={handle.name}><a href={handle.url} target="_blank" rel="noreferrer" > {handle.icon} </a></li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

const TitleSection = () => {
  return (
    <div id="title">
      <h1 className="title">Daniel Burgess</h1>
      <h3>Full-Stack Web developer </h3>
      <p>I like to build minimalistic, functional webpages with a focus on user experience.</p>
    </div>
  )
}

const AboutMe = ({ leWagon, techStack }) => {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>
        Skilled Full-Stack Developer with a passion for coding, initially as a hobby with The Odin Project, escalating
        to completing an intense Web-Development bootcamp with <a href={leWagon.url} target="_blank" rel="noreferrer" >{leWagon.name}</a>.
        Committed to a lifetime of learning, my time now is spent expanding my knowledge in ReactJS, Typescript, design using Figma, and continually building projects to improve on all aspects of Full-Stack Development. <br />
        Location: Adelaide, South Australia
      </p>
      <div className="tech-stack">
        <ul>
          {techStack.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const ProjectSection = () => {
  return (
    <div id="projects">
      <h2>Projects</h2>
      <div className="cards">
        <a href="https://deepwork-official.herokuapp.com/" target="-blank">
          <div className="project-card">
            <img className="project-img" src={deepworkLanding} alt="Deepwork landing page"></img>
            <div className="card-info">
              <h3>Deepwork.</h3>
              <p> <strong>A web-app</strong> designed to help students track how they spend their study time, analize their data for a better understanding
                of their studying habits, and motivate them to reach a state of deep focus. </p>
              <p> <strong>Design:</strong> Sticking to minimalistic principles and a look that suggests 'knowledge lives here', while adding some visually pleasing creativity
              </p>
            </div>
          </div>
        </a>
        <a href="https://defit-official.herokuapp.com/" target="-blank">
          <div className="project-card">
            <img className="project-img" src={defitLanding} alt="Defit landing page"></img>
            <div className="card-info">
              <h3>De-fit.</h3>
              <p><strong>A web-app</strong> built to help bring together those who are in need of a fitness space and those who have one to share.</p>
              <p><strong>Design:</strong> Going for a darker theme, utilizing neon like colors to pierce through and give a fitness-feel to the app.
                another minimalistic styled site to keep things simple for the users.</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

const ContactSection = () => {
  return (
    <div id="contact">
      <h2>Contact</h2>
      <p>Looking for new opportunities to flex and build upon my programming skills, so feel free to get in touch!</p>
      <a className="primary-button" href="mailto:dan-burgess@hotmail.com">Say Hello 👋</a>
    </div>
  )
}

const FooterSection = () => {
  return (
    <div>
      <a href="#title" className="secondary-button">Top</a>
      <div className="footer">
        <p>Designed and Built by Daniel Burgess</p>
      </div>
    </div>
  )
}

const App = () => {
  const handles = [
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/daniel-burgess-668176186/",
      icon: < FaLinkedin />
    },
    {
      name: "GitHub",
      url: "https://github.com/DBurgess93",
      icon: <FaGithub />
    },
    {
      name: "Email",
      url: "mailto:dan-burgess@hotmail.com",
      icon: <FaEnvelope />
    }
  ]

  const leWagon = {
    name: "Le Wagon",
    url: "https://www.lewagon.com/"
  }

  const techStack = [
    "Ruby on Rails",
    "JavaScript",
    "ReactJS",
    "SCSS",
    "HTML5",
    "Figma",
    "PostgreSQL"
  ]

  return (
    <div>
      <Navbar handles={handles} />
      <div className="container">
        <TitleSection />
        <AboutMe leWagon={leWagon} techStack={techStack} />
        <ProjectSection />
        <ContactSection />
        <FooterSection />
      </div>
    </div>
  );
}

export default App;
