import React,{useEffect, useState} from 'react'
import Image from 'next/image'

const Diet = () => {
    const Calories = [1092,700,1170,3200];
    const[number,setNumber]=useState(Calories);
    var addCalories =()=>{
        var sum = number.reduce((acc,curr)=>acc+curr,0);
        return sum;
    useEffect(()=>{
        var timer =setTimeout(()=>{
            addCalories();
        },3000);
        return () => clearTimeout(timer);
    },[]);
    }
  return (
    <><Image
    alt="Mountains"
    src= "/public/mountains.jpg"
    quality={100}
    fill
    sizes="100vw"
    style={{
      objectFit: 'cover',
    }}
  />
          <section className="text-gray-600 body-font ">
                  <div className="container h-full px-10 py-24 mx-auto">
                      <div className="flex flex-col text-center w-full mb-20">
                          <h1 className="sm:text-8xl text-8xl font-large title-font text-gray-900 ">Calories </h1>
                          <h2 className="sm:text-4xl text-4xl font-semibold title-font text-black-1500  font-MerriweatherSans">{addCalories()}</h2>
                      </div>
                      <div className="lg:w-2/3 w-full mx-auto h-full overflow-auto">
                          <table className="table-auto w-full text-left whitespace-no-wrap ">
                              <thead>
                                  <tr>
                                      <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Eatables </th>
                                      <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Quantity</th>
                                      <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100"></th>
                                      <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Calories</th>
                                      <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr>
                                      <td className="px-4 py-3">Samosa</td>
                                      <td className="px-4 py-3">5</td>
                                      <td className="px-4 py-3"></td>
                                      <td className="px-4 py-3 text-lg text-gray-900">1092cal</td>
                                      <td className="w-10 text-center">
                                      </td>
                                  </tr>
                                  <tr>
                                      <td className="border-t-2 border-gray-200 px-4 py-3">Momos</td>
                                      <td className="border-t-2 border-gray-200 px-4 py-3">4 Plates</td>
                                      <td className="border-t-2 border-gray-200 px-4 py-3"></td>
                                      <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">700cal</td>
                                      <td className="border-t-2 border-gray-200 w-10 text-center">
                                      </td>
                                  </tr>
                                  <tr>
                                      <td className="border-t-2 border-gray-200 px-4 py-3">Panipuri</td>
                                      <td className="border-t-2 border-gray-200 px-4 py-3">3 Plates</td>
                                      <td className="px-4 py-3"></td>
                                      <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">1170cal</td>
                                      <td className="border-t-2 border-gray-200 w-10 text-center">
                                      </td>
                                  </tr>
                                  <tr>
                                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">Cheese-Burst Pizza</td>
                                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">2 Pizzas</td>
                                      <td className="px-4 py-3"></td>
                                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">3200cal</td>
                                      <td className="border-t-2 border-b-2 border-gray-200 w-10 text-center">
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                      <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
                          <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                              </svg>
                          </a>
                          <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" onClick={addCalories}>Add</button>
                      </div>
                  </div>
          </section></>
  )
}

export default Diet