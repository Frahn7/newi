import { sql } from "@/service/conection-postgres";

export async function POST(request: Request) {
  const body = await request.json();

  const { newName, newPrice, id } = body;

  try {
    await sql`
    -- no-cache
    UPDATE newi
    SET name = ${newName}, price = ${newPrice}
    WHERE id = ${id}
    RETURNING *;
  `;

    return Response.json({
      message: "Artículo actualizado con exito",
    });
  } catch (error) {
    console.error("Error ejecutando la query:", error);
    return Response.json({ error: error }, { status: 500 });
  } finally {
    await sql.end();
  }
}
