interface Input {
    type: string,
    placeholder: string,
    icon: string
}

function Input(){
    return (
        <div>
            <input type="text" />
        </div>
    )
}

export default Input