import React, { useState } from "react";

const FAQ = () => {
  const [open, setOpen] = useState(null);
  const toggle = (i) => setOpen(open === i ? null : i);

  const faqs = [
    { q: "Do you offer installation?", a: "Yes, we install systems professionally." },
    { q: "Is monitoring 24/7?", a: "Yes, with instant alerts and access." },
    { q: "Do you do maintenance?", a: "Absolutely, with flexible plans." },
    { q: "Which brands are supported?", a: "We support Hikvision, Dahua, and more." }
  ];

  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-10">FAQs</h2>
      <div className="max-w-3xl mx-auto text-left">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border-b py-4">
            <button
              onClick={() => toggle(idx)}
              className="w-full flex justify-between items-center text-lg"
            >
              {faq.q}
              <span>{open === idx ? '-' : '+'}</span>
            </button>
            {open === idx && <p className="mt-2 text-gray-600">{faq.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;