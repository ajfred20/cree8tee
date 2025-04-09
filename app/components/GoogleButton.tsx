import React from "react";
import GoogleIcon from "./GoogleIcon";

interface GoogleButtonProps {
  onClick?: () => void;
  text?: string;
  className?: string;
}

const GoogleButton: React.FC<GoogleButtonProps> = ({
  onClick,
  text = "Sign in with Google",
  className = "",
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full flex items-center justify-center gap-2 bg-white text-gray-700 border border-gray-300 rounded-md py-2 px-4 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors ${className}`}
    >
      <GoogleIcon className="h-5 w-5" />
      <span className="text-sm font-medium">{text}</span>
    </button>
  );
};

export default GoogleButton;
