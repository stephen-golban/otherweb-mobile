import React from 'react';

import { BaseButton, type ButtonProps } from '../base';

const FilledButton: React.FC<ButtonProps> = ({ bg = 'blue', ...props }) => {
  return <BaseButton bg={bg} br={12} minh={40} bw={1} bc={bg} textColor="white" {...props} />;
};

export { FilledButton };
