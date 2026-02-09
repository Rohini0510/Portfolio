import React from 'react';

const Preloader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy-dark">
      <div className="relative flex items-center justify-center w-[180px] h-[180px] font-sans text-[1.2em] font-light text-white rounded-full select-none">
        
        {/* Animated Letters */}
        <div className="z-10 flex">
            {['W', 'e', 'l', 'c', 'o', 'm', 'e'].map((letter, index) => (
            <span
                key={index}
                className="inline-block opacity-40 animate-loader-letter"
                style={{ animationDelay: `${index * 0.1}s` }}
            >
                {letter}
            </span>
            ))}
        </div>

        {/* Rotating Loader Ring */}
        <div className="absolute top-0 left-0 w-full h-full rounded-full animate-loader-rotate" />
      </div>
    </div>
  );
};

export default Preloader;
