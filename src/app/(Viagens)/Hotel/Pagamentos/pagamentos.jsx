"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// rota de pagamentos da rota hotel

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useSearchParams, useRouter } from "next/navigation";
import { DatePickerWithRange } from "@/components/date-picker/date";

export default function Pagamentos() {
  const router = useRouter(); // função que pega a rota da url
  const searchParams = useSearchParams(); // função que pega o parametro da url

  const price = searchParams.get("price"); // pesuiso pelo parametro price que será passado pela url

  const total = parseInt(price); // transformo em inteiro pois parametros todas vem como string
  return (
    <div className="flex justify-center mt-10">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Pagamento</CardTitle>
          <CardDescription>Finalize sua compra!</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-10 mb-10">
            <div className="flex justify-between">
              <div className="*:text-sm text-muted-foreground">
                <p>total selecionado: </p>
                <p>taxa: </p>
              </div>
              <div className="font-bold">
                <p>R${price}.00</p>
                <p>R$15.00</p>
              </div>
            </div>
            <div className=" flex justify-around *:font-bold">
              <p>TOTAL:</p>
              <p>R${total + 15}</p>{" "}
              {/* pega o total e soma com 15 que seria a taxa */}
            </div>
          </div>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5 gap-4">
                <Label htmlFor="name">Selecione a forma de pagamento:</Label>
                <RadioGroup
                  defaultValue="Crédito"
                  className="flex justify-around"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Crédito" id="Crédito" />
                    <Label htmlFor="Crédito">Crédito</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Débito" id="Débito" />
                    <Label htmlFor="Débito">Débito</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="flex flex-col space-y-1.5">
                <h1>detalhes do pagamento:</h1>
                <Input placeholder="Nome do cartão" />
                <Input placeholder="Numero do cartão" />
                <Input placeholder="Vencimento do cartão" />
                <Input placeholder="CVV" />
                <div>
                  <Label htmlFor="parcelas">Parcelas</Label>
                  <Select>
                    <SelectTrigger id="parcelas">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      {/* mostra o select das parcelas */}
                      <SelectItem value="1">1x s/juros</SelectItem>
                      <SelectItem value="2">2x s/juros</SelectItem>
                      <SelectItem value="3">3x s/juros</SelectItem>
                      <SelectItem value="4">4x s/juros</SelectItem>
                      <SelectItem value="5">5x s/juros</SelectItem>
                      <SelectItem value="6">6x s/juros</SelectItem>
                      <SelectItem value="7">7x s/juros</SelectItem>
                      <SelectItem value="8">8x s/juros</SelectItem>
                      <SelectItem value="9">9x s/juros</SelectItem>
                      <SelectItem value="10">10x s/juros</SelectItem>
                      <SelectItem value="11">11x s/juros</SelectItem>
                      <SelectItem value="12">12x s/juros</SelectItem>
                    </SelectContent>
                  </Select>
                  <DatePickerWithRange className="pt-4" />
                </div>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={() => router.push("/Hotel")}>
            {/*quando clicar nesse botão redireciona para a rota /hotel novamente */}
            Cancel
          </Button>
          <Button onClick={() => router.push("/sucesso")}>Pagar</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
