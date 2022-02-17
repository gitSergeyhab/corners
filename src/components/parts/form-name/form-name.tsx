import { FormEvent, useState } from 'react';
import { getLabelClasses } from '../../../utils/validation-utils';

export default function FormName() {

  const [value, setValue] = useState('');

  const [hidden, setHidden] = useState(true);


  const handleInputChange = (evt: FormEvent<HTMLInputElement>) => {
    const valueInput = evt.currentTarget.value;
    if (valueInput) {
      setHidden(false);
    } else {
      setHidden(true);
    }
    setValue(valueInput);
  };

  const classesLabel = getLabelClasses(false, hidden);

  return (
    <div className="reg-form__name">
      <label
        htmlFor="name"
        className={classesLabel}
      >Имя
      </label>
      <input
        onChange={handleInputChange}
        value={value}
        type="text"
        name='name'
        id="name"
        placeholder="Ваше Имя"
        className="reg-form__input"
        required
      />
    </div>
  );
}
