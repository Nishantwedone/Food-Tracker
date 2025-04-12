// 'use client';

// import React from 'react';
// import { Sidebar } from '@/components/ui/Sidebar';
// import { Button } from '@/components/ui/Button';

// const dummyMeals = [
//   {
//     id: '1',
//     patient: {
//       name: 'John Doe',
//       floorNumber: '2',
//       roomNumber: '201',
//     },
//     mealPlan: {
//       mealType: 'Breakfast',
//     },
//     preparedBy: {
//       user: {
//         name: 'Chef Mike',
//       },
//     },
//     deliveredBy: {
//       user: {
//         name: 'Delivery Staff 1',
//       },
//     },
//     status: 'DELIVERED',
//     orderTime: '2025-02-15T06:00:00Z', // New field
//     scheduledFor: '2025-02-15T08:00:00Z',
//     notes: null,
//   },
//   {
//     id: '2',
//     patient: {
//       name: 'Jane Smith',
//       floorNumber: '3',
//       roomNumber: '302',
//     },
//     mealPlan: {
//       mealType: 'Lunch',
//     },
//     preparedBy: {
//       user: {
//         name: 'Chef Sarah',
//       },
//     },
//     deliveredBy: null,
//     status: 'PREPARING',
//     orderTime: '2025-02-15T10:00:00Z', // New field
//     scheduledFor: '2025-02-15T12:00:00Z',
//     notes: null,
//   },
//   {
//     id: '3',
//     patient: {
//       name: 'Robert Wilson',
//       floorNumber: '1',
//       roomNumber: '105',
//     },
//     mealPlan: {
//       mealType: 'Dinner',
//     },
//     preparedBy: null,
//     deliveredBy: null,
//     status: 'PENDING',
//     orderTime: '2025-02-15T16:00:00Z', // New field
//     scheduledFor: '2025-02-15T18:00:00Z',
//     notes: null,
//   },
// ];


// export default function PantryDashboard() {
//   return (
//     <div className="flex h-screen">
//         <Sidebar/>
//         <div className="container mx-auto p-6 ml-20 md:ml-64">
//         <h1 className="text-2xl font-bold mb-6">Meal Plans and Deliveries</h1>
//         <p>Have a real time look on patient meal details, the delivery status and be updated about all changes from the pantry staff.</p>
//         <hr />
//         <br />

//         <table className="w-full table-auto border-collapse border border-gray-200">
//             <thead>
//             <tr className="bg-gray-100">
//                 <th className="border border-gray-300 px-4 py-2">Patient</th>
//                 <th className="border border-gray-300 px-4 py-2">Meal Type</th>
//                 <th className="border border-gray-300 px-4 py-2">Prepared By</th>
//                 <th className="border border-gray-300 px-4 py-2">Delivered By</th>
//                 <th className="border border-gray-300 px-4 py-2">Status</th>
//                 <th className="border border-gray-300 px-4 py-2">Scheduled For</th>
//             </tr>
//             </thead>
//             <tbody>
            // {dummyMeals.map((meal) => (
//                 <tr key={meal.id}>
//                 <td className="border border-gray-300 px-4 py-4">
//                     {meal.patient.name} (Room: {meal.patient.roomNumber})
//                 </td>
//                 <td className="border border-gray-300 px-4 py-2">{meal.mealPlan.mealType}</td>
//                 <td className="border border-gray-300 px-4 py-2">
//                     {meal.preparedBy?.user.name || 'Not Assigned'}
//                 </td>
//                 <td className="border border-gray-300 px-4 py-2">
//                     {meal.deliveredBy?.user.name || 'Not Assigned'}
//                 </td>
//                 <td className="border border-gray-300 px-4 py-2">{meal.status}</td>
//                 <td className="border border-gray-300 px-4 py-2">
//                     {new Date(meal.scheduledFor).toLocaleString()}
//                 </td>
//                 </tr>
//             ))}
//             </tbody>
//         </table>
//         <Button size='lg' className='my-4'><a href="/pantry">Check Pantry Status</a></Button>
//         </div>
//     </div>
//   );
// }


// "use client"

// import React from "react"
// import { Sidebar } from "@/components/ui/Sidebar"
// import { Button } from "@/components/ui/Button"

