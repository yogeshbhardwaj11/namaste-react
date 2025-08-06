import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="about p-10">
        <h1 className="mb-10">About Us</h1>
        <UserClass
          name="Yogesh Bhardwaj"
          location="Delhi NCR"
          contact="@yogeshbhardwaj11"
        />
      </div>
    );
  }
}

// const About= () => {
//   return (
// 		<div className="about">
// 			<h1>About Us</h1>
// 			<UserClass
// 				name="Yogesh Bhardwaj"
// 				location="Delhi NCR"
// 				contact="@yogeshbhardwaj11"
// 			/>
// 		</div>
//   );
// }

export default About;
