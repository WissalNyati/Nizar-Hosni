import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, Check, AlertCircle } from 'lucide-react';
import Button from './Button';

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();
  
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // In a real application, you would send the form data to a server
      // For demo purposes, we're simulating a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      console.log('Form submitted:', data);
      setIsSubmitted(true);
      reset();
    } catch (error) {
      setSubmitError('There was a problem sending your message. Please try again.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      {isSubmitted ? (
        <div className="text-center py-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
            <Check className="w-8 h-8 text-primary-600" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
          <p className="text-neutral-600 mb-6">
            Thank you for reaching out. I'll get back to you as soon as possible.
          </p>
          <Button
            variant="outline"
            onClick={() => setIsSubmitted(false)}
          >
            Send Another Message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              id="name"
              type="text"
              className={`form-input ${
                errors.name ? 'border-red-500 focus:ring-red-500' : ''
              }`}
              placeholder="Your name"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              type="email"
              className={`form-input ${
                errors.email ? 'border-red-500 focus:ring-red-500' : ''
              }`}
              placeholder="Your email address"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className={`form-input ${
                errors.message ? 'border-red-500 focus:ring-red-500' : ''
              }`}
              placeholder="Your message"
              {...register('message', {
                required: 'Message is required',
                minLength: {
                  value: 10,
                  message: 'Message must be at least 10 characters',
                },
              })}
            ></textarea>
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
            )}
          </div>
          
          {submitError && (
            <div className="flex items-center p-4 bg-red-50 text-red-800 rounded-md">
              <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
              <p className="text-sm">{submitError}</p>
            </div>
          )}
          
          <div>
            <Button
              type="submit"
              variant="primary"
              icon={<Send className="w-4 h-4" />}
              iconPosition="right"
              disabled={isSubmitting}
              className="w-full"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;