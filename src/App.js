import { useState } from 'react';
import './index.css';
import Employee from './components/Employee';


function App() {
  const [role, setRole] = useState('dev');
  const showEmployee = true;

  return (
    <div className="App">
      {showEmployee ? (
        <div>
          <input type="text" onChange={(e) => {
            setRole(e.target.value);
          }} />
          <div className="flex flex-wrap justify-center">
            <Employee name="Caleb" role="Intern" img="https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg" />
            <Employee name="Abby" role={role} img="https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg"/>
            <Employee name="John" img="https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg"/>
            <Employee name="Caleb" role="Intern" img="https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg"/>
            <Employee name="Abby" role={role} img="https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg"/>
            <Employee name="John" img="https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg"/>
            <Employee name="Caleb" role="Intern" img="https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg"/>
            <Employee name="Abby" role={role} img="https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg"/>
            <Employee name="John" img="https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg"/>
          </div>
        </div>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default App;
