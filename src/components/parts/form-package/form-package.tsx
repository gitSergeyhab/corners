import { useEffect, useState } from 'react';

import './form-package.css';


const PACKAGES = ['без упаковки',  'стандартная', 'подарочная'];

function OnePackage({option, onOptionClick} : {option: string, onOptionClick: () => void}) {
  return (
    <li
      onClick={onOptionClick}
      className="react-package__item"
    >{option}
    </li>
  );
}


export default function FormPackage() {

  const [isList, setList] = useState(false);
  const [value, setValue] = useState<string | undefined>(undefined);

  const packageOptions = PACKAGES.map((item) => <OnePackage option={item} onOptionClick={() => setValue(item)} key={item} />);
  const optionList = isList ?  <ul className="react-package__list">{packageOptions}</ul> : null;

  const classesDiv = `reg-form__elem  package ${isList ? 'package--up' : ''} react-package`;
  const classesLabel = `form-label ${value ? '' : 'form-label--hidden'}`;

  const handleOutsideOptionClick = (evt: MouseEvent) => {
    if (evt.target instanceof Element && !evt.target.closest('.reg-form__elem')) {
      setList(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideOptionClick);
    return () => document.body.removeEventListener('click', handleOutsideOptionClick);
  });

  return (
    <div className={classesDiv}
      onClick={() => setList((status) => !status)}
    >
      <label htmlFor="package" className={classesLabel}>Тип Упаковки</label>
      <input
        name="package"
        type="text"
        id="package"
        defaultValue={value}
        placeholder='Тип Упаковки'
        className="reg-form__input react-package__input"
        required
      />
      {optionList}
    </div>
  );
}


