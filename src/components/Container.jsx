const About = ({className, children}) => {
  return (
    <div className={`p-8 md:px-32 xl:px-64 2xl:px-96 ${className ? className : ''}`}>
      {children}
    </div>
  )
}

export default About
