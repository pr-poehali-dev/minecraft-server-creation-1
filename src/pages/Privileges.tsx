import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PrivilegeHeader } from "@/components/privileges/PrivilegeHeader";
import { PrivilegeCard } from "@/components/privileges/PrivilegeCard";
import { ComparisonTable } from "@/components/privileges/ComparisonTable";
import { PrivilegeDetails } from "@/components/privileges/PrivilegeDetails";
import { FAQSection } from "@/components/privileges/FAQSection";
import { privilegesData } from "@/data/privilegesData";

export default function Privileges() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-minecraft-darker via-minecraft-dark to-slate-900">
      <PrivilegeHeader />

      {/* Pricing Cards */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {privilegesData.map((privilege) => (
              <PrivilegeCard key={privilege.id} privilege={privilege} />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Information */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-white text-center mb-8">
            Подробная информация
          </h2>

          <Tabs defaultValue="сравнение" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-minecraft-dark/50">
              <TabsTrigger
                value="сравнение"
                className="data-[state=active]:bg-minecraft-green/20"
              >
                Сравнение
              </TabsTrigger>
              <TabsTrigger
                value="житель"
                className="data-[state=active]:bg-minecraft-green/20"
              >
                Житель
              </TabsTrigger>
              <TabsTrigger
                value="дворянин"
                className="data-[state=active]:bg-minecraft-orange/20"
              >
                Дворянин
              </TabsTrigger>
              <TabsTrigger
                value="король"
                className="data-[state=active]:bg-minecraft-purple/20"
              >
                Король
              </TabsTrigger>
            </TabsList>

            <TabsContent value="сравнение" className="mt-8">
              <ComparisonTable />
            </TabsContent>

            {privilegesData.map((privilege) => (
              <TabsContent
                key={privilege.id}
                value={privilege.id}
                className="mt-8"
              >
                <PrivilegeDetails privilege={privilege} />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <FAQSection />
    </div>
  );
}
