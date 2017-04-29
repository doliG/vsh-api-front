/*
 * Npm import
 */
import React from 'react';
import axios from 'axios';
import Loader from 'react-loaders';


/*
 * Local import
 */
import Customer from './Customer';

/*
 * Code
 */
export default class Allcustomers extends React.Component {
  /**
   * State
   */
  state = {}

  /**
   * Lifecycles
   */
  componentWillMount() {
    this.setState({
      status: 'Loading',
    });
    axios.get('http://vshapi.vaslyn.epi.codes/customers')
      .then(response => this.setState({
        status: 'Loaded',
        customers: response.data,
      }));
  }

  /**
   * Render
   */
  render() {
    const { status, customers } = this.state;
    if (status === 'Loading') {
      return (
        <div id="allcustomers">
          <Loader type="triangle-skew-spin" active />
        </div>
      );
    }
    return (
      <div id="allcustomers">
        {customers.map(customer => (
          /* eslint-disable no-underscore-dangle */
          <Customer
            key={customer._id}
            {...customer}
          />
          /* eslint-enable no-underscore-dangle */
        ))}
      </div>
    );
  }
}
