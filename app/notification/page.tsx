// 'use client'
// import React from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import styles from "./Notification.module.css";


// const Notification: React.FC = () => {
//   const sendNotification = () => {
//     toast.info("📲 New WhatsApp message received!", {
//       position: "bottom-left",
//       autoClose: 3000,
//       hideProgressBar: true,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       theme: "dark",
//     });
//   };

//   return (
//     <div className={styles.container}>
//       <button onClick={sendNotification} className={styles.notifyButton}>
//         Show WhatsApp Notification
//       </button>
//       <ToastContainer />
//     </div>
//   );
// };

// export default Notification;


'use client';

import React from 'react';
import { Sidebar } from '@/components/ui/Sidebar';
import { Button } from '@/components/ui/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
]


export default function PantryDashboard() {
  const sendWhatsAppNotification = (patientName: string, mealType: string, roomNumber: string) => {
    const message = `Hello, this is a notification regarding ${patientName}'s meal plan (${mealType}) for room ${roomNumber}.`;
    toast.success('Notification sent to WhatsApp!', {
      position: 'bottom-left',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'dark',
    });

    // Redirect to WhatsApp with the pre-filled message
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="container mx-auto p-6 ml-20 md:ml-64">
        <h1 className="text-2xl font-bold mb-6">Meal Plans and Deliveries</h1>
        <p>Have a real-time look at patient meal details, delivery status, and updates from the pantry staff.</p>
        <hr />
        <br />

        <table className="w-full table-auto border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Patient</th>
                <th className="border border-gray-300 px-4 py-2">Meal Type</th>
                <th className="border border-gray-300 px-4 py-2">Order Time</th>
                <th className="border border-gray-300 px-4 py-2">Delivered By</th>
                <th className="border border-gray-300 px-4 py-2">Status</th>
                <th className="border border-gray-300 px-4 py-2">Scheduled For</th>
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
                <td className="border border-gray-300 px-4 py-2">{meal.deliveredBy?.user.name || 'Not Assigned'}</td>
                <td className="border border-gray-300 px-4 py-2">{meal.status}</td>
                <td className="border border-gray-300 px-4 py-2">{new Date(meal.scheduledFor).toLocaleString()}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <button
                    onClick={() =>
                      sendWhatsAppNotification(
                        meal.patient.name,
                        meal.mealPlan.mealType,
                        meal.patient.roomNumber
                      )
                    }
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                  >
                    Notify
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <ToastContainer />
        <Button size="lg" className="my-4">
          <a href="/pantry">Check Pantry Status</a>
        </Button>
      </div>
    </div>
  );
}



// 'use client';

// import React from 'react';
// import { Sidebar } from '@/components/ui/Sidebar';
// import { Button } from '@/components/ui/Button';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

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
//     scheduledFor: '2024-02-15T08:00:00Z',
//     notes: null,
//   },
//   // Additional meal data...
// ];

// export default function PantryDashboard() {
//   const sendWhatsAppNotification = async (patientName: string, mealType: string, roomNumber: string) => {
//     const message = `Hello, this is a notification regarding ${patientName}'s meal plan (${mealType}) for room ${roomNumber}.`;

//     try {
//       // Make an API request to your backend
//       const response = await fetch('/api/send-whatsapp-message', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ message }),
//       });

