import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy",
        location: "default",
      },
    };
  }

  async componentDidMount() {
    const userData = await fetch(
      "https://api.github.com/users/yogeshbhardwaj11"
    );
    const json = await userData.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h2>location: {location}</h2>
        <h2>Contact: "@yogeshbhardwaj11"</h2>
      </div>
    );
  }
}

export default UserClass;