// const dummyMeals = [
//   {
//     id: "1",
//     patient: {
//       name: "manish ",
//       floorNumber: "2",
//       roomNumber: "201",
//     },
//     mealPlan: {
//       mealType: "Breakfast",
//     },
//     deliveredBy: {
//       user: {
//         name: "Delivery Staff 1",
//       },
//     },
//     status: "DELIVERED",
//     orderTime: "2025-02-15T06:00:00Z",
//     scheduledFor: "2025-02-15T07:00:00Z",
//     notes: null,
//   },
//   {
//     id: "2",
//     patient: {
//       name: "ajay",
//       floorNumber: "3",
//       roomNumber: "302",
//     },
//     mealPlan: {
//       mealType: "Lunch",
//     },
//     deliveredBy: null,
//     status: "PREPARING",
//     orderTime: "2025-02-15T10:00:00Z",
//     scheduledFor: "2025-02-15T11:00:00Z",
//     notes: null,
//   },
//   {
//     id: "3",
//     patient: {
//       name: "kisan",
//       floorNumber: "1",
//       roomNumber: "105",
//     },
//     mealPlan: {
//       mealType: "Dinner",
//     },
//     deliveredBy: null,
//     status: "PENDING",
//     orderTime: "2025-02-15T16:00:00Z",
//     scheduledFor: "2025-02-15T17:00:00Z",
//     notes: null,
//   },
//   {
//     id: "4",
//     patient: {
//       name: "mohan",
//       floorNumber: "3",
//       roomNumber: "15",
//     },
//     mealPlan: {
//       mealType: "Lunch",
//     },
//     deliveredBy: null,
//     status: "PREPARING",
//     orderTime: "2025-02-15T17:00:00Z",
//     scheduledFor: "2025-02-15T18:00:00Z",
//     notes: null,
//   },
//   {
//     id: "5",
//     patient: {
//       name: "shayam",
//       floorNumber: "7",
//       roomNumber: "14",
//     },
//     mealPlan: {
//       mealType: "Lunch",
//     },
//     deliveredBy: null,
//     status: "DELIVERED",
//     orderTime: "2025-02-15T18:00:00Z",
//     scheduledFor: "2025-02-15T19:00:00Z",
//     notes: null,
//   },
//   {
//     id: "6",
//     patient: {
//       name: "rohan",
//       floorNumber: "5",
//       roomNumber: "5",
//     },
//     mealPlan: {
//       mealType: "Dinner",
//     },
//     deliveredBy: null,
//     status: "PENDING",
//     orderTime: "2025-02-15T16:00:00Z",
//     scheduledFor: "2025-02-15T17:00:00Z",
//     notes: null,
//   },
// ]

// export default function PantryDashboard() {
//   return (
//     <div className="flex h-screen">
//       <Sidebar />
//       <div className="container mx-auto p-6 ml-20 md:ml-64">
//         <h1 className="text-2xl font-bold mb-6">Meal Plans and Deliveries</h1>
//         <p>
//           Have a real time look on patient meal details, the delivery status and be updated about all changes from the
//           pantry staff.
//         </p>
//         <hr />
//         <br />

//         <div className="overflow-x-auto">
//           <table className="w-full table-auto border-collapse border border-gray-200">
//             <thead>
//               <tr className="bg-gray-100">
//                 <th className="border border-gray-300 px-4 py-2">Patient</th>
//                 <th className="border border-gray-300 px-4 py-2">Meal Type</th>
//                 <th className="border border-gray-300 px-4 py-2">Order Time</th>
//                 <th className="border border-gray-300 px-4 py-2">Delivered By</th>
//                 <th className="border border-gray-300 px-4 py-2">Status</th>
//                 <th className="border border-gray-300 px-4 py-2">Scheduled For</th>
//               </tr>
//             </thead>
//             <tbody>
//               {dummyMeals.map((meal) => (
//                 <tr key={meal.id}>
//                   <td className="border border-gray-300 px-4 py-4">
//                     {meal.patient.name} (Room: {meal.patient.roomNumber})
//                   </td>
//                   <td className="border border-gray-300 px-4 py-2">{meal.mealPlan.mealType}</td>
//                   <td className="border border-gray-300 px-4 py-2">{new Date(meal.orderTime).toLocaleString()}</td>
//                   <td className="border border-gray-300 px-4 py-2">{meal.deliveredBy?.user.name || "Not Assigned"}</td>
//                   <td className="border border-gray-300 px-4 py-2">{meal.status}</td>
//                   <td className="border border-gray-300 px-4 py-2">{new Date(meal.scheduledFor).toLocaleString()}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         <div className="flex gap-5">
//         <Button size="lg" className="my-4">
//           <a href="/pantrystaff">Check Pantry Status</a>
//         </Button>

//         <Button size="lg" className="my-4 bg-red-600">
//           <a href="/delay">Any Delay</a>
//         </Button>
//         </div>
        
//       </div>
//     </div>
//   )
// }



"use client";

import React from "react";
import { Sidebar } from "@/components/ui/Sidebar";
import { Button } from "@/components/ui/Button";

