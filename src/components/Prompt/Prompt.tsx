import NavBar from "./NavBar";
import Chat from "./Chat";

export default function Prompt() {
  return (
    <div className="text-sm md:text-base">
      <NavBar />
      <Chat />
    </div>
  );
}
