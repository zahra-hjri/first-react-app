function Counter() {
  const students = ["sahra", "zahra", "raha"];

  return (
    <div className="Counter">
      {students.map((student) => (
        <button className="btn btn-primary mx-1">{student}</button>
      ))}
    </div>
  );
}

export default Counter;
