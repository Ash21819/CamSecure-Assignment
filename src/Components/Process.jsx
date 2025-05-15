import React from "react";

export default function Process() {
  return (
    <div>
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-10">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-6 px-6">
          {[
            "Book a Visit",
            "Site Inspection",
            "Installation",
            "Maintenance",
          ].map((step, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded shadow hover:scale-105 transition"
            >
              <div className="text-xl font-semibold mb-2">Step {idx + 1}</div>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
