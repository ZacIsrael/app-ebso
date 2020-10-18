import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      var App = React.createClass({
        return { items: [], products: [] };
    },
    
      componentWillMount: function() {
        this.pusher = new (PUSHER_APP_KEY, {
          encrypted: true,
        });

      this.channel = this.pusher.subscribe(PUSHER_CHANNEL_NAME)
      this.total = 0;
      },

      componentDidMount() {
        this.channel.bind('itemAdded', this.itemAdded);
        this.channel.bind('itemUpdated', this.itemUpdated);
        this.channel.bind('itemRemoved', this.itemRemoved);
        this.channel.bind('cartEmptied', this.cartEmptied);

        fetch('/products').then(function(response) {
          return response.json();
      }).then(this.getProductsSuccess);
  
      fetch('/cart/items', {
          credentials: 'same-origin',
      }).then(function(response) {
          return response.json();
      }).then(this.getCartItemsSuccess);
      }

      getProductsSuccess: function(response) {
        this.setState({
          products: response
        });
      },

      getCartItemsSuccess: function(response){
        this.countTotal(response);
        this.setState({
          items: response
        });
      },

      countTotal: function(newArray) {
        var temp = 0;

        newArray.forEach(function(item,index) {
          temp += (item.price * item.quantity);
        });

        this.total = temp;
      },

      componentWillMount: function() {
        this.channel.unbind();

        this.pusher.unsubcribe(this.channel);

        this.getProductsSuccess = function() {};
        this.getCartItemsSuccess = function() {};
      },

      itemAdded: function(item) {
        var newArray = this.state.items.slice(0);
        newArray.push(item);

        this.countTotal(newArray);

        this.setState({
          items: newArray,
        });
      },


      itemUpdated: function(item) {
        var newArray = this.state.items.slice(0);
        var indexToUpdate;

        this.state.items.some(function(it, index) {
          if(it.id == item.id) {
            indexToUpdate = index;
            return true;
          }
        });

        newArray[indexToUpdate].quantity = item.quantity;

        this.countTotal(newArray);

        this.setState({
          items: newArray,
        });

      },

      itemRemoved: function(item) {
        var newArray = this.state.items.slice(0);
        var indexToRemove;

        this.state.items.some(function(it, index) {
          if(it.id == item.id) {
            indexToRemove = index;
            return true;
          }
        });

        newArray.splice(indexToRemove, 1);

        this.countTotal(newArray);

        this.setState({
          items: newArray,
        });
      },




    });

    cartEmptied: function() {
      var newArray = [];
      this.countTotal(newArray);

      this.setState({
        items: newArray
      });
    },

    render: function() {
      return(
        <div className="container">
          <Header />
          <Cart items={this.state.items} total={this.total} />
          <ProductList products={this.state.products} />
        </div>
      );
    }
    </div>
  );
}

export default App;
