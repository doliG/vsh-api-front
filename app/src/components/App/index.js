/*
 * Npm import
 */
import React from 'react';
// import axios from 'axios';


/*
 * Local import
 */

// Components
import Allcustomers from 'src/components/Allcustomers';
import Addcustomer from 'src/components/Addcustomer';
import Header from 'src/components/Header';

// Datas
import routes from 'src/routes';


/*
 * Code
 */
export default class App extends React.Component {
  /**
   * State
   */
  state = {
    view: 'Allcustomers',
  }

  /**
   * Handleview
   */
  handleView = view => (e) => {
    e.preventDefault();
    this.setState({ view });
  }

  /**
   * Render
   */
  render() {
    const { view } = this.state;

    if (view === 'Allcustomers') {
      return (
        <div id="app">
          <Header handleView={this.handleView} routes={routes} />
          <Allcustomers />
        </div>
      );
    }
    else if (view === 'Addcustomer') {
      return (
        <div id="app">
          <Header handleView={this.handleView} routes={routes} />
          <Addcustomer />
        </div>
      );
    }

    return (
      <div>Route not found</div>
    );
  }
}

/**
 * Test zone
 */
