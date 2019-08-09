import React from 'react';
import ReactDOM from 'react-dom';

import PortfolioRouter from "./routers/PortfolioRouter";
import "normalize.css/normalize.css";
import './styles/styles.scss';

ReactDOM.render(<PortfolioRouter />, document.getElementById('app'))