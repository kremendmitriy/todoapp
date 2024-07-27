import Select from 'react-select';
import customStyles from '../styles/selector';

type SortProps = {
   onSortChange: (option: 'a-z' | 'z-a') => void;
};

type OptionType = {
   value: 'a-z' | 'z-a';
   label: string;
};

const Sort: React.FC<SortProps> = ({ onSortChange }) => {
   const noteOptions = [
      { value: 'a-z', label: 'A-Z' },
      { value: 'z-a', label: 'Z-A' },
   ];
   return (
      <div>
         <Select
            className="ml-2 p-0 w-[96%]"
            styles={customStyles}
            options={noteOptions}
            onChange={(selectedOption) => {
               if (selectedOption) {
                  const option = selectedOption as OptionType;
                  onSortChange(option.value);
               }
            }}
         />
      </div>
   );
};

export default Sort;
