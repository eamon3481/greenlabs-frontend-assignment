import React, { ChangeEvent, InputHTMLAttributes } from 'react';

const Input = ({
 name,
 type,
 placeholder,
 value,
 onChange,
 ...inputAttribute
}: {
 name: string;
 type: string;
 placeholder?: string;
 value?: string;
 onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
} & Omit<
 InputHTMLAttributes<any>,
 'onChange' | 'value' | 'type' | 'name' | 'placeholder'
>) => (
 <div className="border rounded overflow-hidden">
  <input
   type={type}
   name={name}
   placeholder={placeholder}
   value={value}
   onChange={onChange}
   className="p-1 w-full outline-none"
   autoComplete="off"
   {...inputAttribute}
  />
 </div>
);

export default Input;
