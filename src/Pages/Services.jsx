import React from 'react'
import { Cards } from '../Components'
import { ser1, ser2, ser3, ser4, ser5 } from '../assets/img/index.js'

function Services() {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-12 mt-5">
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
        <Cards
          img={ser1}
          heading="Dome Cameras: Discreet Surveillance"
          text="Our dome cameras offer a wide field of view and are designed for discreet monitoring, ideal for offices and retail spaces. Get comprehensive coverage with CamSecure."
        />
        <Cards
          img={ser2}
          heading="Bullet Cameras: Long-Range Surveillance"
          text="Bullet cameras provide long-range surveillance and are built to withstand harsh weather conditions, perfect for outdoor security. Trust CamSecure for reliable outdoor solutions."
        />
        <Cards
          img={ser3}
          heading="PTZ Cameras: Flexible Monitoring"
          text="PTZ cameras offer pan, tilt, and zoom capabilities, providing flexible control and detailed monitoring of large areas. Enhance your security with CamSecure's advanced PTZ solutions."
        />
        <Cards
          img={ser4}
          heading="Wireless Cameras: Smart Home Security"
          text="Our wireless cameras are easy to install and integrate seamlessly with smart home devices, offering convenient and reliable home security. Choose CamSecure for hassle-free solutions."
        />
      </section>
      <section className="flex flex-col md:flex-row items-center gap-10 max-w-7xl mx-auto mt-16 px-4">
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Security with the <br />
            <span className="text-blue-500">Pro Series System</span>
          </h1>
          <p className="text-gray-700 mt-4">
            The Pro Series Security System offers cutting-edge protection for your property. With advanced features like motion detection, night vision, and remote access, you can monitor your premises from anywhere, anytime. Invest in peace of mind with CamSecure's Pro Series.
          </p>
          <ul className="mt-4 list-disc list-inside text-gray-700 space-y-1">
            <li>Crystal-clear 1080p HD video</li>
            <li>Wide-angle lens for maximum coverage</li>
            <li>Infrared night vision up to 100ft</li>
            <li>Weatherproof design for outdoor use</li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={ser5} alt="Pro Series System" className="max-w-md h-auto rounded-lg shadow-md" />
        </div>
      </section>
    </div>
  )
}

export default Services
