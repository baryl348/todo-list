import React from 'react'
import iconsTrue from '../IMG/iconsTrue.png'
import iconsFalse from '../IMG/iconsFalse.png'

interface PropsType {
    todos: {
        id: number
        title: string
        done: boolean
    }
}

const Tasks: React.FC<PropsType> = ({ todos }) => {
    const AcButton = () => {
        return <div className='action_btn ' >{todos.done ? <p><img src={iconsTrue} alt="true" /></p> : <p><img src={iconsFalse} alt="false" /></p>}</div>
    }
    const className = 'task' + (todos.done ? 'task_done' : '')

    return (
        <div className={className} >
            <p>{todos.title}</p>
            <AcButton></AcButton>
        </div >
    )
}
export default Tasks