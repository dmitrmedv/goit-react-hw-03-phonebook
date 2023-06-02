import { Component } from 'react';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import data from './data/data.json';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: data,
    filter: '',
  };

  addContacts = ({ name, number }) => {
    let newContact = {
      id: nanoid(),
      name,
      number,
    };

    if (this.state.contacts.map(({ name }) => name).includes(name)) {
      return alert(`${name} is already in contacts`);
    }

    this.setState(PrevState => {
      return {
        contacts: [...PrevState.contacts, newContact],
      };
    });
  };

  deleteContact = id => {
    this.setState(({ contacts }) => {
      return {
        contacts: contacts.filter(contact => contact.id !== id),
      };
    });
  };

  filterContact = event => {
    const { value } = event.target;
    this.setState({ filter: value.toLowerCase() });
  };

  render() {
    const { contacts, filter } = this.state;
    let visibleContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter)
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContacts={this.addContacts} />
        <h2>Contacts</h2>
        <Filter filterContact={this.filterContact} />
        <ContactList
          contacts={visibleContacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
