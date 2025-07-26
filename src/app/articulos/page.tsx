"use client";

import { Input } from "@/components/ui/input";
import { useSearchParams } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Button } from "../components/button";
import { FormEvent } from "react";

export default function Articulos() {
  const searchParams = useSearchParams();
  const search = searchParams.get("m");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    const name = (form.elements.namedItem("itemName") as HTMLInputElement)
      .value;
    const price = (form.elements.namedItem("itemPrice") as HTMLInputElement)
      .value;
    const item = { name, price };

    console.log(JSON.stringify(item));

    fetch("/api/insert-product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <form
      className="flex flex-col gap-5 justify-center py-5"
      onSubmit={(e) => handleSubmit(e)}
    >
      {search === "add" ? (
        <div>
          <Label className="flex flex-col justify-center mb-5 ">
            Nombre del producto
            <Input className="w-1/2" name="itemName" />
          </Label>
          <Label className="flex flex-col justify-center">
            Precio del producto
            <Input className="w-1/2" name="itemPrice" />
          </Label>{" "}
        </div>
      ) : (
        <div>
          <Label className="flex flex-col justify-center mb-5">
            Editar nombre del producto
            <Input className="w-1/2" />
          </Label>
          <Label className="flex flex-col justify-center">
            Editar precio del producto
            <Input className="w-1/2" />
          </Label>
        </div>
      )}
      <Button title="Enviar" type={"submit"} />
    </form>
  );
}
