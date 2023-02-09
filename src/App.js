import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [role, setRole] = useState("Dev");
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Moose",
      role: "Developer",
      img: "https://images.pexels.com/photos/14350433/pexels-photo-14350433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "Juice",
      role: "Intern",
      img: "https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
    {
      id: 3,
      name: "Loose",
      role: "",
      img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
    {
      id: 4,
      name: "Noose",
      role: "Prisoner",
      img: "https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
    {
      id: 5,
      name: "Cus",
      role: "Chief",
      img: "https://images.pexels.com/photos/1840608/pexels-photo-1840608.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
    {
      id: 6,
      name: "Douce",
      role: "Basketball Player",
      img: "https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
  ]);

  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if (id === employee.id) {
        //return new employee   & setting name and role to newName and newRole
        //'...' spread operator returns all elements of employee
        return { ...employee, name: newName, role: newRole };
      }
      return employee;
    });
    setEmployees(updatedEmployees);
  }

  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <div>
          <input
            type="text"
            onChange={(e) => {
              setRole(e.target.value);
            }}
          />
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  updateEmployee={updateEmployee}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default App;
