<?php

namespace App\Policies;

use App\Models\Task;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class TaskPolicy
{
    use HandlesAuthorization;

    public function checkUser(User $user, Task $task)
    {
        if($user->id === $task->user_id){
            return true;
        }
    }
}
