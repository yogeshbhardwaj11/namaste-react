import React from "react";
import UserContext from "../utils/UserContext";

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
    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="max-w-md mx-auto bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden flex">
        <div className="w-32 h-32 flex-shrink-0">
          <img
            className="w-full h-full object-cover"
            src={avatar_url}
            alt="User profile picture"
          />
        </div>

        <div className="p-4 flex flex-col justify-center">
          <h2 className="text-xl font-semibold text-gray-900">{name}</h2>
          <UserContext.Consumer>
            {({ userLoggedIn }) => (
              <p className="text-sm text-gray-500">{userLoggedIn}</p>
            )}
          </UserContext.Consumer>
          <p className="text-sm text-gray-500">Full Stack Develper</p>
          <p className="text-sm text-gray-500">Delhi</p>
          <p className="mt-2 text-gray-600 text-sm">
            Versatile developer with a passion for building scalable web
            applications and crafting seamless user experiences from front to
            back.
          </p>
          <div className="mt-3 flex space-x-3">
            <a href="#" className="text-blue-500 text-sm hover:underline">
              Follow
            </a>
            <a href="#" className="text-gray-500 text-sm hover:underline">
              Message
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default UserClass;
