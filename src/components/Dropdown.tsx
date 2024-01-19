'use client'

import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';

interface Props {
  options: string[],
  width: number,
}

const Dropdown = ({ options, width }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    closeDropdown();
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleOutsideClick = (e: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
      closeDropdown();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative">
      <div
        className={`rounded w-[${width}px] p-[1px]`}
        style={{ background: 'linear-gradient(to right, #54F4DF, #2AB6FD)' }}>
        <button
          className={`w-full rounded bg-[#202F34] text-gray-200 p-[9px] focus:outline-none`}
          onClick={toggleDropdown}
        >
          {selectedOption}
        </button>
      </div>

      {isOpen && (
        <div
          ref={dropdownRef}
          className={`absolute rounded w-[${width}px] mt-[6px] p-[1px] bg-[#263C43] z-10`}
        >
          <div className={`w-full rounded bg-[#2B2C36] text-gray-200`}>
            {options.map((option) => (
              <div
                key={option}
                className="px-[24px] py-[14px] border-b border-b-[#54555E] cursor-pointer flex justify-between"
                onClick={() => handleOptionClick(option)}
              >
                <span>{option}</span>
                <Image src="/arrow.svg" alt="arrow right" width={10} height={10} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
