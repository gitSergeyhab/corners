
import { useState } from 'react';
import './form-package.css';

const PACKAGES = [
  {name: 'без упаковки', value: 'without_packaging'},
  {name: 'стандартная', value: 'standard'},
  {name: 'подарочная', value: 'gift'},
];

function OnePackage({option} : {option: {name: string, value: string}}) {
  const {name, value} = option;
  return (
    <li className="react-package__item">{name} {value}</li>
  );
}


export default function FormPackage() {

  const [isList, setList] = useState(false);
  const [value, setValue] = useState('Тип Упаковки');

  const packageOptions = PACKAGES.map((item) => <OnePackage option={item} key={item.value} />);
  const optionList = isList ?  <ul className="react-package__list">{packageOptions}</ul> : null;
  const classes = `reg-form__elem  package ${isList ? 'package--up' : ''} react-package`;

  return (
    <div className={classes}
      onClick={() => setList((status) => !status)}
    >
      <label htmlFor="package" className="form-label">Тип Упаковки</label>
      <input style={{color: '#9F9F9F'}} type="text" id="package" value={value} className="reg-form__input" required/>
      {optionList}
    </div>
  );
}