//       if (response.ok) {
//         toast.success('WhatsApp message sent successfully!', {
//           position: 'bottom-left',
//           autoClose: 3000,
//           hideProgressBar: true,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           theme: 'dark',
//         });
//       } else {
//         throw new Error('Failed to send the WhatsApp message.');
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error('Error sending WhatsApp message.', {
//         position: 'bottom-left',
//         autoClose: 3000,
//         hideProgressBar: true,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         theme: 'dark',
//       });
//     }
//   };

//   return (
//     <div className="flex h-screen">
//       <Sidebar />
//       <div className="container mx-auto p-6 ml-20 md:ml-64">
//         <h1 className="text-2xl font-bold mb-6">Meal Plans and Deliveries</h1>
//         <table className="w-full table-auto border-collapse border border-gray-200">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="border border-gray-300 px-4 py-2">Patient</th>
//               <th className="border border-gray-300 px-4 py-2">Meal Type</th>
//               <th className="border border-gray-300 px-4 py-2">Prepared By</th>
//               <th className="border border-gray-300 px-4 py-2">Delivered By</th>
//               <th className="border border-gray-300 px-4 py-2">Status</th>
//               <th className="border border-gray-300 px-4 py-2">Scheduled For</th>
//               <th className="border border-gray-300 px-4 py-2">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {dummyMeals.map((meal) => (
//               <tr key={meal.id}>
//                 <td className="border border-gray-300 px-4 py-4">
//                   {meal.patient.name} (Room: {meal.patient.roomNumber})
//                 </td>
//                 <td className="border border-gray-300 px-4 py-2">{meal.mealPlan.mealType}</td>
//                 <td className="border border-gray-300 px-4 py-2">{meal.preparedBy?.user.name || 'Not Assigned'}</td>
//                 <td className="border border-gray-300 px-4 py-2">{meal.deliveredBy?.user.name || 'Not Assigned'}</td>
//                 <td className="border border-gray-300 px-4 py-2">{meal.status}</td>
//                 <td className="border border-gray-300 px-4 py-2">{new Date(meal.scheduledFor).toLocaleString()}</td>
//                 <td className="border border-gray-300 px-4 py-2 text-center">
//                   <button
//                     onClick={() =>
//                       sendWhatsAppNotification(
//                         meal.patient.name,
//                         meal.mealPlan.mealType,
//                         meal.patient.roomNumber
//                       )
//                     }
//                     className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//                   >
//                     Notify
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <ToastContainer />
//       </div>
//     </div>
//   );
// }

//roshan

// 'use client';

// import React from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const dummyMeals = [
//   {
//     id: '1',
//     patient: { name: 'John Doe', phone: '+919352546900' },
//     mealPlan: { mealType: 'Breakfast' },
//     status: 'DELIVERED',
//   },
//   {
//     id: '2',
//     patient: { name: 'Jane Smith', phone: '+919929017378' },
//     mealPlan: { mealType: 'Lunch' },
//     status: 'PREPARING',
//   },
// ];

// export default function Home() {
//   const sendWhatsAppNotification = async (patientName: string, mealType: string, phone: string) => {
//     const message = `Hello, this is a notification regarding ${patientName}'s meal plan (${mealType}).`;

//     try {
//       const response = await fetch('/api/send-whatsapp-message', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ message, recipient: '9352546900' }),
//       });

//       if (response.ok) {
//         toast.success(`Notification sent to ${patientName}!`, {
//           position: 'bottom-left',
//           autoClose: 3000,
//           hideProgressBar: true,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           theme: 'dark',
//         });
//       } else {
//         throw new Error('Failed to send notification.');
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error('Error sending notification.', {
//         position: 'bottom-left',
//         autoClose: 3000,
//         hideProgressBar: true,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         theme: 'dark',
//       });
//     }
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-6">Meal Notifications</h1>
//       <table className="w-full table-auto border-collapse border border-gray-200">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="border border-gray-300 px-4 py-2">Patient</th>
//             <th className="border border-gray-300 px-4 py-2">Meal Type</th>
//             <th className="border border-gray-300 px-4 py-2">Status</th>
//             <th className="border border-gray-300 px-4 py-2">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {dummyMeals.map((meal) => (
//             <tr key={meal.id}>
//               <td className="border border-gray-300 px-4 py-2">{meal.patient.name}</td>
//               <td className="border border-gray-300 px-4 py-2">{meal.mealPlan.mealType}</td>
//               <td className="border border-gray-300 px-4 py-2">{meal.status}</td>
//               <td className="border border-gray-300 px-4 py-2 text-center">
//                 <button
//                   onClick={() =>
//                     sendWhatsAppNotification(meal.patient.name, meal.mealPlan.mealType, meal.patient.phone)
//                   }
//                   className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//                 >
//                   Notify
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <ToastContainer />
//     </div>
//   );
// }


// app/notification/page.tsx






// 'use client';

// import React from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const dummyMeals = [
//   {
//     id: '1',
//     patient: { name: 'Ajai kumar', phone: '+919352546900' },
//     mealPlan: { mealType: 'Breakfast' },
//     status: 'DELIVERED',
//   },
//   {
//     id: '2',
//     patient: { name: 'Nishant gupta', phone: '+919929017378' },
//     mealPlan: { mealType: 'Lunch' },
//     status: 'PREPARING',
//   },
//   {
//     id: '3',
//     patient: { name: ' Manish', phone: '+919929017378' },
//     mealPlan: { mealType: 'Dinner' },
//     status: 'PENDING',
//   },
// ];

// export default function NotificationPage() {
//   const sendWhatsAppNotification = async (patientName: string, mealType: string, phone: string) => {
//     const message = `Hello ${patientName}, this is a notification regarding your ${mealType} meal plan.`;

//     try {
//       const response = await fetch('/api/send-whatsapp-message', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ 
//           message, 
//           recipient: phone.replace('+', '') // Remove + if present
//         }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         toast.success(`Notification sent to ${patientName}!`, {
//           position: 'bottom-left',
//           autoClose: 3000,
//           hideProgressBar: true,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           theme: 'dark',
//         });
//       } else {
//         throw new Error(data.error || 'Failed to send notification');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       toast.error('Error sending notification: ' + error.message, {
//         position: 'bottom-left',
//         autoClose: 3000,
//         hideProgressBar: true,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         theme: 'dark',
//       });
//     }
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-6">Meal Notifications</h1>
//       <div className="overflow-x-auto">
//         <table className="w-full table-auto border-collapse border border-gray-200">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="border border-gray-300 px-4 py-2">Patient</th>
//               <th className="border border-gray-300 px-4 py-2">Meal Type</th>
//               <th className="border border-gray-300 px-4 py-2">Status</th>
//               <th className="border border-gray-300 px-4 py-2">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {dummyMeals.map((meal) => (
//               <tr key={meal.id}>
//                 <td className="border border-gray-300 px-4 py-2">{meal.patient.name}</td>
//                 <td className="border border-gray-300 px-4 py-2">{meal.mealPlan.mealType}</td>
//                 <td className="border border-gray-300 px-4 py-2">{meal.status}</td>
//                 <td className="border border-gray-300 px-4 py-2 text-center">
//                   <button
//                     onClick={() =>
//                       sendWhatsAppNotification(
//                         meal.patient.name,
//                         meal.mealPlan.mealType,
//                         meal.patient.phone
//                       )
//                     }
//                     className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
//                   >
//                     Notify
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// }