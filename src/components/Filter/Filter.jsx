export default function Filter({ filterContact }) {
  return (
    <label>
      Find contacts by name
      <input type="text" onChange={filterContact} />
    </label>
  );
}
