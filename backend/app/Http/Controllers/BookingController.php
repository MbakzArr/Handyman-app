<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use Illuminate\Http\Request;

class BookingController extends Controller
{
    // Create a booking
    public function store(Request $request)
    {
        $validated = $request->validate([
            'user_id' => 'required|exists:users,id',
            'handyman_id' => 'required|exists:handymen,id',
            'datetime' => 'required|date',
        ]);

        $booking = Booking::create($validated);

        return response()->json(['message' => 'Booking successfully created!', 'booking' => $booking], 201);
    }

    // Admin view all bookings
    public function index()
    {
        $bookings = Booking::with('user', 'handyman')->get();
        return response()->json($bookings);
    }
}
