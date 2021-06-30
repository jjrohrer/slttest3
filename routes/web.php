<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return view('dashboard');
})->name('dashboard');

// Make work with TallAndSassy routes. This should be automatic (shrug)
require_once(__DIR__ . '/../submodules/TallAndSassy/PageGuide/page-guide/routes/web.php');
require_once(__DIR__ . '/../submodules/TallAndSassy/PageGuide/page-guide-admin/routes/web.php');
