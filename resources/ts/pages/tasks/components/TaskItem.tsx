import React, { useEffect, useState } from "react"
import { Task } from "../../../types/Task"

type Props = {
    task: Task
}

const TaskItem: React.VFC<Props> = ({ task }) => {
    return (
        <li>
            <label className="checkbox-label">
                <input type="checkbox" className="checkbox-input" />
            </label>
            <div><span>{task.title}</span></div>
            <button className="btn is-delete">削除</button>
        </li>
    )
}

export default TaskItem
