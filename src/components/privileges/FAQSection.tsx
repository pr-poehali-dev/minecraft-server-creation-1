import { Card, CardContent } from "@/components/ui/card";
import { faqData } from "@/data/privilegesData";

export const FAQSection = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-heading font-bold text-white text-center mb-8">
          Часто задаваемые вопросы
        </h2>

        <div className="grid gap-6">
          {faqData.map((faq, index) => (
            <Card
              key={index}
              className="bg-minecraft-dark/30 border-minecraft-gray/20"
            >
              <CardContent className="p-6">
                <h3 className="text-white font-semibold mb-2">
                  {faq.question}
                </h3>
                <p className="text-minecraft-gray">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
