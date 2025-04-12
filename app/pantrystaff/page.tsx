"use client";

import React, { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion

const patients = [
  {
    id: "cm5v1whrd0005cgwc6p48metz",
    name: "John Doe",
    age: 45,
    contact: "123-456-7893",
    location: "Floor 1, Room 101, Bed A",
    emergencyContact: "123-456-7894",
    diseases: ["Diabetes", "Hypertension"],
    allergies: ["Peanuts", "Shellfish"],
    dietChart: {
      startDate: "13/1/2025",
      endDate: "20/1/2025",
      meals: [
        {
          time: "MORNING",
          ingredients: ["Oatmeal", "Fruits", "Low-fat milk"],
          instructions: ["No sugar", "Serve warm"],
          status: "IN_DELIVERY",
          scheduledTime: "13/1/2025, 6:29:34 PM",
        },
        {
          time: "EVENING",
          ingredients: ["Grilled chicken", "Vegetables", "Brown rice"],
          instructions: ["Low salt", "No spicy seasoning"],
          status: "READY",
          scheduledTime: "13/1/2025, 6:29:34 PM",
        },
      ],
    },
  },
  {
    id: "v9b3txqr9001xfgk7w12cdlm",
    name: "Emma Smith",
    age: 52,
    contact: "987-654-3210",
    location: "Floor 2, Room 202, Bed B",
    emergencyContact: "987-654-3211",
    diseases: ["Heart Disease"],
    allergies: ["Dairy"],
    dietChart: {
      startDate: "10/1/2025",
      endDate: "17/1/2025",
      meals: [
        {
          time: "MORNING",
          ingredients: ["Whole wheat toast", "Avocado", "Herbal tea"],
          instructions: ["No caffeine", "Light toast"],
          status: "READY",
          scheduledTime: "10/1/2025, 7:15:00 AM",
        },
        {
          time: "EVENING",
          ingredients: ["Grilled salmon", "Steamed broccoli", "Quinoa"],
          instructions: ["Low sodium", "No butter"],
          status: "IN_PREPARATION",
          scheduledTime: "10/1/2025, 7:15:00 PM",
        },
      ],
    },
  },
  {
    id: "a1b2c3d4e5f6g7h8i9j0",
    name: "Michael Johnson",
    age: 60,
    contact: "555-123-4567",
    location: "Floor 3, Room 305, Bed C",
    emergencyContact: "555-123-4568",
    diseases: ["High Cholesterol"],
    allergies: ["Gluten"],
    dietChart: {
      startDate: "12/1/2025",
      endDate: "19/1/2025",
      meals: [
        {
          time: "MORNING",
          ingredients: ["Scrambled eggs", "Spinach", "Almond milk"],
          instructions: ["No cheese", "Cook in olive oil"],
          status: "PENDING",
          scheduledTime: "12/1/2025, 8:00:00 AM",
        },
        {
          time: "EVENING",
          ingredients: ["Baked chicken", "Sweet potatoes", "Asparagus"],
          instructions: ["No fried food", "Use fresh herbs"],
          status: "IN_DELIVERY",
          scheduledTime: "12/1/2025, 7:45:00 PM",
        },
      ],
    },
  },
];

const PantryStaff = () => {
  const [patientData, setPatientData] = useState(patients);

  const handleStatusChange = (patientIndex: number, mealIndex: number, newStatus: string) => {
    const updatedPatients = [...patientData];
    updatedPatients[patientIndex].dietChart.meals[mealIndex].status = newStatus;
    setPatientData(updatedPatients);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-5 min-h-screen hidden md:block">
        <h1 className="text-xl font-bold mb-6">NutriCare</h1>
        <nav>
          <ul>
            <li className="mb-3">
              <a href="#" className="block p-2 bg-gray-800 rounded hover:bg-gray-700 transition-all">Dashboard</a>
            </li>
            <li className="mb-3">
              <a href="#" className="block p-2 hover:bg-gray-800 rounded transition-all">Patients</a>
            </li>
            <li>
              <a href="#" className="block p-2 hover:bg-gray-800 rounded transition-all">Logout</a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Pantry Dashboard</h1>
        <p className="text-gray-600 mb-6">
          See assigned meal details, ingredients, and allergies. Update meal status in real time.
        </p>

        {patientData.map((patient, patientIndex) => (
          <motion.div
            key={patient.id}
            className="bg-white shadow-md rounded-lg p-5 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: patientIndex * 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <h2 className="text-xl font-semibold mb-2">{patient.name}</h2>
            <p><strong>ID:</strong> {patient.id}</p>
            <p><strong>Contact Info:</strong> {patient.contact}</p>
            <p><strong>Location:</strong> {patient.location}</p>
            <p><strong>Emergency Contact:</strong> {patient.emergencyContact}</p>
            <p><strong>Diseases:</strong> {patient.diseases.join(", ")}</p>
            <p><strong>Allergies:</strong> {patient.allergies.join(", ")}</p>

            {/* Diet Chart */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold border-b pb-1">
                Diet Chart (Start: {patient.dietChart.startDate})
              </h3>
              <p className="text-sm text-gray-600">End Date: {patient.dietChart.endDate}</p>

              {patient.dietChart.meals.map((meal, mealIndex) => (
                <div key={mealIndex} className="bg-gray-100 rounded-lg p-3 my-3 shadow-sm">
                  <h4 className="font-semibold">{meal.time} Meal</h4>
                  <p><strong>Ingredients:</strong> {meal.ingredients.join(", ")}</p>
                  <p><strong>Instructions:</strong> {meal.instructions.join(", ")}</p>
                  <p><strong>Status:</strong> {meal.status}</p>
                  <p className="text-sm text-gray-600">Scheduled For: {meal.scheduledTime}</p>

                  <select
                    className="mt-2 p-2 border rounded w-full"
                    value={meal.status}
                    onChange={(e) => handleStatusChange(patientIndex, mealIndex, e.target.value)}
                  >
                    <option value="PENDING">Pending</option>
                    <option value="IN_PREPARATION">In Preparation</option>
                    <option value="IN_DELIVERY">In Delivery</option>
                    <option value="READY">Ready</option>
                  </select>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </main>
    </div>
  );
};

export default PantryStaff;
