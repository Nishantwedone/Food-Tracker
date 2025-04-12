"use client";

import React from "react";
import { motion } from "framer-motion";

const patients = [
  {
    id: "cm5v1whrd0005cgwc6p48metz",
    name: "Harshaa",
    age: 45,
    location: "Floor 1, Room 101, Bed A",
    meal: {
      time: "MORNING",
      ingredients: ["Oatmeal", "Fruits", "Low-fat milk"],
      status: "DELAYED",
      scheduledTime: "13/1/2025, 6:29:34 AM",
      actualTime: "13/1/2025, 7:10:00 AM", // Delayed
    },
  },
  {
    id: "v9b3txqr9001xfgk7w12cdlm",
    name: "Karlaa",
    age: 52,
    location: "Floor 2, Room 202, Bed B",
    meal: {
      time: "EVENING",
      ingredients: ["Grilled chicken", "Vegetables", "Brown rice"],
      status: "DELAYED",
      scheduledTime: "10/1/2025, 7:15:00 PM",
      actualTime: "10/1/2025, 8:00:00 PM", // Delayed
    },
  },
];

const DelayStatus = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">⚠️ Delayed Deliveries</h1>
      <p className="text-gray-600 mb-6">
        The following meals are delayed. Please take necessary action.
      </p>

      {patients.map((patient, index) => (
        <motion.div
          key={patient.id}
          className="bg-white shadow-lg rounded-lg p-5 mb-6 border border-red-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <h2 className="text-xl font-semibold mb-2">{patient.name}</h2>
          <p><strong>Location:</strong> {patient.location}</p>

          <div className="mt-4">
            <h3 className="text-lg font-semibold border-b pb-1">
              {patient.meal.time} Meal
            </h3>
            <p><strong>Ingredients:</strong> {patient.meal.ingredients.join(", ")}</p>
            <p><strong>Scheduled Time:</strong> {patient.meal.scheduledTime}</p>
            <p><strong>Actual Delivery Time:</strong> {patient.meal.actualTime}</p>

            {/* Blinking Red Delay Status */}
            <motion.p
              className="text-red-600 font-semibold text-lg mt-2"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              🚨 Status: {patient.meal.status}
            </motion.p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default DelayStatus;