const dummyMeals = [
  {
    id: "1",
    patient: {
      name: "manish ",
      floorNumber: "2",
      roomNumber: "201",
    },
    mealPlan: {
      mealType: "Breakfast",
    },
    deliveredBy: {
      user: {
        name: "Delivery Staff 1",
      },
    },
    status: "DELIVERED",
    orderTime: "2025-02-15T06:00:00Z",
    scheduledFor: "2025-02-15T07:00:00Z",
    notes: null,
  },
  {
    id: "2",
    patient: {
      name: "ajay",
      floorNumber: "3",
      roomNumber: "302",
    },
    mealPlan: {
      mealType: "Lunch",
    },
    deliveredBy: null,
    status: "PREPARING",
    orderTime: "2025-02-15T10:00:00Z",
    scheduledFor: "2025-02-15T11:00:00Z",
    notes: null,
  },
  {
    id: "3",
    patient: {
      name: "kisan",
      floorNumber: "1",
      roomNumber: "105",
    },
    mealPlan: {
      mealType: "Dinner",
    },
    deliveredBy: null,
    status: "PENDING",
    orderTime: "2025-02-15T16:00:00Z",
    scheduledFor: "2025-02-15T17:00:00Z",
    notes: null,
  },
  {
    id: "4",
    patient: {
      name: "mohan",
      floorNumber: "3",
      roomNumber: "15",
    },
    mealPlan: {
      mealType: "Lunch",
    },
    deliveredBy: null,
    status: "PREPARING",
    orderTime: "2025-02-15T17:00:00Z",
    scheduledFor: "2025-02-15T18:00:00Z",
    notes: null,
  },
  {
    id: "5",
    patient: {
      name: "shayam",
      floorNumber: "7",
      roomNumber: "14",
    },
    mealPlan: {
      mealType: "Lunch",
    },
    deliveredBy: null,
    status: "DELIVERED",
    orderTime: "2025-02-15T18:00:00Z",
    scheduledFor: "2025-02-15T19:00:00Z",
    notes: null,
  },
  {
    id: "6",
    patient: {
      name: "rohan",
      floorNumber: "5",
      roomNumber: "5",
    },
    mealPlan: {
      mealType: "Dinner",
    },
    deliveredBy: null,
    status: "PENDING",
    orderTime: "2025-02-15T16:00:00Z",
    scheduledFor: "2025-02-15T17:00:00Z",
    notes: null,
  },
];

const getMealProgress = (status: string) => {
  switch (status) {
    case "PENDING":
      return "🟡 Food Preparing";
    case "PREPARING":
      return "🟠 Food Processed";
    case "READY":
      return "🔵 Food Ready";
    case "DELIVERED":
      return "🟢 Dispatched";
    default:
      return "⚪ Status Unknown";
  }
};

export default function PantryDashboard() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="container mx-auto p-6 ml-20 md:ml-64">
        <h1 className="text-2xl font-bold mb-6">Meal Plans and Deliveries</h1>
        <p>
          Have a real-time look at patient meal details, the delivery status, and stay updated with pantry staff changes.
        </p>
        <hr />
        <br />

        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Patient</th>
                <th className="border border-gray-300 px-4 py-2">Meal Type</th>
                <th className="border border-gray-300 px-4 py-2">Order Time</th>
                <th className="border border-gray-300 px-4 py-2">Delivered By</th>
                <th className="border border-gray-300 px-4 py-2">Status</th>
                <th className="border border-gray-300 px-4 py-2">Scheduled For</th>
                <th className="border border-gray-300 px-4 py-2">Progress</th>
              </tr>
            </thead>
            <tbody>
              {dummyMeals.map((meal) => (
                <tr key={meal.id}>
                  <td className="border border-gray-300 px-4 py-4">
                    {meal.patient.name} (Room: {meal.patient.roomNumber})
                  </td>
                  <td className="border border-gray-300 px-4 py-2">{meal.mealPlan.mealType}</td>
                  <td className="border border-gray-300 px-4 py-2">{new Date(meal.orderTime).toLocaleString()}</td>
                  <td className="border border-gray-300 px-4 py-2">{meal.deliveredBy?.user.name || "Not Assigned"}</td>
                  <td className="border border-gray-300 px-4 py-2">{meal.status}</td>
                  <td className="border border-gray-300 px-4 py-2">{new Date(meal.scheduledFor).toLocaleString()}</td>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">{getMealProgress(meal.status)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex gap-5">
          <Button size="lg" className="my-4">
            <a href="/pantrystaff">Check Pantry Status</a>
          </Button>

          <Button size="lg" className="my-4 bg-red-600">
            <a href="/delay">Any Delay</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
