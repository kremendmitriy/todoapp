import { StylesConfig } from 'react-select';

const customStyles: StylesConfig = {
   control: (provided) => ({
      ...provided,
      minHeight: '32px',
      height: '30px',
      padding: '0px',
   }),
   valueContainer: (provided) => ({
      ...provided,
      height: '30px',
      padding: '0 6px',
   }),
   input: (provided) => ({
      ...provided,
      margin: '0px',
      padding: '0px',
   }),
   indicatorSeparator: () => ({
      display: 'none',
   }),
   indicatorsContainer: (provided) => ({
      ...provided,
      height: '30px',
   }),
};

export default customStyles;
