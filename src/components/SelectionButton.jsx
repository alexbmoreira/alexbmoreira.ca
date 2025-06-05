import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SelectionButton = ({ text, onSelect, selected }) => {
  return (
    <button className={`flex border rounded-xl text-sm justify-center items-center py-2 px-3 cursor-pointer duration-300 ease-in-out ${selected ? 'border-cornflower text-cornflower' : ''} hover:border-cornflower-light hover:text-cornflower-light active:border-cornflower-dark active:text-cornflower-dark`} onClick={onSelect}>
      {selected && <FontAwesomeIcon className='w-4 mr-2' icon='fa-solid fa-check'/>}
      <div>{text}</div>
    </button>
  );
};

export default SelectionButton;
