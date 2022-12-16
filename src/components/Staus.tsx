type StatusProps = {
    status : 'success' | 'loading' | 'error'
}

export const Staus = (props: StatusProps) => {

    let message;
    if (props.status === 'loading'){
        message = 'Loading...';
    } else if (props.status === 'success'){
        message = 'Data fetched successfully';
    } else if (props.status === 'error') {
        message = 'Error !!!';
    }
    return (
        <div>
            <h2>{message}</h2>
        </div>
    )
}