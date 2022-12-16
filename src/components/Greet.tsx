type GreetObject = {
    name: string,
    messageCount: number,
    isLoggedIn: boolean
}

export const Greet = (props:GreetObject) => {
    return (
        <div>
            <h2>
                {props.isLoggedIn 
                    ? `Hi ${props.name} this is greet component. you have ${props.messageCount} messages`
                    : `Hi Guest` }
            </h2>
        </div>
    )
}