import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();

  await prisma.startup
    .create({
      data: {
        name: body.name,
        description: body.desc,
        companyId: body.cmpid,
      },
    })
    .catch(() => {
      return NextResponse.json("Error while creating the record", {
        status: 403,
      });
    });

  return NextResponse.json("Startup Created Successfully", { status: 201 });
}
