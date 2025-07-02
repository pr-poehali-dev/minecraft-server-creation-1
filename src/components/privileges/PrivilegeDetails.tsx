import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Privilege } from "@/data/privilegesData";

interface PrivilegeDetailsProps {
  privilege: Privilege;
}

export const PrivilegeDetails = ({ privilege }: PrivilegeDetailsProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <Card className={`bg-minecraft-dark/30 border-${privilege.color}/30`}>
        <CardHeader>
          <CardTitle
            className={`text-${privilege.color} text-2xl flex items-center gap-2`}
          >
            <Icon name="Star" size={24} />
            Возможности {privilege.name}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {privilege.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 bg-minecraft-darker/30 rounded-lg"
              >
                <Icon
                  name={feature.icon as any}
                  size={20}
                  className={`text-${privilege.color}`}
                />
                <div>
                  <div className="text-white font-medium">{feature.name}</div>
                  <div className="text-minecraft-gray text-sm">
                    {feature.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className={`bg-minecraft-dark/30 border-${privilege.color}/30`}>
        <CardHeader>
          <CardTitle
            className={`text-${privilege.color} text-2xl flex items-center gap-2`}
          >
            <Icon name="Terminal" size={24} />
            Доступные команды
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {privilege.commands.map((command, index) => (
              <div
                key={index}
                className="bg-minecraft-darker/50 p-3 rounded-lg"
              >
                <code className="text-minecraft-green font-mono text-sm">
                  {command}
                </code>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-minecraft-darker/30 rounded-lg">
            <h4 className="text-white font-semibold mb-2">
              Важная информация:
            </h4>
            <ul className="text-minecraft-gray text-sm space-y-1">
              <li>• Привилегия действует {privilege.duration}</li>
              <li>• Возможно продление до окончания срока</li>
              <li>
                • При покупке более высокого статуса - автоматическое продление
              </li>
              <li>• Возврат средств только при технических проблемах</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
