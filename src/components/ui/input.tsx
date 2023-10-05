
const Input = (props: any) => {
  return (
    <input type={props.text} placeholder={props.placeholder}  className="bg-black text-white"/>
    // <input type="text" placeholder="Enter your Email"/>
  )
}

export default Input