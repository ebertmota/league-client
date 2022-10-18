import React, { useState } from 'react';
import { Container } from './input-styles'

type InputProps = {
  label: string;
  name: string;
} & React.HTMLProps<HTMLInputElement>

export const Input: React.FC<InputProps> = ({ label, name, ...inputProps}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Container isFocused={isFocused}>
      {isFocused && (
        <label htmlFor={name}>
          {label}
        </label>
      )}
      <input 
        {...inputProps} 
        name={name}
        placeholder={isFocused ? undefined : label} 
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </Container>
  )
}