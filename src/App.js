
import './App.css';
import contactFile from './contacts.json'
import { useState } from 'react';
import Button from './components/Button'

const contacts = contactFile.slice(0,5)

function App() {
  const [contact, setContact] = useState(contacts)
    console.log( (contact.map((contact)=>contact))); 

  return (
    <div className="App">

<h1>Five Contacts</h1>
<Button  />
<table>
  <tr>
    <th><h3> Picture</h3> </th>
    <th><h3> Name</h3>  </th>
    <th><h3>Popularity</h3> </th>
    <th><h3>wonOscar</h3></th>
    <th><h3>wonEmmy</h3></th>
  </tr>
{contact.map((contact)=> {
  return ( 
    <tr key={contact.id}>
    <td> <img src={contact.pictureUrl} className="contact-picture" /></td>
    <td>{contact.name}</td>
    <td>{contact.popularity}</td>
    <td>{contact.wonOscar}</td>
    <td>{contact.wonEmmy}</td>
  </tr>
  )
})
}
</table>
</div>
)
}
export default App;
