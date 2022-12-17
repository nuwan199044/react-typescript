import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { Persons } from './components/PersonList';
import { Staus } from './components/Staus';
import { Oscar } from './components/Oscar';
import { Header } from './components/Header';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Container } from './components/Container';
import { LoggedIn } from './state/LoggedIn';
import { User } from './User';
import { Counter } from './state/Counter';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { Box } from './components/context/Box';
import { UserContextProvider } from './components/context/UserContext';
import { DomRef } from './components/ref/DomRef';
import { MutableRef } from './components/ref/MutableRef';


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
      {/* <Greet name='Nuwan' isLoggedIn={true} />
      <Person name={person} />
      <Persons names={personList} />
      <Staus status="loading" />
      <Header>This is header</Header>
      <Oscar>
        <Header>This is inside component </Header>
      </Oscar>
      <Button 
        handleClick={(event, id) => {
          console.log('Button clicked', event, id)
        }} 
      />
      <Input value='' handleChange={(event) => console.log(event)} />
      <Container styles={{border: '1px solid black', padding: '1rem'}} /> */}
      {/* <LoggedIn /> */}
      {/* <User /> */}
      {/* <Counter /> */}
      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}
      {/* <UserContextProvider>
        <User />
      </UserContextProvider> */}
      <DomRef />
      <MutableRef />
    </div>
  );
}

export default App;
