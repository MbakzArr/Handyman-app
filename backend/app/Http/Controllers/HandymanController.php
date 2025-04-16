<?php

namespace App\Http\Controllers;

use App\Models\Handyman;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class HandymanController extends Controller
{
    // Get handymen within a 10km radius
    public function getNearbyHandymen(Request $request)
    {
        $lat = $request->query('lat');
        $lng = $request->query('lng');

        // Default values if not provided
        if (!$lat || !$lng) {
            return response()->json(['error' => 'Latitude and Longitude are required'], 400);
        }

        // Fetch handymen within 10km using Haversine formula
        $handymen = DB::table('handymen')
            ->select('*')
            ->selectRaw("(
                6371 * acos(
                    cos(radians(?)) * cos(radians(lat)) * cos(radians(lng) - radians(?)) +
                    sin(radians(?)) * sin(radians(lat))
                )
            ) AS distance", [$lat, $lng, $lat])
            ->havingRaw("distance < 10") // 10km radius
            ->get();

        return response()->json($handymen);
    }

    // Get handyman profile by ID
    public function show($id)
    {
        $handyman = Handyman::with('user', 'service')->find($id);

        if (!$handyman) {
            return response()->json(['error' => 'Handyman not found'], 404);
        }

        return response()->json($handyman);
    }
}
