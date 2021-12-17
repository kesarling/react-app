import reactDom from "react-dom";
import AddOrderForm from "./AddOrderForm";
import App from "./App";

reactDom.render(<AddOrderForm />, document.getElementById('header'));
reactDom.render(<App />, document.getElementById('root'));