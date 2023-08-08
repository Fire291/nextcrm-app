import { prismadb } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  //check if domain is demo.nextcrm.io if yes, then return 404
  console.log(req.headers.get("host"), "req.headers");

  if (req.headers.get("host") === "demo.nextcrm.io") {
    try {
      await prismadb.users.update({
        where: {
          id: "64bb9da09771b681ec8f4a81",
        },
        data: {
          password:
            "$2a$10$3W99vHPKrmB/rAhubRzahu4Q2jbnXTvchk2LoYKNWX7TcfVeUZ8YG",
        },
      });
      return NextResponse.json({
        message: "demo.nextcrm.io password change to default successfully",
      });
    } catch (error) {
      console.log(error);
      return NextResponse.json({
        message: "demo.nextcrm.io password change to default failed",
      });
    }
  }
  return NextResponse.json("Nothing to do - not a demo.nextcrm.io domain");
}
