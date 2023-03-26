import React, { useEffect, useState } from "react"
import { useTasks } from "../../queries/TaskQuery"
import TaskInput from "./components/TaskInput"
import TaskList from "./components/TaskList"

const TaskPage: React.VFC = () => {

    const{ data:tasks, status } = useTasks()

    if(status==='loading'){
        return <div className="loader"/>
    }else if (status==='error'){
        return <div className="align-center">データの読み込みに失敗しました。</div>
    }else if (!tasks || tasks.length <= 0){
        return <div className="align-center">登録されたToDoはありません。</div>
    }

    return(
        <>
            <TaskInput />
            <TaskList />
        </>
    )
}

export default TaskPage
