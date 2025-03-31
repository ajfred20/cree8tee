"use client";

import React from "react";
import { Plus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Who's behind cre8tee?",
    answer:
      "We're a team of senior designers and developers who are passionate about creating beautiful and functional designs.",
  },
  {
    question: "How does the delivery process work?",
    answer:
      "We follow a streamlined process: you submit requests, we review and clarify requirements, then deliver designs within 48 hours.",
  },
  {
    question: "Is there a limit to how many design requests I can have?",
    answer:
      "No, you can submit unlimited design requests. We handle them in order, working on 2 active requests at a time for efficient delivery.",
  },
  {
    question: "How fast will I receive my designs?",
    answer:
      "Most designs are delivered within 48 hours, depending on complexity. We maintain clear communication throughout the process.",
  },
  {
    question: "Do you make Shopify websites?",
    answer:
      "Yes, we specialize in creating custom Shopify websites that are both beautiful and conversion-optimized.",
  },
  {
    question: "What does it mean to pause a subscription?",
    answer:
      "Pausing means you can temporarily stop your subscription without losing your spot. Resume whenever you're ready.",
  },
  {
    question: "Why wouldn't I just hire a full-time designer?",
    answer:
      "Our service offers more flexibility and cost-effectiveness than a full-time hire, with no overhead costs or long-term commitments.",
  },
  {
    question: "Can I get refund?",
    answer:
      "Yes, we offer a satisfaction guarantee. If you're not happy with our service, we'll work to make it right or provide a refund.",
  },
];

export function FaqAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full space-y-4">
      {faqs.map((faq, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="bg-gray-50 rounded-2xl px-6 border-none"
        >
          <AccordionTrigger className="hover:no-underline py-6 text-left">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center">
                <Plus className="w-4 h-4" />
              </div>
              <span className="text-lg font-medium">{faq.question}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-6 pl-12 text-gray-600">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
