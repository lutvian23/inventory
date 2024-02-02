    const connectMongoDB = require('../../../../libs/connect');
    const Storage = require('../../../../models/storage');
    import { NextRequest, NextResponse } from "next/server";

    export async function POST(request) {
        try {
            const { pallete, qty } = await request.json();
            await connectMongoDB();
            await Storage.create({ pallete, qty });
            return NextResponse.json({ message: 'Storage Created' },{status:200});
        } catch (error) {
            return NextResponse.json({ error: 'Internal Server Error' },{status:500});
        }
    }

    export async function GET() {
        try {
            await connectMongoDB();
            const storags = await Storage.find();
            return NextResponse.json({ message: storags },{status:200});
        } catch (error) {
            return NextResponse.json({ message: 'Internal Server Error' },{status:500});
        }

    }

    export async function DELETE(request) {
        try {
            const id = request.nextUrl.searchParams.get("id");
            if(!id) {
                return NextRequest.json({error: 'ID not provided'},{status:400})
            }
            await connectMongoDB();
            const deleteStorage = await Storage.findByIdAndDelete(id);
            if( !deleteStorage ) {
                return NextRequest.json({error: 'Storage not found'},{status:404})
            }
            return NextResponse.json({message: 'Storage Deleted'},{status:200})
        } catch (error) {
            console.log(`Error Handling message request : ${error.message}`);
            return NextResponse.json({message: 'Internal Server Error'},{status:500});
        }
    }

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