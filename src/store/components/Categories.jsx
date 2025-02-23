import React from 'react'
import { categoryData } from '../data/categorydata'
const Categories = () => {
  const firsttwo=categoryData.slice(0,2)
  return (
    <div>
      <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -mx-4 -mb-10 text-center">
      {firsttwo.map((item)=>{
        return(
      <div class="sm:w-1/2 mb-10 px-4">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src={item.image}/>
        </div>
        <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">{item.section}</h2>
        <p class="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
        <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Visit here</button>
      </div>
       )
      })}
    </div>
  </div>
</section>
    </div>

  )
}

export default Categories

// import React from 'react'

// const Categories = () => {
//   return (
//     <>
//     <div>
    
// <div class="bg-white">
    
//     <div class="relative z-40 lg:hidden" role="dialog" aria-modal="true">
    
//       <div class="fixed inset-0 bg-black bg-opacity-25" aria-hidden="true"></div>

//       <div class="fixed inset-0 z-40 flex">

//         <div class="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
//           <div class="flex items-center justify-between px-4">
//             <h2 class="text-lg font-medium text-gray-900">Filters</h2>
//             <button type="button" class="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400">
//               <span class="sr-only">Close menu</span>
//               <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
//                 <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
//           </div>

          
//           <form class="mt-4 border-t border-gray-200">
//             <h3 class="sr-only">Categories</h3>
//             <ul role="list" class="px-2 py-3 font-medium text-gray-900">
//               <li>
//                 <a href="#" class="block px-2 py-3">Totes</a>
//               </li>
//               <li>
//                 <a href="#" class="block px-2 py-3">Backpacks</a>
//               </li>
//               <li>
//                 <a href="#" class="block px-2 py-3">Travel Bags</a>
//               </li>
//               <li>
//                 <a href="#" class="block px-2 py-3">Hip Bags</a>
//               </li>
//               <li>
//                 <a href="#" class="block px-2 py-3">Laptop Sleeves</a>
//               </li>
//             </ul>
// </form>
           
//             <div class="border-t border-gray-200 px-4 py-6">
//               <h3 class="-mx-2 -my-3 flow-root">
               
//                 <button type="button" class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-1" aria-expanded="false">
//                   <span class="font-medium text-gray-900">Category</span>
//                   <span class="ml-6 flex items-center">
                    
//                     <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                       <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
//                     </svg>
//                     <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                       <path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clip-rule="evenodd" />
//                     </svg>
//                   </span>
//                 </button>
//               </h3>
             
             
            
//     <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//       <div class="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
//         <h1 class="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1>

//         <div class="flex items-center">
//           <div class="relative inline-block text-left">
//             <div>
//               <button type="button" class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900" id="menu-button" aria-expanded="false" aria-haspopup="true">
//                 Sort
//                 <svg class="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                   <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
//                 </svg>
//               </button>
//             </div>


             
//             <div class="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
//               <div class="py-1" role="none">
             
//                 <a href="#" class="block px-4 py-2 text-sm font-medium text-gray-900" role="menuitem" tabindex="-1" id="menu-item-0">Most Popular</a>
//                 <a href="#" class="block px-4 py-2 text-sm text-gray-500" role="menuitem" tabindex="-1" id="menu-item-1">Best Rating</a>
//                 <a href="#" class="block px-4 py-2 text-sm text-gray-500" role="menuitem" tabindex="-1" id="menu-item-2">Newest</a>
//                 <a href="#" class="block px-4 py-2 text-sm text-gray-500" role="menuitem" tabindex="-1" id="menu-item-3">Price: Low to High</a>
//                 <a href="#" class="block px-4 py-2 text-sm text-gray-500" role="menuitem" tabindex="-1" id="menu-item-4">Price: High to Low</a>
//               </div>
//             </div>
//           </div>

