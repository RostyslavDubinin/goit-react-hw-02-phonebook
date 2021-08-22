import React, { Component } from 'react';
// import Contacts from "./Contacts";
// import shortid from 'shortid';

class PhoneBook extends Component {
  static defaultProps = {
    //
  };

  static propTypes = {
    //
  };

  state = {
    contacts: [],
    name: '',
  };

  // addContact = text => {
  //     const contact = {
  //       id: shortid.generate(),
  //       text,
  //       completed: false,
  //     };

  //     this.setState(({ contacts }) => ({
  //         contacts: [...{"id": contact, "name":this.name}],
  //     }));
  // };

  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  render() {
    const { name } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit">Add contact</button>
        {/* <Contacts friends={contacts}/> */}
      </form>
    );
  }
}

export default PhoneBook;
