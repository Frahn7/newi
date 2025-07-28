"use client";

import { useRouter } from "next/navigation";
import { Button } from "./components/button";
import { HomeSkeleton } from "./components/skeleton";
import { useGetArticles } from "./hooks/useGetArticles";
import { ArticlesCard } from "./components/articles-card";

export default function Home() {
  const skeletonArray = [1, 2, 3, 4, 5];
  const router = useRouter();

  const { articles, error, loading } = useGetArticles();

  return (
    <div className="flex min-h-screen justify-center flex-col items-center gap-8 font-bold">
      <h1 className="py-5 text-2xl  text-orange-500 uppercase">Newi</h1>
      <div className="py-4">
        <h2 className="text-xl self-center justify-self-center">Articulos</h2>
        <div className="flex flex-row gap-4 justify-center mt-4">
          <Button
            title="Añadir articulo"
            onclick={() => router.push("/articulos")}
          />
        </div>
      </div>
      <h2 className="text-xl ">Catalogo</h2>
      <div className="flex py-5 justify-center flex-row gap-4 items-center flex-wrap">
        {loading ? (
          <div className="flex flex-row flex-wrap gap-3">
            {skeletonArray.map((e, k) => (
              <HomeSkeleton key={k} />
            ))}
          </div>
        ) : (
          articles.map((e, k) => (
            <div key={k}>
              <ArticlesCard
                name={e.name}
                price={e.price.toString()}
                id={e.id}
              />
            </div>
          ))
        )}
      </div>
      {error}
    </div>
  );
}
