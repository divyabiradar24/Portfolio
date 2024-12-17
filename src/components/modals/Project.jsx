import React from 'react';
import siteLogo from "../../assets/internet.svg";

const Project = ({ proj, index }) => {
  return (
    <div key={index} className="border relative p-4 rounded mb-3">
      <div className="flex flex-row justify-center gap-4 items-center">
        <img
          src={proj.logo}
          alt={`${proj.name} Logo`}
          className="w-16 h-16 mb-3"
        />
        <div className="text-2xl font-semibold">
          <a href={proj.githubLink} target="_blank" rel="noopener noreferrer" className="hover:underline">
            {proj.name}
          </a>
        </div>
      </div>
      <p className="italic mb-2">{proj.briefDesc}</p>
      <h3 className="font-bold mt-3">Description:</h3>
      <ul className="list-disc list-inside mb-2">
        {proj.desc.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      <h3 className="font-bold">Technologies:</h3>
      <p className="mb-2">{proj.tech.join(", ")}</p>
    </div>
  );
};

export default Project;
