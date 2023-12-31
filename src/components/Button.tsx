interface CustomButtonProps {
  value:string;
  subname:string
  width:string
}

const CustomButton:React.FC<CustomButtonProps> = ({value,width,subname}) => {
  return (
    <button className="bg-yellow-500 text-blue-950 px-2 py-1 rounded-md text-lg font-medium">{value}<span className="block text-sm">{subname}</span></button>
  )
}

export default CustomButton