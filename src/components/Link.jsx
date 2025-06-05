const Link = ({ href, children, className, ...rest }) => {
  return (
    <a href={href} target='_blank' className={`duration-300 ease-in-out hover:text-cornflower-light active:text-cornflower-dark ${className ? className : ''}`} onClick={(e) => e.stopPropagation()} {...rest}>
      {children}
    </a>
  );
};

export default Link;
