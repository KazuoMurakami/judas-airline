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

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

let parcelas = [];

for (let i = 1; i <= 12; i++) {
  parcelas.push(i);
}

export default function page() {
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
                <p>R$200.00</p>
                <p>R$200.00</p>
              </div>
            </div>
            <div className=" flex justify-around *:font-bold">
              <p>TOTAL:</p>
              <p>R$200.00</p>
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
                      {parcelas.map((parcela) => {
                        return (
                          <SelectItem value={parcela} key={parcela}>
                            {parcela}x s/juros
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Pagar</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