//           <button type="button" class="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
//             <span class="sr-only">View grid</span>
//             <svg class="h-5 w-5" aria-hidden="true" viewBox="0 0 20 20" fill="currentColor">
//               <path fill-rule="evenodd" d="M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z" clip-rule="evenodd" />
//             </svg>
//           </button>
//           <button type="button" class="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden">
//             <span class="sr-only">Filters</span>
//             <svg class="h-5 w-5" aria-hidden="true" viewBox="0 0 20 20" fill="currentColor">
//               <path fill-rule="evenodd" d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z" clip-rule="evenodd" />
//             </svg>
//           </button>
//         </div>
//       </div>

//       <section aria-labelledby="products-heading" class="pb-24 pt-6">
//         <h2 id="products-heading" class="sr-only">Products</h2>

//         <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
          
//           <form class="hidden lg:block">
//             <h3 class="sr-only">Categories</h3>
//             <ul role="list" class="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
//               <li>
//                 <a href="#">Totes</a>
//               </li>
//               <li>
//                 <a href="#">Backpacks</a>
//               </li>
//               <li>
//                 <a href="#">Travel Bags</a>
//               </li>
//               <li>
//                 <a href="#">Hip Bags</a>
//               </li>
//               <li>
//                 <a href="#">Laptop Sleeves</a>
//               </li>
//             </ul>

//             <div class="border-b border-gray-200 py-6">
//               <h3 class="-my-3 flow-root">
                
//                 <button type="button" class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-0" aria-expanded="false">
//                   <span class="font-medium text-gray-900">Color</span>
//                   <span class="ml-6 flex items-center">
                  
//                     <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                       <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
//                     </svg>
                    
//                     <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                       <path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clip-rule="evenodd" />
//                     </svg>
//                   </span>
//                 </button>
//               </h3>
              
              
//             <div class="border-b border-gray-200 py-6">
//               <h3 class="-my-3 flow-root">
                
//                 <button type="button" class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-1" aria-expanded="false">
//                   <span class="font-medium text-gray-900">Category</span>
//                   <span class="ml-6 flex items-center">
//                     <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                       <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
//                     </svg>
//                     <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                       <path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clip-rule="evenodd" />
//                     </svg>
//                   </span>
//                 </button>
//               </h3>
//               <div class="pt-6" id="filter-section-1">
//                 <div class="space-y-4">
//                   <div class="flex items-center">
//                     <input id="filter-category-0" name="category[]" value="new-arrivals" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
//                     <label for="filter-category-0" class="ml-3 text-sm text-gray-600">New Arrivals</label>
//                   </div>
//                   <div class="flex items-center">
//                     <input id="filter-category-1" name="category[]" value="sale" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
//                     <label for="filter-category-1" class="ml-3 text-sm text-gray-600">Sale</label>
//                   </div>
//                   <div class="flex items-center">
//                     <input id="filter-category-2" name="category[]" value="travel" type="checkbox" checked class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
//                     <label for="filter-category-2" class="ml-3 text-sm text-gray-600">Travel</label>
//                   </div>
//                   <div class="flex items-center">
//                     <input id="filter-category-3" name="category[]" value="organization" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
//                     <label for="filter-category-3" class="ml-3 text-sm text-gray-600">Organization</label>
//                   </div>
//                   <div class="flex items-center">
//                     <input id="filter-category-4" name="category[]" value="accessories" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
//                     <label for="filter-category-4" class="ml-3 text-sm text-gray-600">Accessories</label>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div class="border-b border-gray-200 py-6">
//               <h3 class="-my-3 flow-root">
//                 <button type="button" class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-2" aria-expanded="false">
//                   <span class="font-medium text-gray-900">Size</span>
//                   <span class="ml-6 flex items-center">
//                     <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                       <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
//                     </svg>
//                     <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                       <path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clip-rule="evenodd" />
//                     </svg>
//                   </span>
//                 </button>
//               </h3>
             
             
//               </div>
//             </div>
//           </form>

//           <div class="lg:col-span-3">
//           </div>
//         </div>
//       </section>
//     </main>
//   </div>
// </div>
// </div>
// </div>
// </div>
// </div>
// </>  
//   )
// }

// export default Categories
