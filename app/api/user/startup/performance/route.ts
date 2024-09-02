import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client"; // Ensure correct import path for prisma

export async function POST(req: NextRequest) {
  try {
    const { startupId, turnOver, profit, year } = await req.json();

    // Check if all required fields are provided
    if (!startupId || !turnOver || !profit || !year) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create performance record in the database
    const performance = await prisma.performance.create({
      data: {
        startupId,
        profit: parseFloat(profit),
        turnover: parseFloat(turnOver),
        year: parseInt(year, 10),
      },
    });

    // Return success response if the record is created successfully
    return NextResponse.json(
      { message: "Performance Recorded Successfully", performance },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error while recording performance:", error);

    // Return error response in case of any issues
    return NextResponse.json(
      { message: "Error while Recording Performance" },
      { status: 500 }
    );
  }
}
