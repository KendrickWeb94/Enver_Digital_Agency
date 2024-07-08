"use client";
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import Image from "next/image";
import contactphoto from "../assets/contact.png";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/contact", {
        name,
        email,
        message,
      });

      if (response.status === 201) {
        setShowModal(true);
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.error("Error sending message", error);
      alert("Failed to send message");
    }
  };

  return (
    <div className="w-full min-h-screen relative">
      <div className="absolute top-0 right-0">
        <div className="bg-yellow-400 dark:bg-yellow-300 blur-[150px] w-[150px] h-[100px]"></div>
      </div>
      <div className="absolute top-0 left-0">
        <div className="bg-indigo-500 min-w-[150px] blur-[250px] max-w-[350px] h-[200px]"></div>
      </div>
      <div className="w-full space-y-5 z-30">
        <div className="text-center z-30">
          <h1 className="md:text-[48px] text-transparent bg-clip-text to-yellow-300 text-clip bg-gradient-to-r from-indigo-600 to leading-[3rem] sm:text-[36px] ds:text-[30px] text-balance font-extrabold">
            Get in Touch
          </h1>
          <p className="py-3">
            Let's align our minds Reach out and let the magic of collaboration
            illuminate our skies.
          </p>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="max-w-2xl w-fit gap-4 dark:border-[0.5px] shadow-xl justify-center dark:border-gray-500/35 rounded-md h-auto flex-wrap p-4 flex items-center">
            <div className="contact-form">
              <form className="w-[300px] space-y-5" onSubmit={handleSubmit}>
                <Input
                  placeholder="Enter your name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full"
                />
                <Input
                  placeholder="Enter your email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full"
                />
                <Textarea
                  placeholder="Type your message here"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full"
                />
                <button
                  type="submit"
                  className="w-full p-2 rounded-md bg-indigo-600 hover:bg-gradient-to-r from-indigo-600 to-yellow-300 scroll-smooth flex items-center justify-center text-sm text-white"
                >
                  Rocket Your Message
                </button>
              </form>
            </div>
            <div className="w-[300px] auto rounded-md overflow-hidden">
              <Image src={contactphoto} alt="" />
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed z-lg inset-0 flex items-center justify-center z-50">
          <div className="bg-zinc-800/45 bg-opacity-50 absolute inset-0"></div>
          <div className="bg-black p-6 rounded-md shadow-md relative z-10">
            <h2 className="text-2xl font-bold plus inter mb-4">Message Sent</h2>
            <p>Your message has been sent successfully!</p>
            <Button
              variant={"destructive"}
              onClick={() => setShowModal(false)}
              className="mt-4  rounded-md"
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
