function Button({ text, onclick }: any) {
    return (
        <button onClick={onclick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            {text}
        </button>)
}

export default Button