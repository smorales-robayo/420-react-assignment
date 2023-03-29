import { Link } from "react-router-dom";

export default function Home() {
    return (
      <div className="homeBody">
        <div className="hero"> {/*Hero Content*/}
          <div class="square"></div>
          <div class="square"></div>
          <div class="square"></div>
        </div>
        <h1 className="title1">Build your World with us.</h1>
        <Link className="Button" to="/Projects">Learn More</Link>
      </div>
    );
  }