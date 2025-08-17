import React, { useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import EarthCanvas from "../canvas/Earth";

// ====== Styled Components ======
const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  z-index: 1;
  align-items: center;

  @media (max-width: 960px) {
    padding: 0;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0 0 80px 0;
  gap: 12px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.h2`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.p`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 32px;
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.h3`
  font-size: 28px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  flex: 1;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;

  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  resize: none;

  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.button`
  width: 100%;
  text-align: center;
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

// ====== Component ======
const Contact = () => {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3vbyulg", // your Service ID
        "template_2vmy2cc", // your EmailJS Template ID
        formRef.current,
        "zkGLyAThPdlHj6WwG" // your EmailJS Public Key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.error(error);
          alert("❌ Failed to send message. Try again later.");
        }
      );
  };

  return (
    <Container>
      <Wrapper>
        <EarthCanvas />
        <Title>Contact</Title>
        <Desc>
          Feel free to reach out to me for any questions or opportunities!
        </Desc>

        <ContactForm ref={formRef} onSubmit={handleSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInput
            name="from_email"
            placeholder="Your Email"
            type="email"
            required
          />
          <ContactInput
            name="from_name"
            placeholder="Your Name"
            required
          />
          <ContactInput
            name="subject"
            placeholder="Subject"
            required
          />
          <ContactInputMessage
            name="message"
            placeholder="Message"
            rows={4}
            required
          />
          <ContactButton type="submit">Send</ContactButton>
        </ContactForm>
      </Wrapper>
    </Container>
  );
};

export default Contact;
