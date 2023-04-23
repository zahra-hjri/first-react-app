const users = [
  { id: 1, name: "Mohammad" },
  { id: 2, name: "Zahra" },
  { id: 3, name: "Raha" },
];

export default function ShoppingList() {
  const listItems = users.map((user) => (
    <li className="px-4 text-white" key={user.id}>
      {user.name}
    </li>
  ));

  return <ul className="container flex  px-8 mx-auto">{listItems}</ul>;
}
