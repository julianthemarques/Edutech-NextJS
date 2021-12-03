// importações
import React, { useEffect } from 'react';

import { SearchIcon, ArrowDown } from 'styles/components/Icons';
import { Container, Input, Select } from './styleInputs';

// propriedades
export interface inputProps {
  inputType: 'text' | 'select' | 'search';
  textOptions?: {
    iD: string;
    onChange: (ev: any) => void;
    placeholder: string;
    hasIcon: boolean | 'search' | 'arrowDown';
    error: 'alertFunc' | 'msgModal';
  };
  selectOptions?: {
    value: Array<string>;
    hasIcon: boolean | 'search' | 'arrowDown';
  }
}

// componente
const InputCp: React.FC<inputProps> = ({
  inputType, textOptions, selectOptions //  recebendo propriedades
}) => {
  return (
    <Container>
      {inputType === 'search' ? <>
        <div className="selectBar">
          <Select name="serie" id="selectBar">
            {selectOptions.value.map((item) => {
              return <option key={item}>{item}</option>
            })}
          </Select>
        </div>

        <div className="searchBar">
          <Input
            type={inputType}
            id={textOptions.iD}
            onChange={textOptions.onChange}
            placeholder={textOptions.placeholder}
          />
          <SearchIcon />
        </div>
      </>: <></>}

    </Container>
  );
};

export default InputCp;
