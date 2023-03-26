import * as api from "../api/TaskAPI"
import {useQuery} from "react-query"

const useTasks =() => {
    return useQuery('tasks',() => api.getTasks())
}
export {
    useTasks
}
