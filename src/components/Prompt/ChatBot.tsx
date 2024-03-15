import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  userInput: string;
};

interface ChatBotProps {
  imgUrl?: string;
}

export default function ChatBot({ imgUrl }: ChatBotProps) {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [userFormInput, setUserFormInput] = useState<Inputs | null | string>(
    null
  );

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    setUserFormInput(data.userInput);
    setFormSubmitted(true);
    reset();
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSubmit(onSubmit)();
    }
  };

  return (
    <div className="md:h-[80vh] md:py-20  md:relative">
      {formSubmitted && (
        <div className=" flex flex-col gap-6 lg:mx-48 md:mx-20">
          {imgUrl ? (
            <img className="w-10 h-10 rounded-full" src={imgUrl} alt="" />
          ) : (
            <div className="flex items-center gap-6">
              <div className="w-10 h-10 rounded-full bg-gray-400"></div>
              <div>
                <h3 className="md:text-xl font-bold text-base">You</h3>
                {typeof userFormInput === "string" ? (
                  <p>{userFormInput}</p>
                ) : typeof userFormInput === "object" ? (
                  <p>{JSON.stringify(userFormInput)}</p>
                ) : null}
              </div>
            </div>
          )}
          <div className="flex items-center gap-6 mb-4">
            <div className="w-10 h-10 rounded-full bg-gray-400"></div>
            <div>
              <h3 className="md:text-xl font-bold text-base">Chat-bot</h3>
              <p>Set Your Response from your API</p>
            </div>
          </div>
        </div>
      )}
      <div className="w-full justify-center flex flex-col items-center">
        {!formSubmitted && (
          <>
            <button className="bg-[#8e8f9e] text-black font-bold rounded-md md:px-12 md:py-2 px-4 py-1 mb-4">
              Logo
            </button>
            <h1 className="text-[#8e8f9e] md:text-4xl text-xl font-bold">
              How can i help you today?
            </h1>
          </>
        )}
      </div>
      <div className="md:absolute md:bottom-6 flex justify-center w-full ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full lg:mx-48 md:mx-20"
        >
          <input
            className="w-full h-12 rounded-md mt-6 px-4 text-black"
            placeholder="Type your question and press enter"
            {...register("userInput")}
            onKeyDown={handleKeyDown}
          />
        </form>
      </div>
    </div>
  );
}
