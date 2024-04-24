'use client'

interface ButtonProps {
    text: string
    onclick: () => void
}
function Button({ text, onclick }: ButtonProps) {
    return (
        <button onClick={onclick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            {text}
        </button>)
}

export default Button