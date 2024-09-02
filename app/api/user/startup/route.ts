import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();

  await prisma.startup
    .create({
      data: {
        name: body.name,
        description: body.desc,
        userId: body.id,
      },
    })
    .catch(() => {
      return NextResponse.json("Error while creating the record", {
        status: 403,
      });
    });

  return NextResponse.json("Startup Created Successfully", { status: 201 });
}

export async function PUT(req: NextRequest) {
  const { id, url, name, description, type, domain, vision, mission } =
    await req.json();

  // Check if `id` and `url` are valid

  if (url) {
    if (!id || !url) {
      return NextResponse.json("Invalid input", { status: 400 });
    }
    try {
      const result = await prisma.startup.update({
        where: { id },
        data: { imageURL: url.public_id },
      });

      // Log the result for debugging
      console.log("Update result:", result);

      return NextResponse.json("Image Updated", { status: 200 });
    } catch (error) {
      console.error("Error while updating the image:", error);
      return NextResponse.json("Error while updating the image", {
        status: 500,
      });
    }
  } else {
    try {
      const result = await prisma.startup.update({
        where: { id },
        data: { name, description, type, domain, vision, mission },
      });

      console.log("Update result:", result);

      return NextResponse.json("Contents Updated", { status: 200 });
    } catch (error) {
      console.error("Error while updating the Contents:", error);
      return NextResponse.json("Error while updating the Contents", {
        status: 500,
      });
    }
  }
}
