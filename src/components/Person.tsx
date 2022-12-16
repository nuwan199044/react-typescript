import { PersonPorps } from './Person.type'

export const Person = (props: PersonPorps) => {
    return (
        <h2>{props.name.firstName} {props.name.lastName}</h2>
    )
}