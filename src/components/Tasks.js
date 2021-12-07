import Task from './Task'

const Tasks = ({ tasks, onDelete }) => {
    return (
    <>
        {tasks.map((task) => (
            <Task key={task.id} task={task} 
            onDelete={onDelete}/>
        ))}
        {/*tasks.map takes a task, inserts the text with an h3 element and gives it a key relating to it's id */}
    </>
)
}

export default Tasks
