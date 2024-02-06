const connectMongoDB = require('../../../../../libs/connect');
const Racks = require('../../../../../models/storage');
const Inout = require('../../../../../models/inout');
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    try {
        await connectMongoDB();
        const bin = await Racks.findOne({pallete: "BIN 1"});  
        const inOut = await Inout.find({ location: '', bin: 1 }); 
        
        var qty = bin.qty;
        var arrayQty = [];
        var nowItem;
        for(var i = 1; i <= qty; i++) {
            var j = inOut.find(function(e) {
                return e.racks == i
            })
            var name = j ? j.name : '';
            nowItem = {racks: i, item: name}
            arrayQty.push(nowItem);
        }
        return NextResponse.json({arrayQty});
        
    } catch (error) {
        var Er = `handling error: ${error.message}`;
        return NextResponse.json({Er});
        
    }


}