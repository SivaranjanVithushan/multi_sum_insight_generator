import Container from "../Container";

export default function NavBar() {
  return (
    <Container>
      <div className="flex justify-between items-center w-full text-white py-6 font-bold">
        <button className="bg-[#8e8f9e] text-black font-bold rounded-md md:px-12 md:py-2 px-4 py-1">
          Logo
        </button>
        <div className="flex">
          <ul className="flex flex-row items-center font-bold  md:gap-8 gap-2">
            <li>Home</li>
            <li>About</li>
            <li>
              <button className="text-black bg-[#EAB305] md:px-6 py-1 px-4">
                Contact
              </button>
            </li>
            <li>
              <button className="text-black rounded-full bg-white px-4 py-1 md:flex hidden items-center gap-2">
                Logout
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-log-out"
                >
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                  <polyline points="16 17 21 12 16 7" />
                  <line x1="21" x2="9" y1="12" y2="12" />
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
}
