//imports components
import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'



function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb 6th at 1:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Food Shopping',
      day: 'Feb 5th at 2:30 pm',
      reminder: false,
    }
  ])
  //array in app.js makes it global

  //DeleteTask
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      {/*elements must be in div, even comments*/}


      <Header />
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} />) : (
        'No Tasks To Show'
      )}
      {/*<Component_Name title=paramater, parameter is in {} if not string /> */}
    </div>
  );
}

export default App;
