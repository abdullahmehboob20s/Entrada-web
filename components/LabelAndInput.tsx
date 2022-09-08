import React from "react";

interface Props {
  label?: string;
  placeholder: string;
  Icon?: any;
}

function LabelAndInput({ label, placeholder, Icon }: Props) {
  return (
    <div>
      {label ? (
        <h4 className="text-lg font-bold -text-blue-300 mb-2">{label}</h4>
      ) : null}
      <div className="relative bg-white rounded-md overflow-hidden border-[1px] border-[#707070]">
        <input
          placeholder={placeholder}
          className="text-sm text-black opacity-80 w-full h-full py-3 px-4 bbg-white outline-none"
        />

        {Icon && <Icon />}
      </div>
    </div>
  );
}

export default LabelAndInput;
