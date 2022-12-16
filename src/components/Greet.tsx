type GreetObject = {
    name: string,
    messageCount?: number,
    isLoggedIn: boolean
}

export const Greet = (props:GreetObject) => {
    const {messageCount = 0 } = props
    return (
        <div>
            <h2>
                {props.isLoggedIn 
                    ? `Hi ${props.name} this is greet component. you have ${messageCount} messages`
                    : `Hi Guest` }
            </h2>
        </div>
    )
}