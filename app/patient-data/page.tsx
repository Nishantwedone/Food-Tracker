// 


"use client";

import React, { useState } from "react";

const patients = [
  {
    id: 1,
    name: "John Doe",
    age: 45,
    gender: "MALE",
    location: "Floor 1, Room 101, Bed A",
    contact: "123-456-7893",
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
        },
        {
          time: "EVENING",
          ingredients: ["Grilled chicken", "Vegetables", "Brown rice"],
          instructions: ["Low salt", "No spicy seasoning"],
        },
      ],
    },
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 52,
    gender: "FEMALE",
    location: "Floor 2, Room 205, Bed B",
    contact: "987-654-3210",
    emergencyContact: "987-654-3211",
    diseases: ["High Cholesterol"],
    allergies: ["Dairy"],
    dietChart: {
      startDate: "15/2/2025",
      endDate: "22/2/2025",
      meals: [
        {
          time: "MORNING",
          ingredients: ["Whole grain toast", "Avocado", "Almond milk"],
          instructions: ["No butter", "Low sodium"],
        },
        {
          time: "EVENING",
          ingredients: ["Grilled salmon", "Quinoa", "Steamed broccoli"],
          instructions: ["No added salt", "Use lemon juice"],
        },
      ],
    },
  },
  {
    id: 3,
    name: "Michael Johnson",
    age: 60,
    gender: "MALE",
    location: "Floor 3, Room 310, Bed C",
    contact: "555-123-4567",
    emergencyContact: "555-987-6543",
    diseases: ["Heart Disease"],
    allergies: ["Soy"],
    dietChart: {
      startDate: "18/3/2025",
      endDate: "25/3/2025",
      meals: [
        {
          time: "MORNING",
          ingredients: ["Egg whites", "Whole grain bread", "Green tea"],
          instructions: ["No sugar", "Light toast"],
        },
        {
          time: "EVENING",
          ingredients: ["Baked fish", "Sweet potatoes", "Green beans"],
          instructions: ["No fried food", "No excess oil"],
        },
      ],
    },
  },
  {
    id: 4,
    name: "Emily Carter",
    age: 30,
    gender: "FEMALE",
    location: "Floor 4, Room 402, Bed D",
    contact: "444-555-6666",
    emergencyContact: "444-555-6667",
    diseases: ["Asthma"],
    allergies: ["Dust", "Gluten"],
    dietChart: {
      startDate: "20/3/2025",
      endDate: "27/3/2025",
      meals: [
        {
          time: "MORNING",
          ingredients: ["Gluten-free bread", "Avocado", "Herbal tea"],
          instructions: ["No sugar", "Serve fresh"],
        },
        {
          time: "EVENING",
          ingredients: ["Steamed chicken", "Spinach", "Mashed potatoes"],
          instructions: ["No salt", "Avoid spices"],
        },
      ],
    },
  },
  {
    id: 5,
    name: "Robert Brown",
    age: 48,
    gender: "MALE",
    location: "Floor 5, Room 503, Bed E",
    contact: "321-654-9870",
    emergencyContact: "321-654-9871",
    diseases: ["Arthritis"],
    allergies: ["Eggs"],
    dietChart: {
      startDate: "25/3/2025",
      endDate: "1/4/2025",
      meals: [
        {
          time: "MORNING",
          ingredients: ["Whole grain porridge", "Fruits", "Almond milk"],
          instructions: ["No dairy", "Low sugar"],
        },
        {
          time: "EVENING",
          ingredients: ["Grilled turkey", "Steamed vegetables", "Brown rice"],
          instructions: ["Low salt", "No fried food"],
        },
      ],
    },
  },
];

const PatientData = () => {
  const [expandedPatient, setExpandedPatient] = useState<number | null>(null);

  const toggleDietChart = (id: number) => {
    setExpandedPatient((prev) => (prev === id ? null : id));
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-600">
        Patient and Diet Charts
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {patients.map((patient) => (
          <div
            key={patient.id}
            className="bg-white shadow-lg rounded-lg p-5 hover:shadow-2xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {patient.name} ({patient.age} years)
            </h2>
            <p className="text-gray-600">
              <strong>Gender:</strong> {patient.gender}
            </p>
            <p className="text-gray-600">
              <strong>Location:</strong> {patient.location}
            </p>
            <p className="text-gray-600">
              <strong>Contact:</strong> {patient.contact}
            </p>
            <p className="text-gray-600">
              <strong>Emergency Contact:</strong> {patient.emergencyContact}
            </p>
            <div className="mt-4">
              <h3 className="font-semibold text-gray-700">Diseases</h3>
              <div className="flex gap-2 mt-1 flex-wrap">
                {patient.diseases.map((disease, index) => (
                  <span
                    key={index}
                    className="bg-red-100 text-red-600 text-sm px-2 py-1 rounded-full"
                  >
                    {disease}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold text-gray-700">Allergies</h3>
              <div className="flex gap-2 mt-1 flex-wrap">
                {patient.allergies.map((allergy, index) => (
                  <span
                    key={index}
                    className="bg-yellow-100 text-yellow-600 text-sm px-2 py-1 rounded-full"
                  >
                    {allergy}
                  </span>
                ))}
              </div>
            </div>

            {/* Collapsible Diet Chart */}
            <div className="mt-6">
              <button
                onClick={() => toggleDietChart(patient.id)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                {expandedPatient === patient.id ? "Hide Diet Chart" : "View Diet Chart"}
              </button>
              {expandedPatient === patient.id && (
                <div className="mt-4">
                  <p className="text-sm text-gray-500">
                    <strong>Start Date:</strong> {patient.dietChart.startDate} |{" "}
                    <strong>End Date:</strong> {patient.dietChart.endDate}
                  </p>
                  {patient.dietChart.meals.map((meal, index) => (
                    <div
                      key={index}
                      className="bg-gray-100 rounded-lg p-3 my-2 shadow-sm"
                    >
                      <h4 className="font-semibold text-gray-800">{meal.time}</h4>
                      <p className="text-gray-600">
                        <strong>Ingredients:</strong> {meal.ingredients.join(", ")}
                      </p>
                      <p className="text-gray-600">
                        <strong>Instructions:</strong> {meal.instructions.join(", ")}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientData;
