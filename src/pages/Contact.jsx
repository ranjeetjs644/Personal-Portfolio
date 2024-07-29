import React from "react";
import DocumentTitle from "react-document-title";

function Contact() {
  return (
    <>
      <DocumentTitle title="Ranjeet-Contact" />
      <div
        id="contact"
        className="w-screen h-screen flex items-center justify-center"
      >
        <h2 className="text-3xl text-gray-200">This is Contact section</h2>
      </div>
    </>
  );
}

export default Contact;
