import { FormEvent, useState } from 'react';
import { getLabelClasses } from '../../../utils/validation-utils';

export default function FormComment() {

  const [value, setValue] = useState('');

  const [hidden, setHidden] = useState(true);


  const handleInputChange = (evt: FormEvent<HTMLTextAreaElement>) => {
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
    <div className="reg-form__elem reg-form__elem--address">
      <label
        htmlFor="comment"
        className={classesLabel}
      >Комментарий
      </label>
      <textarea
        value={value}
        onChange={handleInputChange}
        name="comment"
        id="comment"
        placeholder="Введите комментарий"
        className="reg-form__textarea"
      >
      </textarea>
    </div>
  );
}
