import { useState } from 'react';
import './index.css';
import Employee from './components/Employee';


function App() {
  const [role, setRole] = useState('dev');
  const showEmployee = true;

  return (
    <div className="App bg-red-300">
      {showEmployee ? (
        <div>
          <input type="text" onChange={(e) => {
            setRole(e.target.value);
          }}/>
          <Employee name="Caleb" role="Intern" />
          <Employee name="Abby" role={role} />
          <Employee name="John" />
        </div>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default App;
