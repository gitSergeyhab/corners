export default function FormEmail () {
  return (
    <div className="reg-form__elem">
      <label htmlFor="email" className="form-label">Email</label>
      <input type="email" id="email" placeholder="Ваш Email" className="reg-form__input" required/>
    </div>
  );
}
