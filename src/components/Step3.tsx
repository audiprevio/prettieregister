import { Form, Field, ErrorMessage } from 'formik';
import { Button, Input, Checkbox, Row, Col } from 'antd';
import StepProgress from './StepProgress';
import CustomCard from './CustomCard';
import { FormikProps } from 'formik';

type FormikValues = {
  fullName?: string;
  email?: string;
  dateOfBirth?: string;
  streetAddress?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  username: string;
  password: string;
  termsAndConditions: boolean;
};

type Step3Props = {
  formikProps: FormikProps<FormikValues>;
  onBack: () => void;
};

const Step3 = ({ formikProps, onBack }: Step3Props) => {
  const isStep3Valid =   
    formikProps.values.username && 
    formikProps.values.password && 
    formikProps.values.termsAndConditions &&
    !formikProps.errors.username &&
    !formikProps.errors.password &&
    !formikProps.errors.termsAndConditions &&
    formikProps.touched.username &&
    formikProps.touched.password &&
    formikProps.touched.termsAndConditions;

  return (
    <Row justify="center">
      <Col xs={24} sm={24} md={18} lg={12} xl={14}>
        <CustomCard>
          <Form>
            <StepProgress currentStep={3} />
            <br></br>
            <label htmlFor="username">Username</label>
            <Field name="username" as={Input} />
            <ErrorMessage name="username" component="div" />

            <label htmlFor="password">Password</label>
            <Field name="password" type="password" as={Input} />
            <ErrorMessage name="password" component="div" />

            <Field name="termsAndConditions" type="checkbox" as={Checkbox}>
              I agree to the Terms and Conditions
            </Field>
            <ErrorMessage name="termsAndConditions" component="div" />
            <br></br>
            <Button type="primary" htmlType="submit" disabled={!isStep3Valid}>Submit</Button>
            <Button type="secondary" onClick={onBack}>Back</Button>
          </Form>
        </CustomCard>
      </Col>
    </Row>
  );
};

export default Step3;
