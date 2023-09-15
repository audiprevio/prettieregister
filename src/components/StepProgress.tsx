import React from 'react';
import { Steps } from 'antd';

interface StepProgressProps {
  currentStep: number;
}

const StepProgress: React.FC<StepProgressProps> = ({ currentStep }) => {
  return (
    <Steps current={currentStep} className="custom-step">
      <Steps.Step title="Step 1" description="Personal Info" />
      <Steps.Step title="Step 2" description="Address Details" />
      <Steps.Step title="Step 3" description="User Credentials" />
    </Steps>
  );
}

export default StepProgress;
