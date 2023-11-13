import { Link, useMatch, useResolvedPath } from "react-router-dom"
import '../css/NavBar.css';



export default function Navbar() {
  return (
    <div class="header">
      <nav className='navbar'>
      <Link to="/" className="site-title">
        Home
      </Link>
      <ul>
        <CustomLink to="/projects">Projects</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </ul>
      </nav>
    </div>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}