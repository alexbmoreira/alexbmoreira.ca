const SectionTitle = ({id, text, className}) => {
  return (
    <div id={id} className={`mb-6 font-bold text-3xl border-b-2 border-cornflower text-center ${className ? className : ''}`}>{text}</div>
  )
}

export default SectionTitle
