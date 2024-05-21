import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Freqlist from "../../data/Freqasked";

interface Faq {
    question: string;
    answer: string;
}

const FreqAsked: React.FC<{}> = () => {
    const [numToShow] = useState<number>();

    const [faqStates, setFaqStates] = useState<boolean[]>(
        Freqlist.slice(0, numToShow).map(() => false)
    );

    const toggleFaqState = (index: number) => {
        setFaqStates((prevState) => {
            const newState = prevState.map((state, i) => {
                if (i === index) {
                    return !state;
                } else {
                    return false;
                }
            });
            return newState;
        });
    };

    return (
        <div className="md:p-[60px] h-full p-[50px] text-gray-800 bg-black flex flex-col gap-[20px] justify-center items-center ">
            <div>
                <h1 className="md:text-[48px] text-[25px] m-[10px] mb-[25px] font-semibold    text-white">
                    Frequently Asked Questions
                </h1>
            </div>
            {Freqlist.slice(0, numToShow).map((faq: Faq, index: number) => (
                <div
                    key={index}
                    className="md:w-[78%] "
                    onClick={() => toggleFaqState(index)}
                >
                    <div
                        className="h-[50px]  rounded-2xl flex p-[20px] z-auto overflow-hidden font-semibold      items-center md:text-[15px] text-[12px]  bg-white justify-between cursor-pointer"
                        style={{ position: "relative", zIndex: 1 }}
                    >
                        <div>{faq.question}</div>

                        <div>
                            {faqStates[index] ? (
                                <FiChevronUp className="md:text-[24px] text-[20px]" />
                            ) : (
                                <FiChevronDown className="md:text-[24px] text-[20px]" />
                            )}
                        </div>
                    </div>
                    <div
                        className={`bg-neutral-500 mt-[-10px]  text-white   rounded-b-md font-light   whitespace-pre-wrap  overflow-hidden transition-all duration-300 ${
                            faqStates[index] ? "max-h-[300px]" : "max-h-[0px]"
                        }`}
                    >
                        <p className="md:p-[20px] p-[15px] md:text-[14px] text-[13px]">
                            {faq.answer}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FreqAsked;
