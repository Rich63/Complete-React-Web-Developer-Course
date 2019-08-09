import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "../components/pages/Header";
import HomePage from "../components/pages/HomePage";
import PortfolioPage from "../components/pages/PortfolioPage";
import PortfolioItemPage from "../components/pages/PortfolioItemPage";
import ContactPage from "../components/pages/ContactPage";
import NotFoundPage from "../components/pages/NotFoundPage";

const PortfolioRouter = () => (
  <BrowserRouter>
    <div>
    <Header />
    <Switch>
      <Route path="/" component={ HomePage } exact={ true } />
      <Route path="/portfolio" component={ PortfolioPage } exact={ true } />
      <Route path="/portfolio/:id" component={ PortfolioItemPage } />
      <Route path="/contact" component={ ContactPage } />
      <Route component={ NotFoundPage } />} />
    </Switch>
    </div>
  </BrowserRouter>
)

export default PortfolioRouter;
