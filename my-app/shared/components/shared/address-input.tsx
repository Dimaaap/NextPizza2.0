'use client';

import React from 'react';
import { AddressSuggestions } from "react-dadata"
import 'react-dadata/dist/react-dadata.css';

interface Props {
  onChange?: (value?: string) => void;
}

const AdressInput: React.FC<Props> = ({ onChange }) => {
  return (
    <>
      <AddressSuggestions
      token="6b13338d94ffaa90609a9760545e682bcaac80a3"
      onChange={(data) => onChange?.(data?.value)}
    />
    </>
  );
};

export default AdressInput