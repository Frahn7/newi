"use client";

import { useRouter } from "next/navigation";
import { Button } from "./components/button";
import { HomeSkeleton } from "./components/skeleton";

export default function Home() {
  const skeletonArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const router = useRouter();

  return (
    <div className="flex min-h-screen justify-center flex-col items-center gap-8 font-bold">
      <h1 className="py-5 text-2xl  text-orange-500 uppercase">Newi</h1>
      <div className="py-4">
        <h2 className="text-xl self-center justify-self-center">Articulos</h2>
        <div className="flex flex-row gap-4 justify-center mt-4">
          <Button
            title="Añadir articulo"
            onclick={() => router.push("/articulos?m=add")}
          />
          <Button
            title="Editar articulo"
            onclick={() => router.push("/articulos?m=edit")}
          />
        </div>
      </div>
      <h2 className="text-xl ">Catalogo</h2>
      <div className="flex py-5 justify-center flex-row gap-4 items-center flex-wrap">
        {skeletonArray.map((e, k) => (
          <HomeSkeleton key={k} />
        ))}
      </div>
    </div>
  );
}
