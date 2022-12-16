type GreetObject = {
    name: string
}

export const Greet = (props:GreetObject) => {
    return (
        <div>
            <h2>Hi {props.name} this is greet component </h2>
        </div>
    )
}