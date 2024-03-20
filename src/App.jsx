import OrderForm from "./components/formComponents/OrderForm"
import Success from "./components/formComponents/Success";
import HomePage from "./pages/HomePage"

import { BrowserRouter as Router, Route, Switch,} from "react-router-dom";


function App() {

  return (
    <>
     <Router>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/order" component={OrderForm}/>
        <Route path="/success" component={Success}/>
      </Switch>
     </Router>
    </>
  )
}

export default App
