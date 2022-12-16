import { Person } from './Person.type'

type PersonList = {
    names: Person[]
}

export const Persons = (props: PersonList) => {
    return(
        <div>
            {props.names.map(name => {
                return (
                    <h2 key={name.firstName}>Hi {name.firstName} your age is {name.age}</h2>
                )
            })}
        </div>
    )
}