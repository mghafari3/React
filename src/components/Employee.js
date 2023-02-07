function Employee(props) {
  //argument (props) comes from parent
  return (
    <div>
      <h3>Employee: {props.name}</h3>
      <span>{props.role ? props.role : "No Role"}</span>
    </div>
  );
}

export default Employee;
