import './button.css'
export default function Button({className,text,handleClick}){
    return(
        <button onClick={handleClick} className={className}>{text}</button>
    )
}