import { NavLink } from "react-router-dom"; 
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";
import "./style.css"; 


export default function Header() {
  return (
    <div id="header">
      <nav id="navbar">
        <h2 id="logo"><NavLink to="/"><BiCameraMovie/> MoviesLib</NavLink></h2>
        <form id="search-form" action="#">
          <input 
            type="search" 
            name="search" 
            id="search" 
            placeholder="Search for a movie..."
             />
          <button className="btn" type="submit">
            <BiSearchAlt2 />
          </button>
        </form>
      </nav>
    </div>
  )
}
