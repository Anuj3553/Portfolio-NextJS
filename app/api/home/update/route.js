import connectToDB from "@/app/database";
import Home from "@/app/models/Home";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function PUT(req) {
    try {
        await connectToDB();
        const extractData = await req.json();
        const { _id, heading, summary } = extractData;

        // Check if the document with the given _id exists
        let updateData = await Home.findOne({ _id });

        if (updateData) {
            // If the document exists, update it
            updateData = await Home.findOneAndUpdate(
                { _id },
                { heading, summary },
                { new: true } // Return the updated document
            );
            return NextResponse.json({
                success: true,
                message: 'Updated successfully',
                data: updateData
            });
        } else {
            // If the document does not exist, create a new one
            const newData = new Home({
                _id, // Ensure _id is provided and is unique
                heading,
                summary
            });
            const createdData = await newData.save();
            return NextResponse.json({
                success: true,
                message: 'Created successfully',
                data: createdData
            });
        }
    } catch (e) {
        console.error(e);
        return NextResponse.json({
            success: false,
            message: 'Something went wrong'
        });
    }
}
