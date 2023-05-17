
const Navbar = ({ handles }) => {
  return (
    <header>
      <nav>
        <ul>
          <li>About Me</li>
          <li>Projects</li>
          <li>Contact</li>
          <li>Resume</li>
        </ul>
      </nav>
      <nav>
        <ul>
          {handles.map(handle => (
            <li key={handle.name}><a href={handle.url} target="_blank" rel="noreferrer">{handle.name} </a></li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

const Title = () => {
  return (
    <div>
      <h1>Daniel Burgess</h1>
      <h3>Full-Stack Web developer </h3>
      <p>I like to build minimalistic, functional webpages with a focus on user experience.</p>
    </div>
  )
}

const AboutMe = ({ leWagon, techStack }) => {
  return (
    <div>
      <h2>About Me</h2>
      <p>
        Skilled Full-Stack Developer with a passion for coding, initially as a hobby with The Odin Project, escalating
        to completing an intense Web-Development bootcamp with <a href={leWagon.url} target="_blank" rel="noreferrer" >{leWagon.name}</a>.
        Committed to a lifetime of learning, my time now is spent expanding my knowledge in ReactJS, Typescript, design using Figma, and continually building projects to improve on all aspects of Full-Stack Development. <br />
        Location: Adelaide, South Australia
      </p>
      <div>
        <ul>
          {techStack.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const App = () => {
  const handles = [
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/daniel-burgess-668176186/"
    },
    {
      name: "GitHub",
      url: "https://github.com/DBurgess93"
    },
    {
      name: "Email",
      url: "mailto:dan-burgess@hotmail.com"
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
      <Title />
      <AboutMe leWagon={leWagon} techStack={techStack} />
    </div>
  );
}

export default App;
