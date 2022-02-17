import { FormEvent, useState } from 'react';
import { checkPhone, getInputClasses, getLabelClasses } from '../../../utils/validation-utils';

export default function FormPhone() {

  const [value, setValue] = useState('');

  const [error, setError] = useState(false);
  const [hidden, setHidden] = useState(true);


  const handleInputBlur = () => {
    if (value) {
      if (checkPhone(value)) {
        setError(false);
      } else {
        setError(true);
      }
    }
  };

  const handleInputChange = (evt: FormEvent<HTMLInputElement>) => {
    const valueInput = evt.currentTarget.value;
    if (valueInput) {
      setError(false);
      setHidden(false);
    } else {
      setHidden(true);
    }
    setValue(valueInput);
  };

  const classesLabel = getLabelClasses(error, hidden);
  const classesInput =  getInputClasses(error);

  return (
    <div className="reg-form__tel">
      <label
        htmlFor="tel"
        className={classesLabel}
      >Номер Телефона
      </label>
      <input
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        name='phone'
        type="tel"
        id="tel"
        placeholder="Ваш Телефон"
        className={classesInput}
        required
      />
    </div>
  );
}
