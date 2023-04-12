function Counter() {
  const person = {
    name: "Zahra",
    age: 29,
  };
  const students = ["sahra", "zahra", "raha"];
  const status = false;
  return (
    <div className="Counter">
      {status &&
        students.map((student) => (
          <button className="btn btn-outline btn-warning mx-1 rounded-2 text-white">
            {student}
          </button>
        ))}
      <p className="text-white">{status && person.name}</p>
      <p className="text-white">{person.age}</p>
    </div>
  );
}

export default Counter;
