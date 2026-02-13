import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Text,
  Tailwind,
  Hr,
  Row,
  Column,
} from "@react-email/components";
import * as React from "react";

interface ContactNotificationProps {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export const ContactNotificationEmail = ({
  name,
  email,
  phone,
  message,
}: ContactNotificationProps) => (
  <Html>
    <Tailwind
       config={{
          theme: {
            extend: {
              colors: {
                background: "#09090b", // Revert to Dark BG
                border: "#27272a",     // Revert to Dark Border
                accent: "#fca311",     // Keep Golden Orange
                textMain: "#ffffff",   // Revert to White Text
                textMuted: "#a1a1aa",  // Revert to Muted Gray
              },
            },
          },
        }}
    >
      <Head />
      <Preview>⚡ New Lead: {name}</Preview>
      <Body className="bg-background font-mono text-textMain">
        <Container className="max-w-[600px] mx-auto p-10 border border-solid border-border rounded-lg mt-10 bg-black">
          
          {/* Status Badge */}
          <Section className="mb-6">
            <Text className="bg-accent/20 text-accent text-[12px] px-2 py-1 rounded inline-block border border-solid border-accent/50 font-bold tracking-wider">
              NEW SUBMISSION
            </Text>
          </Section>

          {/* Header */}
          <Text className="text-3xl font-bold mt-0 mb-8 text-textMain">
            Project Inquiry
          </Text>

          {/* Data Grid */}
          <Section className="border border-solid border-border rounded-lg overflow-hidden">
            <Row className="border-b border-solid border-border bg-[#111]">
              <Column className="p-4 border-r border-solid border-border w-[30%]">
                <Text className="text-textMuted text-[10px] uppercase m-0">Client Name</Text>
              </Column>
              <Column className="p-4">
                <Text className="text-textMain text-[14px] font-medium m-0">{name}</Text>
              </Column>
            </Row>
            
            <Row className="border-b border-solid border-border bg-[#0a0a0a]">
              <Column className="p-4 border-r border-solid border-border">
                <Text className="text-textMuted text-[10px] uppercase m-0">Email Address</Text>
              </Column>
              <Column className="p-4">
                <Text className="text-accent text-[14px] m-0">
                  <a href={`mailto:${email}`} className="no-underline text-accent">{email}</a>
                </Text>
              </Column>
            </Row>

            {phone && (
              <Row className="border-b border-solid border-border bg-[#111]">
                <Column className="p-4 border-r border-solid border-border">
                  <Text className="text-textMuted text-[10px] uppercase m-0">WhatsApp/Phone</Text>
                </Column>
                <Column className="p-4">
                   <Text className="text-textMain text-[14px] m-0">{phone}</Text>
                </Column>
              </Row>
            )}
          </Section>

          {/* Message Content */}
          <Section className="mt-8">
            <Text className="text-textMuted text-[12px] uppercase mb-2">Project Brief</Text>
            <div className="bg-[#111] p-6 rounded border border-solid border-border text-textMain text-[14px] leading-relaxed whitespace-pre-wrap">
              {message}
            </div>
          </Section>

          <Hr className="border-border my-8" />
          
          <Text className="text-textMuted text-[10px] text-center">
            Sent via smailselmi.com • Node.js Environment
          </Text>

        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default ContactNotificationEmail;
