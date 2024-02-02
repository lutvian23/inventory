const connectMongoDB = require('../../../../../libs/connect');
const Storage = require('../../../../../models/storage');
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request, {params}) {
    try {
        const {id} = params;
        if(!id) {
            console.log(`Error Handeler : ${error.message}`);    
        }

        const {newPallete: pallete, newQty: qty} = await request.json();  
        await connectMongoDB();

        await Storage.findByIdAndUpdate(id, {pallete, qty});
        return NextResponse.json({message: 'Storage Updated'},{status:200});       
    
    } catch (error) {

        console.log(`Error Handling message request : ${error.message}`);
        return NextResponse.json({message: 'Internal Server Error'},{status:500});
    }
}

export async function GET(request, {params}) {
    try {
        const {id} = params;
        await connectMongoDB();
        const fined = await Storage.findOne({_id: id});
        return NextResponse.json({message: fined},{status:200});
    } catch (error) {
        console.log(`Error Handeling : ${error.message}`);
    }
}