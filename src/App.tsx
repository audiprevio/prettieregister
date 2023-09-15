import { useState } from 'react';
import { Formik } from 'formik';
import { validationSchema, initialValues } from './formConfig';
import Step1 from './components/Step1.tsx';
import Step2 from './components/Step2.tsx';
import Step3 from './components/Step3.tsx';
import './index.css';

const App = () => {
  const [step, setStep] = useState(1);


  const handleFormSubmit = (values: any) => {
    console.log('Form Submitted', values);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleFormSubmit}>
      {(formikProps) => {
        switch(step) {
          case 1:
            return <Step1 formikProps={formikProps} onNext={() => setStep(2)} />;
          case 2:
            return <Step2 formikProps={formikProps} onNext={() => setStep(3)} onBack={() => setStep(1)} />;
          case 3:
            return <Step3 formikProps={formikProps} onBack={() => setStep(2)} />;
          default:
            return null;
        }
      }}
    </Formik>
  );
};

export default App;
