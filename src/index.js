import reactDom from "react-dom";
import App from "./App";
import NavBarHeader from "./NavBarHeader";

reactDom.render(<NavBarHeader />, document.getElementById('header'));
reactDom.render(<App />, document.getElementById('root'));