import { NavLink } from "react-router-dom"; 
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";
import "./style.css"; 


export default function Header() {
  return (
    <div id="header">
      <nav id="navbar">
        <h2><NavLink to="/"><BiCameraMovie/> MoviesLib</NavLink></h2>
        <form action="#">
          <input 
            type="search" 
            name="search" 
            id="search" 
            placeholder="Search for a movie..."
             />
          <button type="submit">
            <BiSearchAlt2 />
          </button>
        </form>
      </nav>
    </div>
  )
}
