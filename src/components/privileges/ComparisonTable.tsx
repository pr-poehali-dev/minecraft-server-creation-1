import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Icon from "@/components/ui/icon";
import { comparisonFeatures } from "@/data/privilegesData";

export const ComparisonTable = () => {
  const getFeatureValue = (
    featureIndex: number,
    privilegeType: "житель" | "дворянин" | "король",
  ) => {
    const colors = {
      житель: "minecraft-green",
      дворянин: "minecraft-orange",
      король: "minecraft-purple",
    };

    const color = colors[privilegeType];

    switch (featureIndex) {
      case 0: // Префикс в чате
        const prefixes = {
          житель: "[Житель]",
          дворянин: "[Дворянин]",
          король: "[Король]",
        };
        return (
          <Badge className={`bg-${color}/20 text-${color}`}>
            {prefixes[privilegeType]}
          </Badge>
        );

      case 1: // Приватные сундуки
        const chests = {
          житель: "10 штук",
          дворянин: "25 штук",
          король: "50 штук",
        };
        return <span className={`text-${color}`}>{chests[privilegeType]}</span>;

      case 2: // Точки дома
        const homes = {
          житель: "1 точка",
          дворянин: "3 точки",
          король: "5 точек",
        };
        return <span className={`text-${color}`}>{homes[privilegeType]}</span>;

      case 3: // Ежедневные киты
      case 4: // Цветной ник
        return <Icon name="Check" className={`text-${color} mx-auto`} />;

      case 5: // Полет в лобби
        if (privilegeType === "житель") {
          return <Icon name="X" className="text-minecraft-gray mx-auto" />;
        }
        return <Icon name="Check" className={`text-${color} mx-auto`} />;

      case 6: // Верстак
        if (privilegeType === "житель") {
          return <Icon name="X" className="text-minecraft-gray mx-auto" />;
        }
        return <Icon name="Check" className={`text-${color} mx-auto`} />;

      case 7: // Креативный режим
      case 8: // Эндер-сундук
      case 9: // Индивидуальные квесты
        if (privilegeType === "король") {
          return <Icon name="Check" className={`text-${color} mx-auto`} />;
        }
        return <Icon name="X" className="text-minecraft-gray mx-auto" />;

      default:
        return <Icon name="X" className="text-minecraft-gray mx-auto" />;
    }
  };

  return (
    <Card className="bg-minecraft-dark/30 border-minecraft-gray/20">
      <CardHeader>
        <CardTitle className="text-white text-center">
          Сравнение привилегий
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-minecraft-gray">Возможность</TableHead>
              <TableHead className="text-minecraft-green text-center">
                Житель
              </TableHead>
              <TableHead className="text-minecraft-orange text-center">
                Дворянин
              </TableHead>
              <TableHead className="text-minecraft-purple text-center">
                Король
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {comparisonFeatures.map((feature, index) => (
              <TableRow key={index}>
                <TableCell className="text-white font-medium">
                  {feature}
                </TableCell>
                <TableCell className="text-center">
                  {getFeatureValue(index, "житель")}
                </TableCell>
                <TableCell className="text-center">
                  {getFeatureValue(index, "дворянин")}
                </TableCell>
                <TableCell className="text-center">
                  {getFeatureValue(index, "король")}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
