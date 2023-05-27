export default function BaseInput({
  name,
  label = '',
  type = 'text',
  placeholder = '',
}) {
  return (
    <>
      <label className="base__label">
        {label}
        <input
          className="base__input"
          type={type}
          name={name}
          placeholder={placeholder}
        />
      </label>
    </>
  );
}
