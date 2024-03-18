import React from 'react'
import { BrowserRouter as Router, Route, Switch , Link} from "react-router-dom";
import OrderForm from '../components/formComponents/OrderForm';
const HomaPage = () => {
  return (
    <div>
      <Router>
        <button><Link to="/order">Acıktım</Link></button>
        <Switch>
            <Route path="/order" component={OrderForm}/>
        </Switch>
      </Router>
    </div>
  )
}

export default HomaPage
