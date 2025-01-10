import React from "react";

interface Props {
  type: string;
  name: string;
  placeholder: string;
}

const AuthInput = ({ type, name, placeholder }: Props) => {
  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        className="auth-input-field box-border py-3 px-5 border-2 rounded w-full"
        placeholder=""
      />
      <p className="auth-input-placeholder absolute pointer-events-none text-lg top-3 left-5 text-slate-400 transition-all">
        {placeholder}
      </p>
    </div>
  );
};

export default AuthInput;
