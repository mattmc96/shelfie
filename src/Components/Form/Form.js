/** @format */

import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //Add new val to id
      firstimage:
        'https://image.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-260nw-1037719192.jpg',
      shelfie:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAYAAAA4E5OyAAAAAXNSR0IArs4c6QAABKJJREFUeAHVnLtPFFEUxncNARsfnRU24INKpaKg0UILNBT8JVQkVms0hlhb+C/QGBIwGE20UwsjHY8EQ4JGLEgELYBEXb9vmQvj7MzO3Jlz7r1zkm/v7My995zz23nceew0G46s3W5fgatRaCTSEMpz0NlIKBo/I+2h/AytQivQcrPZXEepbk0tDwBwGn3fg+5At6FBqIp9QeNX0EtoEYAOqnTmrC1A3ICeQj8gLWPf9HHdWWK2jhDcGPQacm30OWYbr1p9BHMVeuGaQoq/Rcailmhex3DeB92HDqBQjLEwpr68+EWXw+FlaBkK1T4hMB7V9A2OJqDdUEnE4mKME6pE4GAG+hNzGvokY51RgYKOH4aefY/4HolCgaPZHs7qsuhxESinilRCnaL1Cnbnpdo1/HJyRx909qQuq0JKnBwnDYj/DDWFogPD0K0ZFF0YNYPiBkZNoLiFETgUPzACheIXRmBQwoARCJSwYHiGEiYMT1DChuEYSj1gOIKiCwPD8ZsmEclSaZivAgOxXurkjolB6BBSudyGfiXPkrVgjCDO79DFBj4mIVroULRhkMEkgTzgVGShQnEBgwhaBDIfwTBFaFBcwWD+8wTyzpCIlaFAcQmD6b8nkJUYiPikbyiuYTD3VQLZjlNITPuC4gMGU98mkP0EhORX11B8wWDe+wTChPPMFRSfMMjgkEB28mhEy7Wh+IbBNHcIZJNTBU0TitxNpOj8AzmZEWjB9NqbvCO3a3H+0o+6z9G7+DAfz4z9togjtyphoNJb6EJu5ZMKuwSycfK90JQalELeC1QqCYM9bxBImccdg4VSAQaBrBHIGqdKWHBQKsIggnXuVIehKqa2o7X5kZCA7Q40Lefhjk8s2UpbajHPKxTEKQFjizC4ydDeHBWlP71tPoSBqG2PJmmJdhgYIItpNSznOYciCIOpLhzni44HID4uLWFONh8EKrGZmHyZe+eBms4agkHRIejMHROqNqG+phAGQpTYTEymcxED873Bo82owSVUqqwpiI1HxW9CMZpu+LeVbsPSJVNDqBSFgpgI46tQbKabpW4S0RzUGDe1BEsRKIhHAwbTHM8EwgWoIL2W0GklKGivBSN77TCUIuca/3AoBUURBnM8Gpma5LNKVGxBGmYFBQForRnMrZWVf9d8VO6HPrKVghWCAr+aMJgbhwfFDQ2GoD1Iw3pCgUNNGMyJ/wi1NzScgv5CGpYKBY40YTCXKXsSsRboYFqDRtTnf1AwTxMGXU7HUis/iY40/x7SgeIAxmx5AiktHUDpdQcR7iuZLAzDByFx89Hap1TKOKMxY5XZTAyEZAkH3NFqHX0y8io1mzFW24Emk8/6Dkc8JGuNU0pln2jE2ModWrOSzpsPhxy8cUSrMcxHt6WMsTAmu0FXXrI2y+Gch0qNE0J0a2WModi5iU2CZesiGF468AGGPnufwpdNSqIdguOVt2eQ1DVadNVl7Js+0q90VUhE84UqvGjLF6rchW5BEi9U4a0C3iFY6LoGipkSpgYkGRx+TW7ffM8HX2nBFxXw+3noTCQUjV+R+EQCb8LzvjNvtX4AANub8mhmb/8Asov1hwQSlWQAAAAASUVORK5CYII=',
      // id: null,
      name: '',
      price: 0,
      img: '',
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  componentDidMount(id) {
    //change this.props
    if (this.props.match.params.id) {
      axios
        .get(`/api/product/${this.props.match.params.id}`)
        .then(res => {
          this.setState({
            name: res.data.name,
            price: res.data.price,
            img: res.data.img,
            edit: true,
          });
        })
        .catch(err => {
          console.log('Component NOT mounting');
        });
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.handleOnClick;
    }
  }

  handleImg = e => {
    this.setState({
      img: e.target.val,
    });
  };

  handleName = e => {
    this.setState({
      name: e.target.val,
    });
  };

  handlePrice = e => {
    this.setState({
      price: e.target.val,
    });
  };

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.val,
    });
  };

  //Maybe change to something else
  handleSave = () => {
    const { edit } = this.state;
    this.setState({
      edit: !edit,
    });
    this.handleOnClick;
  };

  handleOnClick = () => {
    this.setState({
      name: '',
      price: '',
      img: '',
      edit: false,
    });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    const { name, price, img } = this.state;
    const { onSubmit } = this.props;
    const product = { name, price, img };

    axios.post('/api/product', { product }).then(res => {
      this.setState({
        name: name,
        price: price,
        img: img,
      }).catch(err => {
        console.log('Dont worry bud try again later');
      });
      onSubmit.getInventory();
      this.handleOnClick();
    });
  };

  updateProduct = () => {
    const { name, price, img } = this.state;
    const edit = { name, price, img };
    axios
      .put(`/api/inventory/${this.props.location.state.id}`, { edit })
      .then(res => {
        this.setState({
          inventory: res.data,
        });
      })
      .catch(err => console.log('NO bueno'));
  };

  render() {
    const { name, price, img } = this.state;
    return (
      <div className='formula'>
        <div className='formbox'>
          <form
            className='formation'
            onSubmit={e => {
              e.preventDefault();
              this.props.location.state
                ? //fix this bbecause it is is  no bueno
                  this.handleOnSubmit()
                : this.updateProduct();
              window.location.replace('/');
            }}>
            <img className='firstimage' src={this.state.firstimage} />
            <div className='input-holder'>
              <p>Image URL:</p>
              <input
                className='form'
                val={this.state.img}
                onChange={e => this.handleImg(e.target.val)}
              />
              <p>Price:</p>
              <input
                className='form'
                val={this.state.price}
                onChange={e => this.handlePrice(e.target.val)}
              />
              <p>Product Name:</p>
              <input
                className='form'
                val={this.state.name}
                onChange={e => this.handleName(e.target.val)}
              />
              <div className='btn-box'>
                <button className='f-btn' onClick={() => this.handleOnClick()}>
                  Cancel
                </button>
                {this.props.location.state ? (
                  <button className='f-btn'>Add to Inventory</button>
                ) : (
                  <button className='f-btn'>Add to Inventory</button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
