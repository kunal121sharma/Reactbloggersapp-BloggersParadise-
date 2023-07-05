import BlogDetails from "./components/BlogDetails/BlogDetails";
import Create from "./components/Create/Create";
import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import NotFound from "./components/NotFound/NotFound";



function App() {
  

  return (
    <Router>
  <div className="App">
    <Navbar />
    <div className="content">
      <Switch>
        <Route exact path="/">
        <Homepage />
        </Route>
        <Route path="/Create">
        <Create/>
        </Route>
        <Route path="/blogs/:id">
        <BlogDetails/>
        </Route>
        <Route path="*">
        <NotFound/>
        </Route>


      </Switch>
     
    </div>
  </div>
    </Router>
  
  );
}

export default App;
