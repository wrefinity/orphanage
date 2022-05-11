import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Router from "./Router";
import { Provider } from "react-redux";
import store from './mainStore'

function App() {
   return (
      <Provider store={store}>
         <Router />
      </Provider>
   )
}

export default App;
