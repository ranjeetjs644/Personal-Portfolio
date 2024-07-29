import React from "react";
import { Helmet } from "react-helmet-async";
import DocumentTitle from "react-document-title";

function Skills() {
  return (
    <>
      <DocumentTitle title="Ranjeet-skills" />
      <div
        id="skills"
        className="w-screen h-screen flex items-center justify-center"
      >
        <h2 className="text-3xl text-gray-200">This is Skills section</h2>
      </div>
    </>
  );
}

export default Skills;
