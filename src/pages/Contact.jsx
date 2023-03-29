import { Link } from "react-router-dom";


export default function Contact() {
    return (
      <div>
        <h1 className="title1">Contact Lumina Architecture</h1>
        <div action="" method="post">
          <div className="contactBody"> {/*Form*/}
            <legend className="leginfo">Personal Information</legend>
              <input type="text" className="box-input" placeholder="First Name"></input>
              <input type="text" className="box-input" placeholder="Last Name"></input>
              <input type="text" className="box-input" placeholder="Email"></input>
            <legend clasNames="legloc">How can we help you?</legend>
            <input className="inputText" type="text" placeholder="Write your message here"></input>
            <input type="submit" className="submit-input" value="Submit"></input>
          </div>
			  </div>
      </div>
    );
  }