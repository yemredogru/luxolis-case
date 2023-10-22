import './input.css'

export default function Input({className,type,name,placeholder,onChange}){
    return(
        <input onChange={onChange} className={className} type={type} name={name} placeholder={placeholder} />
    )
}