/*
 * Npm import
 */
import React from 'react';
import axios from 'axios';


/*
 * Local import
 */
import Loader from 'src/components/Loader';
import Customer from './Customer';
import Search from './Search';

/*
 * Code
 */
export default class Allcustomers extends React.Component {
  /**
   * State
   */
  state = {
    inputSearch: '',
  }


  /**
   * Lifecycles
   */
  componentWillMount() {
    this.setState({
      status: 'loading',
    });
    axios.get('http://vshapi.vaslyn.epi.codes/customers')
      .then(response => (
        this.setState({
          status: 'ready',
          customers: response.data,
        })
      ));
  }

  /**
   * Handlers
   */
  handleInputChange = (evt) => {
    const { value } = evt.target;
    this.setState({ inputSearch: value });
  }

  /**
   * Render
   */
  render() {
    const { status } = this.state;

    if (status === 'loading') {
      return (
        <div id="allcustomers">
          <Loader />
        </div>
      );
    }

    const { customers, inputSearch } = this.state;
    let filteredCustomers;

    // Search and filter customers matching inputSearch
    if (inputSearch !== '') {
      filteredCustomers = customers.filter(({ profile }) => {
        const { first_name, last_name, address, post_code, city, phone } = profile;
        const words = inputSearch.toLowerCase();

        if (first_name.toLowerCase().includes(words)
        || last_name.toLowerCase().includes(words)
        || city.toLowerCase().includes(words)
        || address.toLowerCase().includes(words)
        || phone.toLowerCase().includes(words)
        || post_code.toLowerCase().includes(words)) {
          return true;
        }

        return false;
      });
    }
    else {
      filteredCustomers = customers;
    }

    return (
      <div id="allcustomers">
        <Search
          value={inputSearch}
          onInputChange={this.handleInputChange}
        />
        {filteredCustomers.map(customer => (
          /* eslint-disable no-underscore-dangle */
          <Customer
            key={customer._id}
            inputSearch={inputSearch}
            {...customer}
          />
          /* eslint-enable no-underscore-dangle */
        ))}
      </div>
    );
  }
}
