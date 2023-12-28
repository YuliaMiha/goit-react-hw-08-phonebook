import axios from 'axios';

export const contactsService = axios.create({
  baseURL: 'https://658bbe59859b3491d3f4a8c8.mockapi.io/contacts',
});

export const fetchContacts = async () => {
  const { data } = await contactsService.get('');
  return data;
};
export const addContact = async contact => {
  const { data } = await contactsService.post(`/`, contact);
  return data;
};
export const deleteContact = async id => {
  const { data } = await contactsService.delete(`/${id}`);
  return data;
};