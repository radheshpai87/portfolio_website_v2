import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Contact.css';

const Contact = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3 });
  const [formRef, formVisible] = useScrollAnimation({ threshold: 0.2 });
  const [infoRef, infoVisible] = useScrollAnimation({ threshold: 0.2 });

  const formReference = useRef();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    setErrorMessage('');
    
    // EmailJS configuration - get these from your EmailJS dashboard
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Check if environment variables are set
    if (!serviceID || !templateID || !publicKey) {
      setFormStatus('error');
      setErrorMessage('Email service is not configured. Please contact directly via email.');
      return;
    }

    // Send notification email to yourself
    emailjs.sendForm(serviceID, templateID, formReference.current, publicKey)
      .then(
        (result) => {
          console.log('Notification email sent successfully:', result.text);
          
          // Send auto-reply to the user
          const autoReplyTemplateID = import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID;
          
          if (autoReplyTemplateID) {
            emailjs.sendForm(serviceID, autoReplyTemplateID, formReference.current, publicKey)
              .then(
                (autoReplyResult) => {
                  console.log('Auto-reply sent successfully:', autoReplyResult.text);
                },
                (autoReplyError) => {
                  console.error('Auto-reply failed (but main email was sent):', autoReplyError.text);
                }
              );
          }
          
          setFormStatus('success');
          setFormData({ name: '', email: '', subject: '', message: '' });
          
          // Reset success message after 5 seconds
          setTimeout(() => {
            setFormStatus('');
          }, 5000);
        },
        (error) => {
          console.error('Email failed to send:', error.text);
          setFormStatus('error');
          setErrorMessage('Failed to send message. Please try again or email directly.');
          
          // Reset error message after 5 seconds
          setTimeout(() => {
            setFormStatus('');
            setErrorMessage('');
          }, 5000);
        }
      );
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 
          ref={titleRef}
          className={`section-title fade-in ${titleVisible ? 'visible' : ''}`}
        >
          Contact
        </h2>

        <div className="contact-content">
          <div 
            ref={infoRef}
            className={`contact-info fade-in ${infoVisible ? 'visible' : ''}`}
          >
            <div className="info-card">
              <h3 className="info-title">
                <span className="terminal-symbol">&gt;</span> Let's Connect
              </h3>
              <p className="info-description">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>

              <div className="contact-methods">
                <a href="mailto:radheshpai802@gmail.com" className="contact-method">
                  <div className="method-icon">📧</div>
                  <div className="method-info">
                    <div className="method-label">Email</div>
                    <div className="method-value">radheshpai802@gmail.com</div>
                  </div>
                </a>

                <a href="https://github.com/radheshpai87" target="_blank" rel="noopener noreferrer" className="contact-method">
                  <div className="method-icon">💻</div>
                  <div className="method-info">
                    <div className="method-label">GitHub</div>
                    <div className="method-value">@radheshpai87</div>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/radheshpai/" target="_blank" rel="noopener noreferrer" className="contact-method">
                  <div className="method-icon">💼</div>
                  <div className="method-info">
                    <div className="method-label">LinkedIn</div>
                    <div className="method-value">radheshpai</div>
                  </div>
                </a>
              </div>

              <div className="availability-status">
                <span className="status-indicator"></span>
                <span className="status-text">Available for freelance work</span>
              </div>
            </div>
          </div>

          <div 
            ref={formRef}
            className={`contact-form-wrapper fade-in ${formVisible ? 'visible' : ''}`}
          >
            <form className="contact-form" ref={formReference} onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  <span className="terminal-symbol">&gt;</span> Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  <span className="terminal-symbol">&gt;</span> Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  <span className="terminal-symbol">&gt;</span> Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Project Inquiry"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  <span className="terminal-symbol">&gt;</span> Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-input form-textarea"
                  placeholder="Tell me about your project..."
                  rows="6"
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="form-submit"
                disabled={formStatus === 'sending'}
              >
                {formStatus === 'sending' ? '⏳ Sending...' : 
                 formStatus === 'success' ? '✓ Message Sent!' : 
                 formStatus === 'error' ? '✗ Failed to Send' :
                 'Send Message'}
              </button>

              {formStatus === 'success' && (
                <div className="form-success">
                  <span className="terminal-symbol">&gt;</span> Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {formStatus === 'error' && errorMessage && (
                <div className="form-error">
                  <span className="terminal-symbol">&gt;</span> {errorMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
