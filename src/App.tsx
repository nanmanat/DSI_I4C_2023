// import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import GMap from "./Map";

// function App() {
//   return (
//     <div className="relative flex">
//       <div className="w-full">
//         <div className="fixed w-2/3 h-full shadow-lg">
//           <GMap />
//         </div>
//       </div>
//       <div className="fixed right-0 top-0 w-1/3 h-full bg-[#5F224A] shadow-lg">
//         <div className="h-full flex flex-col justify-center items-center gap-5">
//           <h1 className="text-white font-bold text-xl">Confidence Level</h1>
//           <div className="py-5 w-4/5 rounded-md bg-[#EBEBEB] shadow-lg">
//             <div className="flex w-[95%] mx-auto">
//               <div className="w-[70%] flex items-center gap-5 ml-[5%]">
//                 <div className="h-[10px] w-[10px] bg-[#E7770E] rounded-sm" />
//                 <div>home</div>
//               </div>
//               <div className="w-[30%] pl-[15%]">
//                 <div>30 %</div>
//               </div>
//             </div>
//             <div className="flex w-[95%] mx-auto">
//               <div className="w-[70%] flex items-center gap-5 ml-[5%]">
//                 <div className="h-[10px] w-[10px] bg-[#8BCE1D] rounded-sm" />
//                 <div>office</div>
//               </div>
//               <div className="w-[30%] pl-[15%]">
//                 <div>40 %</div>
//               </div>
//             </div>
//             <div className="flex w-[95%] mx-auto">
//               <div className="w-[70%] flex items-center gap-5 ml-[5%]">
//                 <div className="h-[10px] w-[10px] bg-[#1D8BCE] rounded-sm" />
//                 <div>warehouse</div>
//               </div>
//               <div className="w-[30%] pl-[15%]">
//                 <div>90 %</div>
//               </div>
//             </div>
//           </div>
//           <h1 className="text-white font-bold text-xl">Schedule</h1>
//           <div className="py-5 w-4/5 mx-auto rounded-md h-[55%] bg-[#EBEBEB] shadow-lg">
//             <div className="flex flex-col items-center justify-center w-[95%] gap-1 mx-auto">
//               <div className="text-md">00:00น. - 09:00น. : &nbsp; home</div>
//               <div className="text-md">00:00น. - 09:00น. : &nbsp; home</div>
//               <div className="text-smdm">00:00น. - 09:00น. : &nbsp; home</div>
//               <div className="text-md">00:00น. - 09:00น. : &nbsp; home</div>
//               <div className="text-md">00:00น. - 09:00น. : &nbsp; home</div>
//               <div className="text-md">00:00น. - 09:00น. : &nbsp; home</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="fixed left-[5%] bottom-8 bg-[#5F224A] shadow-lg rounded-[100px] w-auto">
//         <div className="h-[45px] flex items-center gap-5 px-7">
//           <div className="h-[10px] w-[10px] bg-[#E7770E] rounded-sm" />
//           <h1 className="text-white text-md">home</h1>
//           <div className="h-[10px] w-[10px] bg-[#8BCE1D] rounded-sm" />
//           <h1 className="text-white text-md">office</h1>
//           <div className="h-[10px] w-[10px] bg-[#1D8BCE] rounded-sm" />
//           <h1 className="text-white text-md">warehouse</h1>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import * as React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Info from "./pages/Info";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Info" element={<Info />} />
      </Routes>
    </div>
  );
}
