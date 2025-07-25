"use client";

import { Input } from "@/components/ui/input";
import { useSearchParams } from "next/navigation";
import { Label } from "@/components/ui/label";

export default function Articulos() {
  const searchParams = useSearchParams();
  const search = searchParams.get("m");

  return (
    <form className="flex flex-col gap-5 justify-center py-5">
      {search === "add" ? (
        <div>
          <Label className="flex flex-col justify-center mb-5 ">
            Nombre del producto
            <Input className="w-1/2" />
          </Label>
          <Label className="flex flex-col justify-center">
            Precio del producto
            <Input className="w-1/2" />
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
    </form>
  );
}
