<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run()
    {
        // Create 5 sample users with random locations
        for ($i = 1; $i <= 5; $i++) {
            User::create([
                'name' => "User $i",
                'email' => "user$i@example.com",
                'password' => Hash::make('password'),
                'lat' => -25.7479 + mt_rand(-50, 50) / 1000,  // Pretoria approx
                'lng' => 28.2293 + mt_rand(-50, 50) / 1000,
            ]);
        }
    }
}
