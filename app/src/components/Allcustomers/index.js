/*
 * Npm import
 */
import React from 'react';
import axios from 'axios';


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

  componentWillMount() {
    this.setState({
      status: 'Loading',
      customers: [],
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
          Loading...
        </div>
      );
    }
    return (
      <div id="allcustomers">
        {customers.map(customer => (
          <Customer
            key={customer._id}
            {...customer}
          />
        ))}
      </div>
    );
  }
}
