const Re = {
  Email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  Phone: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
};

const Classes = {
  Label: {
    Default: 'form-label',
    Hidden: 'form-label--hidden',
    Error: 'form-label--error',
  },
  Input: {
    Default: 'reg-form__input',
    Error: 'reg-form__input--error',
  },
};

export const checkEmail = (text: string) => Re.Email.test(text);
export const checkPhone = (text: string) => Re.Phone.test(text);

export const getInputClasses = (error: boolean) => `${Classes.Input.Default} ${error ? Classes.Input.Error : ''}`;

export const getLabelClasses = (error: boolean, hidden: boolean) =>
  `${Classes.Label.Default} ${error ? Classes.Label.Error : ''} ${hidden ? Classes.Label.Hidden : ''}`;


