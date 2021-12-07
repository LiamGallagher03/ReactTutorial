import { FaTimes } from 'react-icons/fa'

function Task({ task, onDelete }) {
    return (
        <div className='task'>
            <h3>{task.text}{' '}
                <FaTimes
                    style={{ color: 'red', cursor: 'pointer' }}
                    onClick={() => onDelete(task.id)}
                    
                />
                {/*onDelete senses onClick and sends id through Tasks.js to App.js where it's destroyed/filetered */}
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

//specifies the specific Task and whaich one to delete when X is clicked

export default Task
