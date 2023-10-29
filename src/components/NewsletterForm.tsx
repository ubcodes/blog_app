import React from "react";

const NewsletterForm = () => {
  return (
    <div className="bg-yellow-400 shadow-lg mx-auto  h-screen  flex flex-col justify-center align-middle items-center">
      <div className="w-[70%]">
        <h3 className="text-xl mb-5 font-semibold border-b pb-4 text-center">
          Hi there!, You may subscribe to my Newletter
        </h3>
        <div className="gap-4 mb-4 ">
          <p className="text-lg pb-5">
            Receive inspiring articles and other exclusive ccontent from myself.{" "}
            <br />
            You'll never receive any span and can always unsubscribe.
          </p>
          <input
            type="email"
            placeholder="Enter your email here"
            className="py-3 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700 mr-2"
          />
        </div>
        <div className="">
          <button className="inline-block bg-yellow-100 text-lg rounded-full text-yellow-900 px-8 py-3 cursor-pointer transition duration-500 ease hover:bg-yellow-300 ">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterForm;
