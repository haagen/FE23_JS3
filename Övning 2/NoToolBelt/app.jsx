"use strict";

class MyFirstApplication extends React.Component {
  state = {};

  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement("form", null, [
      React.createElement("h1", null, "Anmäl till Danslektion"),
      React.createElement("form", null, [
        React.createElement("label", { htmlFor: "name" }, "Namn"),
        React.createElement("input", { id: "name" }, null),
        React.createElement("br"),
        React.createElement("label", { htmlFor: "email" }, "Email"),
        React.createElement("input", { id: "email" }, null),
        React.createElement("br"),
        React.createElement("button", null, "Skicka"),
      ]),
    ]);
  }
}

const root = document.getElementById("root");
ReactDOM.render(React.createElement(MyFirstApplication), root);
