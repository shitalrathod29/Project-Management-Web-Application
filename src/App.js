import './App.css';
import { BrowserRouter as Router, Route,Link,Switch} from "react-router-dom";
import Home2 from './Home2';
import SignInSide from "./components/SignInSide";
import SignUpSide from "./components/SignUpSide";
import ProjectDetails from "./components/ProjectDetails";
import NoPage from "./components/NoPage";
import AddProject from "./components/Projectlist";
import FileUpload from "./components/FileUpload";
import PersonalDetails from "./components/PersonalDetails";
import UserTable from "./components/Userdetails";

function App() {
  return (
    <div>
      <Router>
         <Switch>
          <Route exact path="/" component={SignInSide} />
          <Route exact path="/signin" component={SignInSide} />
          <Route exact path="/signup" component={SignUpSide} />
          <Route exact path="/projectdetails" component={ProjectDetails} />
          <Route exact path="/addprj" component={AddProject} />
          <Route exact path="/fileupload" component={FileUpload} />
          <Route exact path="/personaldetails" component={PersonalDetails} />
          <Route exact path="/userdetails" component={UserTable} />
          <Route  path="/*" component={NoPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;