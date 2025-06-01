const SubHeader = ({text, className}) => {
  return (
    <div className={`text-2xl font-semibold mb-3 text-center ${className ? className : ''}`}>{text}</div>
  )
}

export default SubHeader
