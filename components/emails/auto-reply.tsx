import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text,
  Tailwind,
  Link,
} from "@react-email/components";
import * as React from "react";

interface AutoReplyEmailProps {
  name: string;
}

export const AutoReplyEmail = ({ name }: AutoReplyEmailProps) => {
  const previewText = `Message received. Let's build something exceptional, ${name}.`;

  return (
    <Html>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                background: "#f4f4f5", // Zinc 100
                surface: "#ffffff",    // User Specified White (Card BG)
                border: "#e4e4e7",     // Zinc 200
                primary: "#fca311",    // User Specified Orange
                textMain: "#18181b",   // Zinc 900 (Black)
                textMuted: "#52525b",  // Zinc 600
              },
            },
          },
        }}
      >
        <Head />
        <Preview>{previewText}</Preview>
        <Body className="bg-background my-auto mx-auto font-sans">
        <Container className="border border-solid border-border rounded-2xl my-[40px] mx-auto p-[32px] max-w-[500px] bg-surface shadow-sm">
            
            {/* Branding Header */}
            <Section className="mt-[4px] mb-[28px]">
              <div className="w-[40px] h-[4px] bg-primary mb-8 rounded-full"></div>
              <Text className="text-textMuted text-[10px] font-bold tracking-[0.2em] uppercase m-0 leading-none">
                Smail Selmi
              </Text>
              <Text className="text-textMain text-[30px] font-extrabold mt-[16px] mb-[8px] leading-[1.1] tracking-tighter">
                High-performance design is on the way.
              </Text>
            </Section>
            
            {/* Main Message */}
            <Text className="text-textMuted text-[16px] leading-[26px] my-0 mb-8 font-medium">
              Hi <span className="text-textMain font-semibold">{name}</span>,
              <br /><br />
              Thanks for reaching out. Whether you're looking for a custom Next.js build or a complete UI/UX overhaul, you've come to the right place.
              <br /><br />
              I have received your project details and am currently reviewing them. You can expect a personal response from me within <span className="text-primary font-bold">24 hours</span>.
            </Text>

            {/* CTA Section - Distinct background for focus */}
            <Section className="bg-[#fafafa] rounded-xl p-[24px] my-[32px] border border-solid border-border text-center">
              <Text className="text-textMain text-[18px] font-bold m-0 mb-2">
                Need a faster reply?
              </Text>
              <Text className="text-textMuted text-[14px] m-0 mb-6">
                Skip the queue and chat directly.
              </Text>
              <Section>
                <Button
                  className="bg-primary rounded-lg text-white text-[16px] font-bold no-underline text-center px-7 py-3.5 inline-block shadow-md hover:bg-[#e8960f]"
                  href="https://wa.me/213550365472"
                >
                  Chat on WhatsApp →
                </Button>
              </Section>
              <Text className="mt-6 mb-0 text-[12px]">
                <Link
                  className="text-textMuted font-medium hover:text-textMain transition-colors underline decoration-border/50 underline-offset-4"
                  href="https://instagram.com/0xsmail"
                >
                  View My Latest Work on Instagram
                </Link>
              </Text>
            </Section>

            <Hr className="border-border my-[32px] w-full" />
            
            {/* Footer */}
            <Text className="text-textMuted text-[12px] text-center leading-6 tracking-wide opacity-80">
              © 2026 Smail Selmi. All rights reserved.<br />
              UI/UX Designer & Front-end Developer.<br />
              <Link href="https://smailselmi.com" className="text-textMuted underline decoration-border/50 underline-offset-2 hover:text-textMain">smailselmi.com</Link>
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default AutoReplyEmail;
