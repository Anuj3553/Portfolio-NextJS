import connectToDB from "@/app/database";
import Contact from "@/app/models/Contact";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic'

export async function GET() {
    try {
        await connectToDB();
        const extractData = await Contact.find();
        if (extractData) {
            return NextResponse.json({
                success: true,
                data: extractData
            })
        }
        else{
            return NextResponse.json({
                success: false,
                message: "Something goes wrong! Please try again."
            })
        }
    } catch (e) {
        console.log(e)

        return NextResponse.json({
            success: false,
            message: 'Something went wrong! Please try again.'
        })
    }
}