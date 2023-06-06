import { Label, Input } from './Filter.styled';

export default function Filter({ filterContact }) {
  return (
    <Label>
      Find contacts by name
      <Input type="text" onChange={filterContact} />
    </Label>
  );
}
