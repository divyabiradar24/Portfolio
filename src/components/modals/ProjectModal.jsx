import React from "react";
import PropTypes from "prop-types";
import { project } from "../constants/project";
import cross from "../../assets/cross.svg";
import Project from "./Project";

const ProjectModal = ({ mode: isDarkMode, onClose }) => {
  const themeClasses = isDarkMode
    ? "text-white border-gray-500 bg-gray-800 hover:bg-gray-700"
    : "text-black border-gray-200 bg-white hover:bg-blue-100";

  return (
    <div
      className="fixed inset-0 z-[1000] w-[90%] md:w-[75%] lg:w-[50%] mx-auto my-auto h-full grid place-items-center overflow-auto"
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`relative backdrop-blur-lg py-8 px-6 md:px-10 shadow-lg rounded-lg w-full ${
          isDarkMode
            ? "text-white border border-gray-500 bg-gradient-to-br from-gray-700 to-gray-900"
            : "text-black border border-gray-200 bg-gradient-to-br from-white to-blue-50"
        }`}
      >
        <img
          src={cross}
          alt="Close"
          aria-label="Close Modal"
          className="absolute top-5 right-5 w-6 h-6 cursor-pointer hover:scale-110 transition-transform duration-200 ease-in-out"
          onClick={onClose}
        />
        <div
          className={`text-3xl font-bold text-center border-b mx-6 pb-4 mb-6 ${
            isDarkMode
              ? "border-gray-400 text-teal-300"
              : "border-gray-300 text-blue-600"
          }`}
        >
          Project Details
        </div>
        <div className="p-5 space-y-4">
          {project.map((proj) => (
            <div key={proj.id} className={`${themeClasses} p-4 border rounded-lg shadow-sm`}>
              <Project proj={proj} />
            </div>
          ))}
        </div>
        <div className="mx-auto flex justify-center mt-6">
          <button
            onClick={onClose}
            className={`px-6 py-2 font-semibold rounded-md shadow-md transition-all duration-200 ease-in-out ${
              isDarkMode
                ? "bg-teal-500 text-white hover:bg-teal-600"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

ProjectModal.propTypes = {
  mode: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ProjectModal;
