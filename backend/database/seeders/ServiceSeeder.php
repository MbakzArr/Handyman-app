<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Service;

class ServiceSeeder extends Seeder
{
    public function run()
    {
        $services = ['Plumbing', 'Cleaning', 'Electrical', 'Painting'];

        foreach ($services as $service) {
            Service::create(['name' => $service]);
        }
    }
}
