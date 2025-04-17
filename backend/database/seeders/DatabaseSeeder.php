<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Service;
use App\Models\Handyman;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create 4 services
        $services = Service::factory()->count(4)->create();

        // Create 10 users + handymen
        User::factory()->count(10)->create()->each(function ($user) use ($services) {
            Handyman::create([
                'user_id' => $user->id,
                'service_id' => $services->random()->id,
            ]);
        });

        // Optionally: add bookings here too
}

}
