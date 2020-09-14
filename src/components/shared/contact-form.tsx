import React, { FC } from 'react';
import { ScaleLoader } from 'react-spinners';
import { Formik, Form } from 'formik';
import { object as Obj, string as Str } from 'yup';

import { Input } from '.';
import { notify } from '../../toastify';
import { MailGunService } from '../../services';


interface FormSchema {
  name: string;
  email: string;
  subject: string;
  message: string;
}
// Yup Schema
const formSchema = Obj<FormSchema>().shape({
  name: Str().required('Required'),
  email: Str().email('Email invalid').required('Required'),
  subject: Str(),
  message: Str().required('Required')
});


const ContactForm: FC = () => {

  const schemaValues: FormSchema = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }

  return (
    <Formik
      initialValues={schemaValues}
      validationSchema={formSchema}
      onSubmit={ async(
        { name, email, subject, message }: FormSchema,
        { setSubmitting }
      ) => {
        setSubmitting(true);
        try {
          MailGunService.send(name, email, subject, message);
          setSubmitting(false);
          notify('Your message was sent, thank you!', 'success', 5000);
        } catch(error) {
          notify('Message sending failed. Try again!', 'error', 5000);
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting, errors, isValid }) => (
        <Form id="contactForm">
        <fieldset>
          <Input
            label="Name"
            name="name"
            required
            errorText={errors.name}
          />
          <Input
            label="Email"
            name="email"
            required
            errorText={errors.email}
          />
          <Input
            label="Subject"
            name="subject"
            errorText={errors.subject}
          />
          <Input
            label="Message"
            name="message"
            textarea
            required
            errorText={errors.message}
          />
          <div>
            {isSubmitting ? <ScaleLoader color="#ff0055" /> : (
              <button type="submit" className="submit" disabled={!isValid}>
                SEND MESSAGE
              </button>
            )}
          </div>
        </fieldset>
      </Form>
      )}
    </Formik>
  )
}

export default ContactForm;