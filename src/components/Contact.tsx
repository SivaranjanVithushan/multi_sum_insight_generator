// Contact.tsx
import React, { useState } from 'react';
import contactImage from '../assets/contactus.png'


function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    Contact: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // You can handle the form submission logic here
    console.log('Form submitted:', formData);
  };

  const [contactNumber, setContactNumber] = useState("");

  const handleContactNumberChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setContactNumber(event.target.value);
  };

  return (

    <form
      className="bg-white flex flex-col justify-center items-center mt-16 px-16 py-12 rounded-[50px] max-md:max-w-full max-md:mt-10 max-md:px-5"
      aria-label="Contact Form"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact US</h2>
        
      </div>
      <div className="flex w-full max-w-[1281px] items-center justify-between gap-5 mt-14 mb-8 max-md:max-w-full max-md:flex-wrap max-md:mt-10 max-sm:flex max-sm:flex-col max-sm:items-stretch max-sm:mx-auto">

        <div className="flex flex-col items-stretch w-full m-auto max-md:max-w-full max-sm:mx-auto">

          <div className="sm:col-span-2">
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
              Phone number
            </label>
            <div className="relative mt-2.5">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                  <option>US</option>
                  <option>CA</option>
                  <option>EU</option>
                </select>

              </div>
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-24 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
          <button
            type="submit"
            className="text-white text-center text-sm font-black leading-4 whitespace-nowrap justify-center items-center bg-slate-800 mt-5 px-16 py-3.5 rounded-md max-md:max-w-full max-md:px-5"
            aria-label="Send Message"
          >
            SEND MESSAGE
          </button>
        </div>
        <img
          loading="lazy"
          src={contactImage}
          className="aspect-[0.89] object-cover object-center w-full shrink-0 box-border min-h-[200px] min-w-[20px] overflow-hidden grow-0 max-w-[400px] h-auto self-stretch ml-2 max-sm:ml-px"
          alt=""
        />
        <div className="bg-white self-stretch flex flex-col justify-center items-stretch pb-3 px-px max-md:max-w-full" />
      </div>
    </form>
  );
}

export default ContactForm;