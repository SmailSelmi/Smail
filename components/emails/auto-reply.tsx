
import {
  Body,
  Button,
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

interface AutoReplyEmailProps {
  name: string;
}

export const AutoReplyEmail = ({ name }: AutoReplyEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>I've got your message, {name}! ⚡</Preview>
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
          <Container className="border-t-4 border-t-brand border-x border-b border-border rounded-lg my-[40px] mx-auto p-[20px] max-w-[465px] bg-surface rounded-t-none">
            <Section className="mt-[32px]">
              <Heading className="text-white text-[24px] font-bold text-center p-0 my-[30px] mx-0">
                I've got your message, <span className="text-brand">{name}</span>! ⚡
              </Heading>
            </Section>

            <Section className="my-[32px] text-center">
              <Text className="text-zinc-400 text-[16px] leading-[24px]">
                Thanks for reaching out. I'll personally review your inquiry and get back to you within 24 hours.
              </Text>
            </Section>

            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                className="bg-[#25D366] rounded-full text-white text-[14px] font-semibold no-underline text-center px-5 py-3 mx-2"
                href="https://wa.me/213550365472"
              >
                WhatsApp
              </Button>
              <Button
                className="bg-[#E1306C] rounded-full text-white text-[14px] font-semibold no-underline text-center px-5 py-3 mx-2"
                href="https://instagram.com/0xsmail"
              >
                Instagram
              </Button>
            </Section>

            <Section className="border-t border-border mt-[32px] pt-[32px] text-center">
              <Text className="text-zinc-500 text-[14px]">
                Smail Selmi — <span className="text-white font-semibold">Kyodai Code</span>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default AutoReplyEmail;
