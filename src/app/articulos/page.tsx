"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../components/button";
import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { ArrowLeftToLine } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Articulos() {
  const [loading, setLoading] = useState(false);
  const route = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    const name = (form.elements.namedItem("itemName") as HTMLInputElement)
      .value;
    const price = (form.elements.namedItem("itemPrice") as HTMLInputElement)
      .value;
    const item = { name, price };

    if (name.length > 1 && price.length > 1) {
      setLoading(true);
      fetch("/api/insert-product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      })
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          toast(data.message);
        })
        .catch((err) => {
          toast("Error");
          console.log(err);
        });
    } else toast.error("Completa los campos");
  };

  return (
    <form
      className="flex flex-col gap-5 justify-center min-h-screen"
      onSubmit={(e) => handleSubmit(e)}
    >
      <ArrowLeftToLine
        onClick={() => route.push("/")}
        className="cursor-pointer hover:text-orange-400 absolute top-2 left-2 w-7 h-7"
      />
      <div>
        <Label className="flex flex-col justify-center mb-5 ">
          Nombre del producto
          <Input className="w-1/4 bg-gray-300" name="itemName" />
        </Label>
        <Label className="flex flex-col justify-center">
          Precio del producto
          <Input className="w-1/4 bg-gray-300" name="itemPrice" />
        </Label>{" "}
      </div>
      {loading ? (
        <div className="flex justify-center">Cargando</div>
      ) : (
        <div className="flex justify-center">
          <Button title="Enviar" type={"submit"} />
        </div>
      )}
    </form>
  );
}
