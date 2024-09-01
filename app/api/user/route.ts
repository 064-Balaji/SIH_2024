import prisma from "@/prisma/client";
import { NextApiRequest } from "next";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest, res: NextResponse) {
  const { email, url } = await req.json();
  prisma.user
    .update({
      where: { email },
      data: { image: url.public_id },
    })
    .catch(() => NextResponse.json("Issue in image upload", { status: 500 }));
  return NextResponse.json("Image Updates", { status: 201 });
}

export async function GET(req: NextApiRequest, res: NextResponse) {
  const session = await getServerSession();
  const user = await prisma.user.findUnique({
    where: { email: session?.user.email! },
  });
  return NextResponse.json(user, { status: 200 });
}
