<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    use HasFactory;

    protected $fillable = ['handyman_id', 'user_id', 'datetime'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function handyman()
    {
        return $this->belongsTo(Handyman::class);
    }

}
