import { LogoFooter } from "./LogoFooter";

export function Footer() {
  return (
    <div className="flex lg:flex-row flex-col items-center justify-between p-4 bg-gray-900 w-full">
      <div className="flex lg:flex-row flex-col gap-6 items-center">
        <LogoFooter />
        <p className="text-gray-300">
          Rocketseat - Todos os direitos reservados
        </p>
      </div>
      <p className="text-gray-300">Políticas de privacidade</p>
    </div>
  );
}
