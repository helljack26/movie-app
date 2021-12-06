const GENDERS = ['female', 'male', 'genderless', 'unknown'];

const Select = ({ value, onChange }) => {
  return (
    <select
      name="gender"
      id="gender"
      value={value}
      onChange={(event) => onChange(event.target.value)}
    >
      <option />
      {GENDERS.map((gender) => (
        <option key={gender} value={gender}>
          {gender}
        </option>
      ))}
    </select>
  );
};
export default Select;
