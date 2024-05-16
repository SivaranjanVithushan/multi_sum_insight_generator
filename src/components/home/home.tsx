import * as React from "react";
import ChatBot from "../Prompt/ChatBot";
import Container from "../Container";


const Home = () => {
  return (
    <div className="text-white w-full">
    <Container>
      <Container>
        <div className="border bottom-2 border-white h-[100%] p-4 md:p-0">
          <ChatBot />
        </div>
      </Container>
    </Container>
  </div>

  );
};

export default Home;
