const Header = ({ title, subtitle, className }) => {
  return (
    <div>
      <div className={`text-2xl font-semibold ${subtitle ? '' : 'mb-3 text-center'} ${className ? className : ''}`}>{title}</div>
      {subtitle && <div className='text-midnight-light text-sm italic mb-1'>{subtitle}</div>}
    </div>
  );
};

export default Header;
