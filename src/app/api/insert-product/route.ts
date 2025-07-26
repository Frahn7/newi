import postgres from "postgres";

export async function POST(request: Request) {
  const sql = postgres(process.env.DATABASE_URL || "", { ssl: "verify-full" });

  const body = await request.json();

  const { name, price } = body;

  try {
    const results = await sql`
    -- no-cache
    INSERT INTO newi (name, price)
    VALUES (${name}, ${price})
    RETURNING *;
  `;

    return Response.json({
      message: "Artículo creado con éxito",
      results,
    });
  } catch (error) {
    console.error("Error ejecutando la query:", error);
    return Response.json({ error: error }, { status: 500 });
  } finally {
    await sql.end();
  }
}
