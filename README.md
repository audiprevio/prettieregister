# PrettieRegister

PrettieRegister is a multi-step form application built with React, TypeScript, Formik, and Yup. It showcases the use of hooks, props, form handling/validation, and static type checking using TypeScript.

## Tech Stack

- React
- TypeScript
- Formik
- Yup

## Features

- Multi-step form
- Form validation with Formik and Yup
- State management with React hooks
- Static Type checking with TypeScript

## Setup

To set up the project, follow these steps:

1. Initialize a new project with Vite by running `npx create-vite@latest YOUR-PROJECT-NAME --template react-ts`
2. Navigate into the project directory with `cd YOUR-PROJECT-NAME`
3. Install the dependencies by running `npm install`
4. Start the development server by running `npm run dev`

## Components

### Components

#### App.tsx\
This is the main component of the application. It uses the useState hook to manage the current step of the form and Formik to handle form submission.

const [step, setStep] = useState(1);\
The useState hook initializes the step state variable to 1. The setStep function is used to update the step state variable.

<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleFormSubmit}>\
The Formik component is used to handle form state and submission. It takes initialValues, validationSchema, and onSubmit as props. initialValues is the initial state of the form, validationSchema is the Yup schema used for form validation, and onSubmit is the function that is called when the form is submitted.

#### Step1.tsx, Step2.tsx, Step3.tsx\
These components represent the different steps of the form. They each accept formikProps as a prop, which is an object containing Formik's state and helper functions. They also accept onNext and onBack functions as props to navigate between steps.
```
return <Step1 formikProps={formikProps} onNext={() => setStep(2)} />;\
```
In the above code snippet, Step1 is rendered when the step state variable is 1. formikProps is passed as a prop to allow Step1 to interact with Formik's state and helper functions. The onNext function is passed as a prop to allow Step1 to navigate to the next step.

#### formConfig.ts
This file exports the initial values and validation schema for the form. The validation schema is created using Yup.

```
const initialValues = {

  // initial form state

};

const validationSchema = Yup.object().shape({

  // form validation rules

});\
```

In the above code snippet, initialValues is an object that represents the initial state of the form. validationSchema is a Yup object that defines the validation rules for the form.

### Hooks\
React hooks are used throughout the project to manage state and side effects. The useState hook is used in App.tsx to manage the current step of the form.

### Props\
Props are used to pass data and functions between components. For example, formikProps is passed to the step components to allow them to interact with Formik's state and helper functions.

### Formik\
Formik is used to handle form state and submission. It provides a set of helper functions that can be used to interact with the form's state and handle form submission.

### Yup\
Yup is used to create a validation schema for the form. This schema is used by Formik to validate the form's values before submission.

For more detailed information, please refer to the individual .tsx files in the project.
