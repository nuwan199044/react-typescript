import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { Persons } from './components/PersonList';
import { Staus } from './components/Staus';
import { Oscar } from './components/Oscar';
import { Header } from './components/Header';


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
      <Staus status="loading" />
      <Header>This is header</Header>
      <Oscar>
        <Header>This is inside component </Header>
      </Oscar>
    </div>
  );
}

export default App;
