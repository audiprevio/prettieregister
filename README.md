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

### App.tsx

This is the main component of the application. It uses the useState hook to manage the current step of the form and Formik to handle form submission.

### Step1.tsx, Step2.tsx, Step3.tsx 

These components represent the different steps of the form. They each accept formikProps as a prop, which is an object containing Formik's state and helper functions. They also accept onNext and onBack functions as props to navigate between steps.

### formConfig.ts 

This file exports the initial values and validation schema for the form. The validation schema is created using Yup.

## Further Information

For more detailed information, please refer to the individual .tsx files in the project.
