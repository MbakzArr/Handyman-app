<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use Illuminate\Http\Request;

class BookingController extends Controller
{
    // Create a booking
    public function store(Request $request)
    {
        $request->validate([
            'handyman_id' => 'required|exists:handymen,id',
            'user_id' => 'required|exists:users,id',
            'datetime' => 'required|date'
        ]);

        $booking = Booking::create([
            'handyman_id' => $request->handyman_id,
            'user_id' => $request->user_id,
            'datetime' => $request->datetime,
        ]);

        return response()->json($booking, 201);
    }

    // Admin view all bookings
    public function index()
    {
        $bookings = Booking::with(['user', 'handyman.user', 'handyman.service'])->get();

        return response()->json($bookings);
    }

}
