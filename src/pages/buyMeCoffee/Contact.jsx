export default function Contact() {
  return (
    <>
      <form className="relative pl-8 pb-8 top-[210vh] flex flex-col">
        <label for="name">Name</label>
        <input
          type="text"
          className="w-[40vw] p-1 bg-slate-900"
          name="name"
          placeholder="Name"
        />
        <label for="email">Email</label>
        <input
          type="text"
          className="w-[40vw] p-1 bg-slate-900"
          name="email"
          placeholder="Email"
        />
        <label for="message">Message</label>
        <textarea
          type="text"
          className="w-[40vw] p-1 bg-slate-900"
          name="message"
          placeholder="Message"
        />
      </form>
    </>
  );
}
