export default function Projects() {
    return (
      <div className="projectsBody">
        <h1 className="title1">Our Latest Projects</h1>
        <div className="flexProjects"> {/*Row 1*/}
          <div className="contentP">
            <p className="titleP">Lumina II Houses</p>
            <p className="textP">LA, California. USA</p>
          </div>
          <div className="contentP">
            <p className="titleP">Lumina Coworking L.L</p>
            <p className="textP">Toronto, Ontario. CA</p>
          </div>
          <div className="contentP">
            <p className="titleP"> LM Music Studio</p>
            <p className="textP">NYC, New York, USA</p>
          </div>
        </div>

        <div className="flexProjects"> {/*Row 2*/}
          <div className="contentP">
            <p className="titleP">Miami Dade Mall</p>
            <p className="textP">Miami, Florida. USA</p>
          </div>
          <div className="contentP">
            <p className="titleP">Hollywood North Mall</p>
            <p className="textP">Vancouver, BC. CA</p>
          </div>
          <div className="contentP">
            <p className="titleP">Lumina Films set </p>
            <p className="textP">Toronto, Ontario, CA</p>
          </div>
        </div>
      </div>
    );
  }