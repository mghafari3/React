import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";

function App() {
  const [role, setRole] = useState("Dev");
  const showEmployees = true;
  return (
    <div className="App bg-red-300">
      {showEmployees ? (
        <div>
          <input
            type="text"
            onChange={(e) => {
              setRole(e.target.value);
            }}
          />
          <Employee name="Moose" role="Intern" />
          <Employee name="Josh" role={role} />
          <Employee name="Brit" />
        </div>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default App;
