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

        $handymen = DB::table('handymen')
            ->join('users', 'handymen.user_id', '=', 'users.id')
            ->join('services', 'handymen.service_id', '=', 'services.id')
            ->select('handymen.*', 'users.name', 'users.email', 'users.lat', 'users.lng', 'services.name as service_name')
            ->selectRaw("
            (6371 * acos(
                cos(radians(?)) * cos(radians(users.lat)) * cos(radians(users.lng) - radians(?)) +
                sin(radians(?)) * sin(radians(users.lat))
            )) AS distance", [$lat, $lng, $lat])
            ->havingRaw("distance < 10")
            ->orderBy('distance')
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
