import React from 'react';

const Contacts = () => {
  const contacts = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
  ];

  return (
    <div  className='container align-center'>
      <h1  className='text-center m-4'>Contacts</h1>
      {contacts.map((contact) => (
        <div key={contact.id}>
          <h3>{contact.name}</h3>
          <p>{contact.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Contacts;