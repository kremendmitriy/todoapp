import Select from 'react-select';
import customStyles from '../styles/selector';

type SortProps = {
   onSortChange: (option: string) => void;
};

type OptionType = {
   value: string;
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
            className="ml-2 p-0 w-[167px]"
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
