const connectMongoDB = require('../../../../../libs/connect');
const Inout = require('../../../../../models/inout');
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request, {params}) {
    try {
        const {id} = params;
        const {newItemCode: itemCode, newName: name, newRacks: racks} = await request.json();
        await connectMongoDB();
        await Inout.findByIdAndUpdate(id,{itemCode,name,racks})
        return NextResponse.json({message: `updated item`},{status:200});
    } catch (error) {
        return NextResponse.json({message: `update failed`},{status:500});
    }
}

export async function GET(request, {params}) {
    try {
        const {id} = params;
        await connectMongoDB();
        const item = await Inout.findOne({_id: id});
        return NextResponse.json({message: item},{status:200});
    } catch (error) {
        cosnole.log(`Error Handling : ${error.message}`);
        return NextResponse.json({message: 'Error Internal Server'},{status:500});
    }
}