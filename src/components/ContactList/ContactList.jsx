import { Ul, Li, Button } from './ContactList.styled';

export default function ContactList({ contacts, deleteContact }) {
  return (
    <Ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <Li key={id}>
            <p>
              {name}: {number}
            </p>
            <Button type="button" onClick={() => deleteContact(id)}>
              Delete
            </Button>
          </Li>
        );
      })}
    </Ul>
  );
}
