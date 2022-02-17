import { FormEvent, useState } from 'react';
import { checkEmail, getInputClasses, getLabelClasses } from '../../../utils/validation-utils';


export default function FormEmail () {

  const [value, setValue] = useState('');

  const [error, setError] = useState(false);
  const [hidden, setHidden] = useState(true);


  const handleInputBlur = () => {
    if (value) {
      if (checkEmail(value)) {
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
    <div className="reg-form__elem">
      <label htmlFor="email" className={classesLabel}>Email</label>
      <input
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        value={value}
        type="email"
        name='email'
        id="email"
        placeholder="Ваш Email"
        className={classesInput}
        required
      />
    </div>
  );
}
