<?php

namespace Database\Factories;

use App\Models\Task;
use Illuminate\Database\Eloquent\Factories\Factory;

class TaskFactory extends Factory
{
    protected $model = Task::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $userId = $this->faker->numberBetween(1,4);
        return [
            'title' => $userId . ':' . $this->faker->realText(rand(15,40)),
            'is_done' => $this->faker->boolean(10),
            'user_id' => $userId,
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
