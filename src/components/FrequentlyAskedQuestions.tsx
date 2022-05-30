import React from "react";

// Data
import questions from "../../data/questions.json";

const FrequentlyAskedQuestions = () => {
  return (
    <section
      className="w-full p-4 py-8 flex flex-col justify-start items-center bg-[#92DBC0] md:py-16"
      id="frequently-asked-uestions"
    >
      <h3 className="font-black text-[#1C444C] text-lg">
        Preguntas frecuentes
      </h3>

      {questions.length > 0 && (
        <>
          {questions.map(({ ask, answer }) => (
            <details
              key={ask}
              className="w-full p-4 my-2 bg-white rounded md:w-2/3 lg:w-1/2 xl:w-1/3"
            >
              <summary className="font-bold text-[#267984] list-none relative after:content-['\002B'] after:h-[1.5rem] after:text-[1.5rem] after:font-bold after:text-[#267984] after:absolute after:top-[-0.5rem] after:right-0">
                {ask}
              </summary>
              <div className="mt-8">
                {answer.split("\n").map((sigleAnswer) => (
                  <p key={sigleAnswer} className="mt-4">
                    {sigleAnswer.trim()}
                  </p>
                ))}
              </div>
            </details>
          ))}
        </>
      )}
    </section>
  );
};

export default FrequentlyAskedQuestions;
