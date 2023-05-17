
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
          {handles.map(handle => (
            <li><a href={handle.url} target="_blank" rel="noreferrer">{handle.name} </a></li>
          ))}
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
