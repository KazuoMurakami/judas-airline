import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Link from "next/link";

export default function page() {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardContent className="flex flex-col items-center justify-center gap-6 p-8">
        <div className="bg-green-100 rounded-full p-4 dark:bg-green-900/20">
          <CheckIcon className="h-8 w-8 text-green-500 dark:text-green-400" />
        </div>
        <div className="text-center space-y-2">
          <CardTitle className="text-2xl font-bold">
            Pagamento efetuado!
          </CardTitle>
          <CardDescription>
            Obrigado pela sua compra! seu pedido está sendo processado e você
            recebera uma confirmação por email.
          </CardDescription>
        </div>
        <div className="flex gap-4 w-full">
          <Link
            href="/"
            className="flex-1 inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            prefetch={false}
          >
            Voltar para a pagina principal
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
