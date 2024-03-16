import Container from "../Container";
import ChatBot from "./ChatBot";

export default function Chat() {
  return (
    <div className="text-white">
      <Container>
        <Container>
          <div className="flex gap-4 font-bold">
            <button className="text-black bg-[#EAB305] md:px-6 py-1 px-4">
              Chatbot
            </button>
            <button>Select Your Language</button>
          </div>
          <div className="border bottom-2 border-white h-[100%] p-4 md:p-0">
            <ChatBot />
          </div>
        </Container>
      </Container>
    </div>
  );
}
