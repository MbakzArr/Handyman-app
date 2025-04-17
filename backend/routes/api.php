<?php

use App\Http\Controllers\HandymanController;
use App\Http\Controllers\BookingController;
use Illuminate\Support\Facades\Route;

// Get handymen within a 10km radius
Route::get('handymen/nearby', [HandymanController::class, 'getNearbyHandymen']);

// Get handyman profile by ID
Route::get('handyman/{id}', [HandymanController::class, 'show']);

// Create a booking
Route::post('bookings', [BookingController::class, 'store']);

// Admin view bookings
Route::get('admin/bookings', [BookingController::class, 'index']);
