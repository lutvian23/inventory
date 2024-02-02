const connectMongoDB = require('../../../../libs/connect');
const Inout = require('../../../../models/inout');
import { NextRequest, NextResponse } from "next/server";


export async function POST(request) {
    try {
        const {itemCode,name,racks} = await request.json();
        await connectMongoDB();
        await Inout.create({itemCode,name,racks}); 
        return NextResponse.json({message: 'inputed item'},{status:200});
    } catch (error) {
        console.log(`Error Handler : ${error.message}`);
        return NextResponse.json({message: 'Error Server Internal'},{status:500});
    }
}

export async function GET(){
    try {
        const items = await Inout.find();
        await connectMongoDB();
        return NextResponse.json({items},{status:200});
    } catch (error) {
        console.log(`Error Handler : ${error.message}`);
        return NextResponse.json({message: 'Error Server Internal'},{status:500});
    }
}

export async function DELETE(request){
    try{
        const id = request.nextUrl.searchParams.get("id");
        await connectMongoDB();
        await Inout.findByIdAndDelete(id);
        return NextResponse.json({message: `deleted item`},{status:200});
    }catch(error) {
        console.log(`Error Handler : ${error.message}`);
        return NextResponse.json({message: `failed delete`},{status:500})
    }
}