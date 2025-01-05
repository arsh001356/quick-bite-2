import React from 'react'
import { Link } from 'react-router-dom';


function Home() {
    return (
        <>

            {/* hero sec */}
            <div className=" w-full h-fit ">
                <img className="w-full relative" src="/images/hero-bg.jpg" alt="" />
                <div className=" flex flex-wrap w-6/12 mx-24 italic absolute top-[10rem]">
                    <div className="text-white text-4xl font-bold mb-4 ">
                        <h1>Fast Food Restaurant</h1>
                    </div>
                    <div className="text-white">
                        <p>At The Quick Bite, we take pride in our diverse menu that showcases a fusion of flavors from
                            around
                            the
                            world. Our talented chefs are dedicated to creating mouthwatering dishes that cater to all
                            tastes
                            and
                            dietary preferences. From succulent steaks and fresh seafood to vegetarian delights and decadent
                            desserts, every meal is a celebration of taste and quality.
                        </p>
                    </div>

                </div>

            </div>

            {/* <!-- offer --> */}
            <div className="w-full h-96 bg-white flex   items-center justify-center space-x-7">

                <div className="bg-slate-800 text-white w-[30rem] h-48 rounded-md flex  justify-start items-center ">
                    <div className="mx-5 ">
                        <img className="rounded-full h-[10rem] border-4 border-yellow-500 hover:h-[11rem] hover:shadow-sm hover:shadow-black"
                            src="/images/o1.jpg " alt="" />
                    </div>
                    <div>
                        <p className="text-3xl italic mb-4">Tasty Tursday</p>
                        <div>
                            <h1 className="text-4xl ">20% off</h1>
                        </div>
                        <div>
                            <button
                                className="  bg-yellow-500 my-2 rounded-2xl px-4 py-1  flex justify-center items-center hover:bg-orange-600 cursor-pointer ">
                                Book
                                Table
                                <i className="fa-solid fa-cart-shopping mx-1"></i>
                            </button>
                        </div>

                    </div>

                </div>
                <div className="bg-slate-800 text-white w-[30rem] h-48 rounded-md flex  justify-start items-center ">
                    <div className="mx-5 ">
                        <img className="rounded-full h-[10rem] border-4 border-yellow-500 hover:h-[11rem] hover:shadow-sm hover:shadow-black"
                            src="/images/o2.jpg " alt="" />
                    </div>
                    <div>
                        <p className="text-3xl italic mb-4">Pizza Days</p>
                        <div>
                            <h1 className="text-4xl ">15% off</h1>
                        </div>
                        <button
                            className="  bg-yellow-500 my-2 rounded-2xl px-4 py-1  flex justify-center items-center hover:bg-orange-600 cursor-pointer ">
                            Book
                            Table
                            <i className="fa-solid fa-cart-shopping mx-1"></i>
                        </button>
                    </div>


                </div>

            </div>
            {/* <!-- our menu --> */}
            <div className="bg-white w-full h-auto ">
                <div className="w-full h-auto bg-white flex flex-col items-center  ">

                    <h1 className="font-bold text-4xl italic text-slate-800">Our Menu</h1>
                    <div className="border-b-4 rounded-lg border-yellow-500 w-20 my-1">


                    </div>
                </div>


                <div className="flex justify-evenly w-full mt-10 flex-wrap gap-8 ">
                    <div className="w-[23rem] h-[26rem] bg-slate-800 rounded-xl flex flex-col items-center overflow-hidden
                hover:shadow-2xl shadow-black ">
                        <div className="bg-gray-200 w-full h-[50%] flex flex-col items-center justify-center rounded-bl-3xl ">
                            <img className="h-40  " src="/images/f1.png" alt="" />
                        </div>
                        <div className="text-white flex  flex-col flex-wrap my-6 mx-5 ">
                            <h1 className="text-3xl my-2 font-bold">Delicious Pizza</h1>
                            <p>This mouth-watering pizza is topped with fresh tomatoes, mozzarella cheese, and basil, all on
                                a crispy crust. Perfect for any occasion!</p>
                            <div className="font-semibold text-lg flex justify-between items-center mt-8">
                                <p className="">₹300</p>
                                <button className="w-10 h-10 bg-yellow-500 rounded-full self-end hover:bg-orange-500 "> <i
                                    className="fa-solid fa-cart-shopping mx-1"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="w-[23rem] h-[26rem] bg-slate-800 rounded-xl flex flex-col items-center overflow-hidden
                hover:shadow-2xl shadow-black ">
                        <div className="bg-gray-200 w-full h-[50%] flex flex-col items-center justify-center rounded-bl-3xl ">
                            <img className="h-32  " src="/images/f2.png" alt="" />
                        </div>
                        <div className="text-white flex  flex-col flex-wrap my-6 mx-5 ">
                            <h1 className="text-3xl my-2 font-bold">Delicious Burger</h1>
                            <p className="">This juicy burger is topped with fresh lettuce, tomato, cheese, and a special
                                sauce, all
                                sandwiched between a toasted sesame bun! </p>

                            <div className="font-semibold text-lg flex justify-between items-center mt-8">
                                <p className="">₹350</p>
                                <button className="w-10 h-10 bg-yellow-500 rounded-full self-end hover:bg-orange-500 "> <i
                                    className="fa-solid fa-cart-shopping mx-1"></i></button>
                            </div>
                        </div>
                    </div>

                    <div className="w-[23rem] h-[26rem] bg-slate-800 rounded-xl flex flex-col items-center overflow-hidden
                hover:shadow-2xl shadow-black ">
                        <div className="bg-gray-200 w-full h-[50%] flex flex-col items-center justify-center rounded-bl-3xl ">
                            <img className="h-36  " src="/images/f3.png" alt="" />
                        </div>
                        <div className="text-white flex  flex-col flex-wrap my-6 mx-5 ">
                            <h1 className="text-3xl my-2 font-bold">Delicious Pizza</h1>
                            <p>This mouth-watering pizza is topped with fresh tomatoes, mozzarella cheese, and basil, all on
                                a crispy crust. Perfect for any occasion!</p>
                            <div className="font-semibold text-lg flex justify-between items-center mt-8">
                                <p className="">₹500</p>
                                <button className="w-10 h-10 bg-yellow-500 rounded-full self-end hover:bg-orange-500 "> <i
                                    className="fa-solid fa-cart-shopping mx-1"></i></button>
                            </div>
                        </div>
                    </div>


                    <div className="w-[23rem] h-[26rem] bg-slate-800 rounded-xl flex flex-col items-center overflow-hidden
                hover:shadow-2xl shadow-black ">
                        <div className="bg-gray-200 w-full h-[50%] flex flex-col items-center justify-center rounded-bl-3xl ">
                            <img className="h-32  " src="/images/f4.png" alt="" />
                        </div>
                        <div className="text-white flex  flex-col flex-wrap my-6 mx-5 ">
                            <h1 className="text-3xl my-2 font-bold">Delicious Pasta</h1>
                            <p>This delightful pasta is tossed with a rich and creamy Alfredo sauce, garnished with freshly
                                grated Parmesan cheese and parsley!</p>

                            <div className="font-semibold text-lg flex justify-between items-center mt-8">
                                <p className="">₹370</p>
                                <button className="w-10 h-10 bg-yellow-500 rounded-full self-end  hover:bg-orange-500"> <i
                                    className="fa-solid fa-cart-shopping mx-1"></i></button>
                            </div>
                        </div>
                    </div>

                    <div className="w-[23rem] h-[26rem] bg-slate-800 rounded-xl flex flex-col items-center overflow-hidden
                hover:shadow-2xl shadow-black ">
                        <div className="bg-gray-200 w-full h-[50%] flex flex-col items-center justify-center rounded-bl-3xl ">
                            <img className="h-40  " src="/images/f5.png" alt="" />
                        </div>
                        <div className="text-white flex  flex-col flex-wrap my-6 mx-5 ">
                            <h1 className="text-3xl my-2 font-bold">French Fries</h1>
                            <p>These crispy golden French fries are perfectly seasoned and cooked to perfection, making them
                                the ideal side dish or snack!</p>

                            <div className="font-semibold text-lg flex justify-between items-center mt-8">
                                <p className="">₹200</p>
                                <button className="w-10 h-10 bg-yellow-500 rounded-full self-end hover:bg-orange-500 "> <i
                                    className="fa-solid fa-cart-shopping mx-1"></i></button>
                            </div>
                        </div>
                    </div>

                    <div className="w-[23rem] h-[26rem] bg-slate-800 rounded-xl flex flex-col items-center overflow-hidden
                hover:shadow-2xl shadow-black ">
                        <div className="bg-gray-200 w-full h-[50%] flex flex-col items-center justify-center rounded-bl-3xl ">
                            <img className="h-36  " src="/images/f6.png" alt="" />
                        </div>
                        <div className="text-white flex  flex-col flex-wrap my-6 mx-5 ">
                            <h1 className="text-3xl my-2 font-bold">Delicious Pizza</h1>
                            <p>This mouth-watering pizza is topped with fresh tomatoes, mozzarella cheese, and basil, all on
                                a crispy crust. Perfect for any occasion!</p>
                            <div className="font-semibold text-lg flex justify-between items-center mt-8">
                                <p className="">₹300</p>
                                <button className="w-10 h-10 bg-yellow-500 rounded-full self-end hover:bg-orange-500"> <i
                                    className="fa-solid fa-cart-shopping mx-1"></i></button>
                            </div>
                        </div>
                    </div>

                    <div className="w-[23rem] h-[26rem] bg-slate-800 rounded-xl flex flex-col items-center overflow-hidden
                hover:shadow-2xl shadow-black ">
                        <div className="bg-gray-200 w-full h-[50%] flex flex-col items-center justify-center rounded-bl-3xl ">
                            <img className="h-40  " src="/images/f7.png" alt="" />
                        </div>
                        <div className="text-white flex  flex-col flex-wrap my-6 mx-5 ">
                            <h1 className="text-3xl my-2 font-bold">Tasty Burger</h1>
                            <p>This tasty burger features a juicy beef patty topped with melted cheese, crisp lettuce, fresh
                                tomato,, all nestled in a soft, toasted bun.!</p>

                            <div className="font-semibold text-lg flex justify-between items-center mt-8">
                                <p className="">₹250</p>
                                <button className="w-10 h-10 bg-yellow-500 rounded-full self-end hover:bg-orange-500"> <i
                                    className="fa-solid fa-cart-shopping mx-1"></i></button>
                            </div>
                        </div>
                    </div>

                    <div className="w-[23rem] h-[26rem] bg-slate-800 rounded-xl flex flex-col items-center overflow-hidden
                hover:shadow-2xl shadow-black ">
                        <div className="bg-gray-200 w-full h-[50%] flex flex-col items-center justify-center rounded-bl-3xl ">
                            <img className="h-40  " src="/images/f8.png" alt="" />
                        </div>
                        <div className="text-white flex  flex-col flex-wrap my-6 mx-5 ">
                            <h1 className="text-3xl my-2 font-bold">Tasty Burger</h1>
                            <p>This tasty burger features a juicy beef patty topped with melted cheese, crisp lettuce, fresh
                                tomato,, all nestled in a soft, toasted bun.!</p>
                            <div className="font-semibold text-lg flex justify-between items-center mt-8">
                                <p className="">₹199</p>
                                <button className="w-10 h-10 bg-yellow-500 rounded-full self-end hover:bg-orange-500"> <i
                                    className="fa-solid fa-cart-shopping mx-1"></i></button>
                            </div>
                        </div>
                    </div>

                    <div className="w-[23rem] h-[26rem] bg-slate-800 rounded-xl flex flex-col items-center overflow-hidden
                hover:shadow-2xl shadow-black ">
                        <div className="bg-gray-200 w-full h-[50%] flex flex-col items-center justify-center rounded-bl-3xl ">
                            <img className="h-40  " src="/images/f9.png" alt="" />
                        </div>
                        <div className="text-white flex  flex-col flex-wrap my-6 mx-5 ">
                            <h1 className="text-3xl my-2 font-bold">Delicious Pasta</h1>
                            <p>This delightful pasta is tossed with a rich and creamy Alfredo sauce, garnished with freshly
                                grated Parmesan cheese and parsley!</p>
                            <div className="font-semibold text-lg flex justify-between items-center mt-8">
                                <p className="">₹399</p>
                                <button className="w-10 h-10 bg-yellow-500 rounded-full self-end hover:bg-orange-500"> <i
                                    className="fa-solid fa-cart-shopping mx-1"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center pb-10 mt-14">
                    <button className="text-white text-lg bg-yellow-400 rounded-full px-4 hover:bg-orange-500"><Link to="/menu">View More</Link></button>
                </div>
            </div>
        </>
    )
}

export default Home