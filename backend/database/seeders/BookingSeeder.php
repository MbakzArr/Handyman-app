<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Booking;
use App\Models\User;
use App\Models\Handyman;
use Carbon\Carbon;

class BookingSeeder extends Seeder
{
    public function run()
    {
        $users = User::all();
        $handymen = Handyman::all();

        foreach ($users as $user) {
            Booking::create([
                'user_id' => $user->id,
                'handyman_id' => $handymen->random()->id,
                'datetime' => Carbon::now()->addDays(rand(1, 7))->format('Y-m-d H:i:s'),
            ]);
        }
    }
}
