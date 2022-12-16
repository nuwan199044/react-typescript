import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { Persons } from './components/PersonList';

function App() {

  const person = {
    firstName : "Nuwan",
    lastName: "Weerasinghe"
  }

  const personList = [
    {
      firstName: "Tharake",
      age : 20
    },
    {
      firstName: "Ruchira",
      age : 30
    },
    {
      firstName: "Thilina",
      age : 40
    }
  ]

  return (
    <div className="App">
      <Greet name='Nuwan' messageCount={6} isLoggedIn={false} />
      <Person name={person} />
      <Persons names={personList} />
    </div>
  );
}

export default App;
