<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use Illuminate\Http\Request;
use Carbon\Carbon;

class BookingController extends Controller
{
    // Create a booking
    public function store(Request $request)
    {
        \Log::info('Before parsing datetime:', ['datetime' => $request->datetime]);

        $request->validate([
            'handyman_id' => 'required|integer',
            'user_id' => 'required|integer',
            'datetime' => 'required|date',
        ]);

        // ✨ Convert ISO string to MySQL-compatible format
        $formattedDatetime = Carbon::parse($request->datetime)->format('Y-m-d H:i:s');

        \Log::info('After parsing datetime:', ['formatted' => $formattedDatetime]);

        $booking = Booking::create([
            'handyman_id' => $request->handyman_id,
            'user_id' => $request->user_id,
            'datetime' => $formattedDatetime, // This should be MySQL safe
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
