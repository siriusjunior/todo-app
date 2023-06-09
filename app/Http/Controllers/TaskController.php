<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\TaskRequest;
use App\Models\Task;
use Illuminate\Support\Facades\Auth;

class TaskController extends Controller
{
    public function __construct()
    {
        $this->middleware('can:checkUser,task')->only([
            'updateDone',
            'update',
            'destroy',
        ]);
    }
    public function index()
    {
        return Task::where('user_id', Auth::id())->orderByDesc('id')->get();
    }

    public function store(TaskRequest $request)
    {
        $request->merge([
            'user_id' => Auth::id()
        ]);
        $task = Task::create($request->all());

        return $task
            ? response()->json($task, 201)
            : response()->json([], 500);
    }

    public function show(Task $task)
    {
        //
    }

    public function update(TaskRequest $request, Task $task)
    {
        $task->title = $request->title;

        return $task->update()
            ? response()->json($task)
            : response()->json([], 500);
    }

    public function destroy(Task $task)
    {
        return $task->delete()
            ? response()->json($task)
            : response()->json([], 500);
    }

    public function updateDone(Task $task, Request $request)
    {
        $task->is_done = $request->is_done;
        return $task->update()
            ? response()->json($task)
            : response()->json([], 500);
    }
}
