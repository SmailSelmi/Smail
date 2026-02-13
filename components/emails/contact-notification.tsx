
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import * as React from "react";

interface ContactNotificationEmailProps {
  name: string;
  email: string;
  message: string;
  phone: string;
}

export const ContactNotificationEmail = ({
  name,
  email,
  message,
  phone,
}: ContactNotificationEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New Project Inquiry from {name}</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: "#E87C2C",
                background: "#09090b",
                surface: "#111113",
                border: "#27272a",
              },
            },
          },
        }}
      >
        <Body className="bg-background my-auto mx-auto font-sans text-white">
          <Container className="border border-solid border-border rounded-lg my-[40px] mx-auto p-[20px] max-w-[465px] bg-surface">
            <Section className="mt-[32px]">
              <Heading className="text-brand text-[24px] font-normal text-center p-0 my-[30px] mx-0">
                New Project Inquiry
              </Heading>
            </Section>

            <Section className="my-[32px]">
              <Text className="text-zinc-400 text-[14px] leading-[24px]">
                You received a new message from the contact form.
              </Text>

              <Section className="mt-[24px] mb-[24px]">
                <Text className="text-xs uppercase tracking-wider text-zinc-500 mb-1 font-semibold">
                  Sender Details
                </Text>
                <div className="bg-black/50 p-4 rounded-md border border-border">
                  <Text className="text-white text-[14px] m-0 font-medium">
                    Name: <span className="text-zinc-300 font-normal">{name}</span>
                  </Text>
                  <Text className="text-white text-[14px] m-0 mt-2 font-medium">
                    Email:{" "}
                    <Link
                      href={`mailto:${email}`}
                      className="text-brand no-underline"
                    >
                      {email}
                    </Link>
                  </Text>
                  <Text className="text-white text-[14px] m-0 mt-2 font-medium">
                    Phone: <span className="text-zinc-300 font-normal">{phone}</span>
                  </Text>
                </div>
              </Section>

              <Section className="mt-[24px]">
                <Text className="text-xs uppercase tracking-wider text-zinc-500 mb-1 font-semibold">
                  Message
                </Text>
                <div className="bg-black/50 p-4 rounded-md border border-border">
                  <Text className="text-zinc-300 text-[14px] leading-[24px] m-0 whitespace-pre-wrap">
                    {message}
                  </Text>
                </div>
              </Section>
            </Section>
            
            <Section className="border-t border-border mt-[32px] pt-[32px]">
              <Text className="text-zinc-500 text-[12px] text-center">
                Received via <span className="text-zinc-400">smailselmi.com</span>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactNotificationEmail;
