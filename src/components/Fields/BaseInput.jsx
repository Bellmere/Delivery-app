export default function BaseInput({
  name,
  label = '',
  type = 'text',
  placeholder = '',
  value,
  onChange,
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
          value={value}
          onChange={onChange}
        />
      </label>
    </>
  );
}
