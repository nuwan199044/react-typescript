type personPorps = {
    name : {
        firstName : string,
        lastName : string
    }
}

export const Person = (props: personPorps) => {
    return (
        <h2>{props.name.firstName} {props.name.lastName}</h2>
    )
}