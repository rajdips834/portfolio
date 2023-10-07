import { useState } from "react";
export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const submitHandler = (e) => {};
  return (
    <>
      <form className="text-white relative pl-8 pb-8 top-[210vh] flex flex-col">
        <input
          type="text"
          className="w-[40vw] p-1 m-3 bg-slate-900"
          name="name"
          placeholder="Name"
        />
        <input
          type="text"
          className="w-[40vw] p-1 m-3 bg-slate-900"
          name="email"
          placeholder="Email"
        />
        <textarea
          type="text"
          className="w-[40vw] p-1 m-3 bg-slate-900"
          name="message"
          placeholder="Message"
        />
      </form>
    </>
  );
}
