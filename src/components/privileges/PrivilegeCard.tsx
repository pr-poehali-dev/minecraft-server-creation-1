import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Privilege } from "@/data/privilegesData";

interface PrivilegeCardProps {
  privilege: Privilege;
}

export const PrivilegeCard = ({ privilege }: PrivilegeCardProps) => {
  return (
    <Card
      className={`
        relative transition-all hover:scale-105 
        bg-minecraft-dark/40 border-${privilege.color}/30 hover:border-${privilege.color}/50
        ${privilege.popular ? "ring-2 ring-minecraft-orange/50" : ""}
      `}
    >
      {privilege.popular && (
        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-minecraft-orange text-white">
          🔥 Популярный
        </Badge>
      )}

      <CardHeader className="text-center pb-4">
        <CardTitle
          className={`text-3xl font-heading font-bold text-${privilege.color} mb-2`}
        >
          {privilege.name}
        </CardTitle>
        <div className="text-4xl font-bold text-white mb-2">
          {privilege.price}₽
          <span className="text-sm text-minecraft-gray font-normal">
            /{privilege.duration}
          </span>
        </div>
        <p className="text-minecraft-gray text-sm">{privilege.description}</p>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="space-y-3 mb-6">
          {privilege.features.slice(0, 6).map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <Icon
                name={feature.icon as any}
                size={16}
                className="text-minecraft-green mt-0.5"
              />
              <div>
                <div className="text-white text-sm font-medium">
                  {feature.name}
                </div>
                <div className="text-minecraft-gray text-xs">
                  {feature.description}
                </div>
              </div>
            </div>
          ))}

          {privilege.features.length > 6 && (
            <div className="text-center">
              <Badge
                variant="outline"
                className="text-minecraft-gray border-minecraft-gray/30"
              >
                +{privilege.features.length - 6} возможностей
              </Badge>
            </div>
          )}
        </div>

        <Button
          className={`w-full bg-${privilege.color} hover:bg-${privilege.color}/80 text-white text-lg py-3`}
        >
          <Icon name="ShoppingCart" size={20} className="mr-2" />
          Купить {privilege.name}
        </Button>
      </CardContent>
    </Card>
  );
};
