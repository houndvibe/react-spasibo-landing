import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import PartnersPage from './components/Pages/PartnersPage'
import { Route, Switch } from 'react-router-dom'
import CouponsPage from './components/EmptyRoutesPages/CouponsPage'
import ImpressionsPage from './components/EmptyRoutesPages/ImpressionsPage'
import FlightsPage from './components/EmptyRoutesPages/FlightsPage'
import ConnectPage from './components/EmptyRoutesPages/ConnectPage'
import GoodsPage from './components/EmptyRoutesPages/GoodsPage'
import HotelsPage from './components/EmptyRoutesPages/HotelsPage'
import CarsharingPage from './components/EmptyRoutesPages/CarsharingPage'
import InsurancePage from './components/EmptyRoutesPages/InsurancePage'
import TicketsPage from './components/EmptyRoutesPages/TicketsPage'
import ActionPage from './components/Pages/ActionPage';
import './css/App.css';


const App = (props) => {
  const routes = (
    <Switch>
      <Route path="/" exact component={PartnersPage} />
      <Route path="/ACTION" exact component={ActionPage} />
      <Route path="/coupons" exact component={CouponsPage} />
      <Route path="/impressions" exact component={ImpressionsPage} />
      <Route path="/flights" exact component={FlightsPage} />
      <Route path="/connect" exact component={ConnectPage} />
      <Route path="/goods" exact component={GoodsPage} />
      <Route path="/hotels" exact component={HotelsPage} />
      <Route path="/carsharing" exact component={CarsharingPage} />
      <Route path="/insurance" exact component={InsurancePage} />
      <Route path="/tickets" exact component={TicketsPage} />
    </Switch>
  );

  return (
    <div className="App">
      <Header />
      {routes}
      <Footer />
    </div>
  );

}

export default App;
