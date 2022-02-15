export default function FormComment() {
  return (
    <div className="reg-form__elem reg-form__elem--address">
      <label htmlFor="comment" className="form-label">Комментарий</label>
      <textarea name="comment" id="comment"  placeholder="Введите комментарий" className="reg-form__textarea" required></textarea>
    </div>
  );
}
