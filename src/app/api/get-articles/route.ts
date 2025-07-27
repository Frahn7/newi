import { sql } from "@/service/conection-postgres";

export async function GET() {
  try {
    const results = await sql`
    SELECT *
    FROM newi
    WHERE 1=1
  `;

    return Response.json({
      results,
    });
  } catch (error) {
    console.error("Error ejecutando la query:", error);
    return Response.json({ error: error }, { status: 500 });
  } finally {
    await sql.end();
  }
}
