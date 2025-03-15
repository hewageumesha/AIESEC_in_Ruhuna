/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div>
            <nav class="bg-blue-600 text-white p-4">
                <div class="container mx-auto flex justify-between items-center">
                    <div class="flex items-center">
                        <img alt="AIESEC logo" class="h-10 w-10 mr-2" height="50" src="https://storage.googleapis.com/a1aa/image/O6Ihmlu7hPVIbvKgFUwU4KwtgLZNEXEQB4pr06rHbOo.jpg" width="50" />
                        <span class="font-bold text-xl">AIESEC in Ruhuna</span>
                    </div>
                    <ul class="flex space-x-4">
                        <li><a class="hover:underline" href="#">Home</a></li>
                        <li><a class="hover:underline" href="#">About</a></li>
                        <li><a class="hover:underline" href="#">Events</a></li>
                        <li><a class="hover:underline" href="#">Gallery</a></li>
                        <li><a class="hover:underline" href="/login">Login</a></li>
                    </ul>
                </div>
            </nav>

            <section class="relative">
                <img alt="A large banner showcasing AIESEC activities" class="w-full h-96 object-cover" height="600" src="https://storage.googleapis.com/a1aa/image/Zz3TgsrjiHVksKO164BZWD3TjMByY5rl7geJN0XnsKM.jpg" width="1920" />
                <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div class="text-center text-white">
                        <h1 class="text-4xl font-bold">Welcome to AIESEC in Ruhuna</h1>
                        <p class="mt-4 text-lg">Empowering young people for a better future</p>
                    </div>
                </div>
            </section>

            <section class="py-12 bg-gray-100">
                <div class="container mx-auto">
                    <h2 class="text-3xl font-bold text-center mb-8">Recent Events</h2>
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        <img alt="Image of a recent AIESEC event 1" class="w-full h-48 object-cover" height="200" src="https://storage.googleapis.com/a1aa/image/B5t4BGrfYw7YlHKbhJLpHH2biY9GFADRPY9OGcxBb4s.jpg" width="300" />
                        <img alt="Image of a recent AIESEC event 2" class="w-full h-48 object-cover" height="200" src="https://storage.googleapis.com/a1aa/image/jFSB6T7WcjleVrLvqzss79WodpJXCMQ7MfPX4Pln_vc.jpg" width="300" />
                        <img alt="Image of a recent AIESEC event 3" class="w-full h-48 object-cover" height="200" src="https://storage.googleapis.com/a1aa/image/UOXLduJaCdq043Pk2Gh4XUztIvfiUQ9g8nUVvutB7nU.jpg" width="300" />
                        <img alt="Image of a recent AIESEC event 4" class="w-full h-48 object-cover" height="200" src="https://storage.googleapis.com/a1aa/image/C007LUwEXdiCipiHqSo1as8ddcpIjnLGch9yOk3qwzY.jpg" width="300" />
                        <img alt="Image of a recent AIESEC event 5" class="w-full h-48 object-cover" height="200" src="https://storage.googleapis.com/a1aa/image/WuyShKPQfo2dzC-vRSFiAoYt743LAtp_2fFu57yEalc.jpg" width="300" />
                        <img alt="Image of a recent AIESEC event 6" class="w-full h-48 object-cover" height="200" src="https://storage.googleapis.com/a1aa/image/_b3xNe4GuomrpuF374dOn86QDVEab7oM0CnCJ-kfCNw.jpg" width="300" />
                        <img alt="Image of a recent AIESEC event 7" class="w-full h-48 object-cover" height="200" src="https://storage.googleapis.com/a1aa/image/_iIVDCmP3ormhSrn4FVdlJvvtqTRLpm1xOIK9e4Q-zQ.jpg" width="300" />
                        <img alt="Image of a recent AIESEC event 8" class="w-full h-48 object-cover" height="200" src="https://storage.googleapis.com/a1aa/image/FBlXj2Ncu6-Cq1yIl2fgGDY4I46Q9btpMl0jKss1Nm4.jpg" width="300" />
                    </div>
                </div>
            </section>

            <section class="py-12">
                <div class="container mx-auto text-center">
                    <h2 class="text-3xl font-bold mb-4">About AIESEC in Ruhuna</h2>
                    <p class="text-lg">AIESEC in Ruhuna is dedicated to empowering young people to make a positive impact on society. Our mission is to develop leadership skills through cross-cultural exchanges and professional experiences.</p>
                </div>
            </section>

            <section class="py-12 bg-gray-100">
                <div class="container mx-auto">
                    <h2 class="text-3xl font-bold text-center mb-8">Upcoming Events</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div class="bg-white p-6 rounded-lg shadow-lg">
                            <h3 class="text-2xl font-bold mb-2">Event Title 1</h3>
                            <p class="text-gray-700 mb-4">Date: 2023-10-01</p>
                            <a class="text-blue-600 hover:underline" href="#">View More</a>
                        </div>
                        <div class="bg-white p-6 rounded-lg shadow-lg">
                            <h3 class="text-2xl font-bold mb-2">Event Title 2</h3>
                            <p class="text-gray-700 mb-4">Date: 2023-10-15</p>
                            <a class="text-blue-600 hover:underline" href="#">View More</a>
                        </div>
                        <div class="bg-white p-6 rounded-lg shadow-lg">
                            <h3 class="text-2xl font-bold mb-2">Event Title 3</h3>
                            <p class="text-gray-700 mb-4">Date: 2023-11-01</p>
                            <a class="text-blue-600 hover:underline" href="#">View More</a>
                        </div>
                    </div>
                </div>
            </section>

            <section class="py-12">
                <div class="container mx-auto">
                    <h2 class="text-3xl font-bold text-center mb-8">IGV Front Office Functions</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div class="bg-blue-100 p-6 rounded-lg shadow-md">
                            <h3 class="text-xl font-bold mb-2">Function Title 1</h3>
                            <p class="text-gray-700 mb-4">Description of the IGV front office function 1.</p>
                        </div>
                        <div class="bg-blue-100 p-6 rounded-lg shadow-md">
                            <h3 class="text-xl font-bold mb-2">Function Title 2</h3>
                            <p class="text-gray-700 mb-4">Description of the IGV front office function 2.</p>
                        </div>
                        <div class="bg-blue-100 p-6 rounded-lg shadow-md">
                            <h3 class="text-xl font-bold mb-2">Function Title 3</h3>
                            <p class="text-gray-700 mb-4">Description of the IGV front office function 3.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="py-12 bg-gray-100">
                <div class="container mx-auto">
                    <h2 class="text-3xl font-bold text-center mb-8">IGV Back Office Functions</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div class="bg-white p-6 border border-gray-300 rounded-lg shadow-sm">
                            <h3 class="text-xl font-bold mb-2">Function Title 1</h3>
                            <p class="text-gray-700 mb-4">Description of the IGV back office function 1.</p>
                        </div>
                        <div class="bg-white p-6 border border-gray-300 rounded-lg shadow-sm">
                            <h3 class="text-xl font-bold mb-2">Function Title 2</h3>
                            <p class="text-gray-700 mb-4">Description of the IGV back office function 2.</p>
                        </div>
                        <div class="bg-white p-6 border border-gray-300 rounded-lg shadow-sm">
                            <h3 class="text-xl font-bold mb-2">Function Title 3</h3>
                            <p class="text-gray-700 mb-4">Description of the IGV back office function 3.</p>
                        </div>
                    </div>
                </div>
            </section>

            <footer class="bg-blue-600 text-white py-8">
                <div class="container mx-auto">
                    <div class="flex flex-wrap justify-between">
                        <div class="w-full md:w-1/3 mb-6 md:mb-0">
                            <h3 class="text-lg font-bold mb-2">About AIESEC in Ruhuna</h3>
                            <p class="text-sm">AIESEC in Ruhuna is dedicated to empowering young people to make a positive impact on society. Our mission is to develop leadership skills through cross-cultural exchanges and professional experiences.</p>
                        </div>
                        <div class="w-full md:w-1/3 mb-6 md:mb-0">
                            <h3 class="text-lg font-bold mb-2">Quick Links</h3>
                            <ul class="text-sm">
                                <li class="mb-1"><a class="hover:underline" href="#">Home</a></li>
                                <li class="mb-1"><a class="hover:underline" href="#">About Us</a></li>
                                <li class="mb-1"><a class="hover:underline" href="#">Events</a></li>
                                <li class="mb-1"><a class="hover:underline" href="#">Task Management</a></li>
                                <li class="mb-1"><a class="hover:underline" href="#">Gallery</a></li>
                                <li class="mb-1"><a class="hover:underline" href="#">Contact Us</a></li>
                                <li class="mb-1"><a class="hover:underline" href="#">Login</a></li>
                            </ul>
                        </div>
                        <div class="w-full md:w-1/3">
                            <h3 class="text-lg font-bold mb-2">Contact Information</h3>
                            <p class="text-sm">Email: info@aiesec-ruhuna.org</p>
                            <p class="text-sm">Phone: +94 71 234 5678</p>
                            <p class="text-sm">Location: University of Ruhuna, Matara, Sri Lanka</p>
                            <div class="mt-4">
                                <h3 class="text-lg font-bold mb-2">Follow Us</h3>
                                <div class="flex space-x-4">
                                    <a class="hover:text-gray-300" href="#"><i class="fab fa-facebook-f"></i></a>
                                    <a class="hover:text-gray-300" href="#"><i class="fab fa-twitter"></i></a>
                                    <a class="hover:text-gray-300" href="#"><i class="fab fa-instagram"></i></a>
                                    <a class="hover:text-gray-300" href="#"><i class="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-8 text-center border-t border-gray-400 pt-4">
                        <p class="text-sm">&copy; 2025 AIESEC in Ruhuna. All Rights Reserved.</p>
                        <div class="mt-2 text-sm">
                            <a class="hover:underline" href="#">Privacy Policy</a> |
                            <a class="hover:underline" href="#">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default HomePage;
