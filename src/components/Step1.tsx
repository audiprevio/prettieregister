import { Form, Field, ErrorMessage } from 'formik';
import { Button, Input, DatePicker, Row, Col } from 'antd';
import StepProgress from './StepProgress';
import dayjs from 'dayjs';
import CustomCard from './CustomCard';
import { FormikProps } from 'formik';

type FormikValues = {
  fullName: string;
  email: string;
  dateOfBirth: string;
  streetAddress?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  username?: string;
  password?: string;
  termsAndConditions?: boolean;
};

type Step1Props = {
  formikProps: FormikProps<FormikValues>;
  onNext: () => void;
};

const Step1 = ({ formikProps, onNext }: Step1Props) => {
  const { setFieldValue } = formikProps;
  const isStep1Valid =   
    formikProps.values.fullName && 
    formikProps.values.email && 
    formikProps.values.dateOfBirth &&
    !formikProps.errors.fullName &&
    !formikProps.errors.email &&
    !formikProps.errors.dateOfBirth &&
    formikProps.touched.fullName &&
    formikProps.touched.email &&
    formikProps.touched.dateOfBirth;

  return (
    <Row justify="center">
      <Col xs={24} sm={24} md={18} lg={12} xl={10}>
        <CustomCard>
          <Form>
            <StepProgress currentStep={0} />
            <br></br>
            <label htmlFor="fullName">Full Name</label>
            <Field name="fullName" as={Input} />
            <ErrorMessage name="fullName" component="div" />

            <label htmlFor="email">Email Address</label>
            <Field name="email" type="email" as={Input} />
            <ErrorMessage name="email" component="div" />

            <label htmlFor="dateOfBirth">Date of Birth</label>
            <Field 
              name="dateOfBirth" 
              as={DatePicker} 
              value={formikProps.values.dateOfBirth ? dayjs(formikProps.values.dateOfBirth) : null}
              onChange={(value) => setFieldValue('dateOfBirth', value ? value.format('YYYY-MM-DD') : null)} 
            />
            <ErrorMessage name="dateOfBirth" component="div" />

            <Button type="primary" onClick={onNext} disabled={!isStep1Valid} style={{marginTop: '10px'}}>Next</Button>
          </Form>
        </CustomCard>
      </Col>
    </Row>
  );
};

export default Step1;
