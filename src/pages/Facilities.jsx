// pages/Facilities.jsx
import React from "react";
import { 
  FaBook, 
  FaBolt, 
  FaTint, 
  FaUsers, 
  FaGamepad, 
  FaDumbbell,
  FaFirstAid,
  FaBookOpen,
  FaPray,
  FaBicycle,
  FaChair,
  FaUtensils,
  FaWifi,
  FaShower,
  FaTshirt,
  FaBroom,
  FaHome
} from "react-icons/fa";

const Facilities = () => {
  // 12 additional hostel facilities with icons
  const facilities = [
    {
      title: "Study Hall",
      description: "Quiet, well-lit study room with desks and chairs for focused learning.",
      icon: FaBook,
      color: "blue"
    },
    {
      title: "Power Backup",
      description: "Uninterrupted electricity supply with generator and UPS support.",
      icon: FaBolt,
      color: "yellow"
    },
    {
      title: "Filtered Drinking Water",
      description: "Safe RO-filtered drinking water available 24/7 for all residents.",
      icon: FaTint,
      color: "blue"
    },
    {
      title: "Visitor Lounge",
      description: "Comfortable sitting area for guests, parents, and friends.",
      icon: FaUsers,
      color: "purple"
    },
    
    {
      title: "Medical First Aid",
      description: "First-aid kit and on-call medical assistance for emergencies.",
      icon: FaFirstAid,
      color: "red"
    },
    
    {
      title: "Prayer Room",
      description: "Dedicated, peaceful space for daily prayers and meditation.",
      icon: FaPray,
      color: "purple"
    },
    {
      title: "Bike / Cycle Stand",
      description: "Covered and secure parking for bicycles and two-wheelers.",
      icon: FaBicycle,
      color: "green"
    },
    {
      title: "Outdoor Sitting Area",
      description: "Open courtyard with benches for evening relaxation.",
      icon: FaChair,
      color: "green"
    },
    {
      title: "Kitchenette Access",
      description: "Small shared kitchen area for light cooking or tea/coffee.",
      icon: FaUtensils,
      color: "yellow"
    }
  ];

 
  const getColorClasses = (color) => {
    switch(color) {
      case "blue": return "bg-blue-900 text-blue-400";
      case "yellow": return "bg-yellow-900 text-yellow-400";
      case "purple": return "bg-purple-900 text-purple-400";
      case "green": return "bg-green-900 text-green-400";
      case "red": return "bg-red-900 text-red-400";
      default: return "bg-gray-800 text-gray-400";
    }
  };

  return (<div className="mt-5">
    <div className="bg-gray-900 min-h-screen text-gray-100">
      <div className="container mx-auto px-6 py-16">
        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
            Hostel Facilities & Amenities
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Beyond the basic amenities, we provide these extra facilities to make
            your stay more comfortable, productive, and enjoyable.
          </p>
        </div>

      

        {/* Additional Facilities Grid */}
        <section className="mb-20">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => {
              
              const colorClasses = getColorClasses(facility.color);
              return (
                <div
                  key={index}
                  className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 group"
                >
                  
                  <h3 className="text-xl font-semibold text-white text-center mb-3">
                    {facility.title}
                  </h3>
                  <p className="text-gray-300 text-sm text-center leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        
      </div>
    </div></div>
  );
};

export default Facilities;