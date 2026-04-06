import React from "react";

function Background({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Gradient Layer */}
      <div className="pointer-events-none fixed h-screen w-screen z-0 background-gradient" />

      {/* Main Content */}
      <div className="relative z-10">
        {children}
      </div>
    </>
  );
}

export { Background };
