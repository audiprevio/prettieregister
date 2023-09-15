import { Form, Field, ErrorMessage } from 'formik';
import { Button, Input, Row, Col } from 'antd';
import StepProgress from './StepProgress';
import CustomCard from './CustomCard';
import { FormikProps } from 'formik';

type FormikValues = {
  fullName?: string;
  email?: string;
  dateOfBirth?: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  username?: string;
  password?: string;
  termsAndConditions?: boolean;
};

type Step2Props = {
  formikProps: FormikProps<FormikValues>;
  onNext: () => void;
  onBack: () => void;
};

const Step2 = ({ formikProps, onNext, onBack }: Step2Props) => {
  const isStep2Valid =   
    formikProps.values.streetAddress && 
    formikProps.values.city && 
    formikProps.values.state &&
    formikProps.values.zipCode &&
    !formikProps.errors.streetAddress &&
    !formikProps.errors.city &&
    !formikProps.errors.state &&
    !formikProps.errors.zipCode &&
    formikProps.touched.streetAddress &&
    formikProps.touched.city &&
    formikProps.touched.state &&
    formikProps.touched.zipCode;

  return (
    <Row justify="center">
      <Col xs={24} sm={24} md={18} lg={12} xl={14}>
        <CustomCard>
          <Form>
            <StepProgress currentStep={1} />
            <br></br>

            <label htmlFor="streetAddress">Street Address</label>
            <Field name="streetAddress" as={Input} />
            <ErrorMessage name="streetAddress" component="div" />

            <label htmlFor="city">City</label>
            <Field name="city" as={Input} />
            <ErrorMessage name="city" component="div" />

            <label htmlFor="state">State</label>
            <Field name="state" as={Input} />
            <ErrorMessage name="state" component="div" />

            <label htmlFor="zipCode">Zip Code</label>
            <Field name="zipCode" as={Input} />
            <ErrorMessage name="zipCode" component="div" />
            <br></br>
            <Button type="primary" onClick={onNext} disabled={!isStep2Valid} style={{marginTop: '0px'}}>Next</Button>
            <Button type="secondary" onClick={onBack}>Back</Button>
          </Form>
        </CustomCard>
      </Col>
    </Row>
  );
};

export default Step2;
