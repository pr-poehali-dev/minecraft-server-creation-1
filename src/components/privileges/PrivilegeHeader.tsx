import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export const PrivilegeHeader = () => {
  return (
    <header className="py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <Button
          variant="ghost"
          className="mb-6 text-minecraft-green hover:text-white"
          asChild
        >
          <a href="/">
            <Icon name="ArrowLeft" size={20} className="mr-2" />
            Назад на главную
          </a>
        </Button>

        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4 bg-gradient-to-r from-minecraft-green via-minecraft-orange to-minecraft-purple bg-clip-text text-transparent">
            Привилегии сервера
          </h1>
          <p className="text-xl text-minecraft-gray max-w-3xl mx-auto">
            Поддержи сервер и получи крутые возможности! Каждая привилегия дает
            уникальные функции для более комфортной игры.
          </p>
        </div>
      </div>
    </header>
  );
};
