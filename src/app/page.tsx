import { HomeSkeleton } from "./components/skeleton";

export default function Home() {
  const skeletonArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="flex min-h-screen justify-center flex-col items-center">
      <h1 className="py-5 text-2xl font-bold text-orange-500 uppercase">
        Newi
      </h1>
      <h2>Catalogo</h2>
      <div className="flex py-5 justify-center flex-row gap-4 items-center flex-wrap">
        {skeletonArray.map((e, k) => (
          <HomeSkeleton key={k} />
        ))}
      </div>
    </div>
  );
}
