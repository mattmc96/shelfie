/** @format */

import React from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import { Switch, Route, HashRouter } from 'react-router-dom';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import './App.css';

function App() {
  return (
    <div className='app'>
      <HashRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/add' component={Form} />
          <Route path='/edit/:id' component={Form} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;

/* -------------------------------------------------------------------------- */
/* Previous Work */
/* -------------------------------------------------------------------------- */

// this.onFormSubmit = this.onFormSubmit.bind(this);

// componentDidMount() {
//   this.onFormSubmit();
// }

// onFormSubmit() {
//   axios
//     .get('/api/inventory')
//     .then(res => {
//       this.setState({
//         inventory: res.data,
//       });
//     })
//     .catch(err => console.log(err));
// }

// selectedProduct(id) {
//   axios
//     .put(`/api/inventory/${id}`)
//     .then(res => {
//       this.setState({
//         currentProduct: res.data,
//       });
//     })
//     .catch(err => console.log(err));
// }

//   render() {
//     // const { inventory, currentProduct } = this.state;
//     return (
//       <div className='App'>
//         <Header />
//         <Dashboard
//           inventory={inventory}
//           getInventory={this.onFormSubmit}
//           selectedProduct={() => this.selectedProduct()}
//         />
//         <Form
//           getInventory={this.onFormSubmit}
//           currentProduct={currentProduct}
//         />
//       </div>
//     );
//   }
// }

// export default App;
