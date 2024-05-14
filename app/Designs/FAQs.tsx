import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import faq from "../assets/faq.svg";

export function AccordionDemo() {
  return (
    <div className=" min-h-screen w-full justify-center pt-16 flex-col space-y-7 items-center">
      <h1 className=" text-center font-extrabold lg:text-4xl text-3xl text-balance">
        FAQs
      </h1>
      <div className=" flex-wrap gap-16  p-5 flex-center ">
        <div className="h-auto w-[300px] ">
          <Image src={faq} alt="" />
        </div>
        <div className=" max-w-[600px] w-full">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                accessible for users with disabilities?
              </AccordionTrigger>
              <AccordionContent>
                Yes, our design adheres to the WAI-ARIA standards, ensuring
                accessibility for all users.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Does it support customization?
              </AccordionTrigger>
              <AccordionContent>
                Absolutely, you can customize the styles to match your brand
                identity seamlessly.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                handle large amounts of content?
              </AccordionTrigger>
              <AccordionContent>
                Yes, our solution is designed to efficiently manage and display
                extensive content without sacrificing performance.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Is it optimized for mobile devices?
              </AccordionTrigger>
              <AccordionContent>
                Definitely, our design is responsive and optimized for various
                screen sizes, ensuring a seamless experience across devices.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                easy to push to existing systems?
              </AccordionTrigger>
              <AccordionContent>
                Integration is straightforward. Our solution is designed with
                flexibility in mind, making it easy to integrate into your
                existing systems or workflows.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
