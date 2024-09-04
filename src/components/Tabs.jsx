import React, { useState } from "react";
import question from '../assets/question.svg';
import group from '../assets/group.svg';
import bar from '../assets/bar.svg';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("About Me");

  const tabs = ["About Me", "Experiences", "Recommended"];

  return (
    <div className="bg-tab-dark p-4 rounded-3xl shadow-2xl">
      <div className="flex space-x-4 mb-4">
        <div className="flex flex-col">
          <img src={question} alt="Question" className="w-8 h-8 mb-4" />
    
          <div className="grid grid-cols-2 mt-10">
            <img src={group} alt="Group" width={"40px"} />
            <img src={group} alt="Group" width={"40px"}/>
            <img src={group} alt="Group" width={"40px"}/>
            <img src={group} alt="Group" width={"40px"}/>
            <img src={group} alt="Group" width={"40px"}/>
            <img src={group} alt="Group" width={"40px"}/>
          </div>
        </div>

        <div className="flex-grow">
          <div className="flex space-x-4 h-[50px] rounded-2xl bg-black mb-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 mt-1 ml-2 rounded-lg ${
                  activeTab === tab ? "bg-gray-700 text-white" : "text-gray-400"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

  
          <div className="flex items-start space-x-4">
            <div className="text-gray-300 flex-grow">
              {activeTab === "About Me" && (
                <p>
                  Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
                  I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters, Emma and Ella.
                </p>
              )}
              {activeTab === "Experiences" && (
                <p>
                  I've had the pleasure of working with Salesforce for the past 3 years, focusing on helping businesses optimize their sales processes. Before joining Salesforce, I spent 5 years as a sales manager at XYZ Corp, where I developed a deep understanding of client needs and how to address them effectively.
                </p>
              )}
              {activeTab === "Recommended" && (
                <p>
                  Over the years, I've been fortunate to receive positive feedback from clients and colleagues alike. Many have appreciated my dedication to their success, with some noting that my approach has significantly improved their sales strategies. I’m always striving to make a positive impact.
                </p>
              )}
            </div>

            <img src={bar} alt="Bar" className="self-start" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
