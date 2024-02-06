const connectMongoDB = require('../../../../../libs/connect');
const Items = require('../../../../../models/item');
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request, {params}) {
    try {
        const {id} = params;
        if(!id) {
            return console.log('id nya gak ada cuy')
        } else {
            const {newItemCode: itemCode, newName: name, newBin: bin, newRacks: racks} = await request.json()
            await connectMongoDB();
            await Items.findByIdAndUpdate(id,{itemCode,name,bin,racks});
            return NextResponse.json({message: 'updated item'},{status:200})
        }
    } catch (error) {
        return NextResponse.json({message: 'update fail'},{status:500})
    }
}