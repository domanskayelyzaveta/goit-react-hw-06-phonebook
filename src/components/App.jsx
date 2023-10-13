import { ContactsForm } from './ContactsForm/ContactsForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  addContact,
  deleteContact,
  onFilterChange,
} from './redux/phoneBookReducer';

export function App() {
  const contacts = useSelector(state => state.phoneBook.contacts);
  const filter = useSelector(state => state.phoneBook.filter);

  const dispatch = useDispatch();

  const onFilter = event => {
    const inputValue = event.target.value;
    dispatch(onFilterChange(inputValue));
  };

  const onDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  const handleFormSubmit = data => {
    const { name, number } = data;
    if (
      contacts.some(
        contact => contact.name === name && contact.number === number
      )
    ) {
      alert(`"${name}" is already in contacts!`);
      return;
    }
    dispatch(addContact({ ...data, id: nanoid() }));
  };

  const filteredContactsByName = contacts.filter(contact => {
    return (
      contact.name.toLowerCase().includes(filter.trim().toLowerCase()) ||
      contact.number.includes(filter)
    );
  });

  return (
    <div className="container">
      <ContactsForm onSubmit={handleFormSubmit} />
      <Filter label="Name" type="text" onChange={onFilter} />
      <ContactList
        contacts={filteredContactsByName}
        onDeleteContact={onDelete}
      />
    </div>
  );
}
