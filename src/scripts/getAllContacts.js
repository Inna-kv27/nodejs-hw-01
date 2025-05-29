import { readContacts } from '../utils/readContacts.js';

const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    console.log('All contacts:');
    console.log(contacts);
    return contacts;
  } catch (error) {
    console.error('Error getting all contacts:', error);
    return [];
  }
};

getAllContacts();
