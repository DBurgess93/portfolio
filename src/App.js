
const Navbar = ({handles}) => {
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
          <li><a href={handles[0].url} target="_blank" rel="noreferrer">{handles[0].name} </a></li>
          <li><a href={handles[1].url} target="_blank" rel="noreferrer">{handles[1].name}</a></li>
          <li><a href={handles[2].url} target="_blank" rel="noreferrer">{handles[2].name}</a></li>
        </ul>
      </nav>
    </header>
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
  return (
    <div>
      <Navbar handles={handles} />
    </div>
  );
}

export default App;
