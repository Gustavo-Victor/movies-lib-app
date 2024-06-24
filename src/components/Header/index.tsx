import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom"; 
import { NavLink } from "react-router-dom"; 
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";
import "./style.css"; 


export default function Header() {
  const [search, setSearch] = useState(""); 
  const navigate = useNavigate(); 

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault(); 

    if(search) {      
      navigate(`/search?q=${search}`); 
      setSearch(""); 
    } else {
      return ;
    }
  }

  return (
    <div id="header">
      <nav id="navbar">
        <h2 id="logo"><NavLink to="/"><BiCameraMovie/> MoviesLib</NavLink></h2>
        <form onSubmit={handleSubmit} id="search-form" action="#">
          <input 
            type="search" 
            name="search" 
            id="search" 
            placeholder="Search for a movie..."
            value={search || ""}
            onChange={(e) => setSearch(e.target.value)}
             />
          <button className="btn" type="submit">
            <BiSearchAlt2 />
          </button>
        </form>
      </nav>
    </div>
  )
}
