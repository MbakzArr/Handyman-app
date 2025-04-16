<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Handyman;
use App\Models\User;
use App\Models\Service;

class HandymanSeeder extends Seeder
{
    public function run()
    {
        $users = User::all();
        $services = Service::all();

        foreach ($users as $user) {
            Handyman::create([
                'user_id' => $user->id,
                'service_id' => $services->random()->id,
                'bio' => 'Experienced and reliable.'
            ]);
        }
    }
}
