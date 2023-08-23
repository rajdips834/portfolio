import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="fixed w-full ">
      <ul className="flex justify-between space-x-4 text-xl backdrop-filter backdrop-blur-lg text-slate-50">
        {" "}
        <li>
          <a
            href="/"
            className="px-2 py-1 rounded hover:bg-gray-200 active:text-green-600"
          >
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="px-2 py-1 rounded hover:bg-gray-200">
            About
          </a>
        </li>
        <li>
          <a href="/contact" className="px-2 py-1 rounded hover:bg-gray-200">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
