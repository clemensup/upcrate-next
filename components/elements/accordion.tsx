import * as React from "react";
import { CaptainCrateSvg } from "..";

export interface AccordionProps {
  question: JSX.Element;
  answer: JSX.Element;
}

export function Accordion({ question, answer }: AccordionProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <button className="block w-full my-10" onClick={() => setIsOpen(!isOpen)}>
      <div className="ml-6 sm:ml-12 mb-5">
        <CaptainCrateSvg variant="head-only" width={24} />
      </div>
      <div
        className={`border-t-8 ${isOpen ? "border-orange" : "border-purple"} ${
          isOpen ? "text-orange" : "text-purple"
        } relative accordion-kink`}
      >
        <div className="flex justify-between">
          {question}
          <p className={`text-6xl ${isOpen ? "text-orange" : "text-purple"}`}>
            {isOpen ? "–" : "+"}
          </p>
        </div>
        {isOpen && answer}
      </div>
    </button>
  );
}
