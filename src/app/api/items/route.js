const connectMongoDB = require('../../../../libs/connect')
const Item = require('../../../../models/item');
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    try {   
        const items = await Item.find();
        await connectMongoDB();
        return NextResponse.json({items},{status:200});
    } catch (error) {
        console.log(`handling error : ${error.message}`)
        return NextResponse.json({message: 'error server internal'},{status:500});
    }
}

export async function POST(request) {
    try {
        const {itemCode,name,bin,racks} = await request.json()
        await connectMongoDB();
        await Item.create({itemCode,name,bin,racks});
        return NextResponse.json({message: 'Items Created'},{status:200})
    } catch (error) {
        console.log(`handling error : ${error.message}`)
        return NextResponse.json({message: 'Fail Create'},{status:500});
    }
}

export async function DELETE(request) {
    try {
        const id = request.nextUrl.searchParams.get("id");
        if(!id) {
            console.log('id kosong bro');
            return NextResponse.json({message: 'id Kosong bro'});
        } else {
            await connectMongoDB();
            await Item.findByIdAndDelete(id);
            return NextResponse.json({message: 'item deleted'},{status:200});
        }
    } catch (error) {
        console.log(`error handling : ${error.message}`);
        return NextResponse.json({message: 'failed deleting'},{status:500});
    }
}