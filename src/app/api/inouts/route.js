const connectMongoDB = require('../../../../libs/connect');
const Inout = require('../../../../models/inout');
const Item = require('../../../../models/item');
const Storage = require('../../../../models/storage');
import { NextRequest, NextResponse } from "next/server";


export async function POST(request) {
    try {
        await connectMongoDB();
        const {itemCode} = await request.json();

        // mencari itemCode dalam item berdasarkan itemCode dari request
        const item = await Item.findOne({itemCode: itemCode});
        // validasi
        if(!item) {
            return NextResponse.json({message: 'item not found'});
        }

        const racks = item.racks;
        const bin = item.bin;
        const name = item.name;

        // mencari data dari inout berdasarkan bin dan racks  
        const searchBin = await Inout.find({bin: bin,racks: racks}); //STATUS
        if(searchBin.length === 0) {
            // kondisi jika kriteria ada dalam data Inout
            console.log("TRUE");
            const location = "";
            const rt = 0;
            await Inout.create({itemCode,name,racks,bin,location,rt});
            return NextResponse.json({message: 'item seved'});

        }else {
            // kondisi jika kriteria tidak ada dalam data Inout
            // mencari pallete bernama TEMPORARY STORAGE sumber qty
            const ts = await Storage.findOne({pallete: "TEMPORARY STORAGE"});
            const rk = await Inout.find({ location: "Temporary Storage" });
            const location = "Temporary Storage";
            const qtyTs = ts.qty;
        
            var arrayQty = [];
            var nowItem;
            // melakukan join dengan array dengan kondisi racksnya sama 
            for(var i = 1; i <= qtyTs; i++) {
                var j = rk.find(function(e) {
                    return e.rt == i
                })  
                var named = j ? j.name : '';
                nowItem = {racks: i, item: named};
                arrayQty.push(nowItem);
            }
            var filterArray = arrayQty.filter(function(x) {
                return x.item == ""
            });
   
            var racksTs = filterArray[0]
            var rt = racksTs.racks
            await Inout.create({itemCode,name,racks,bin,location,rt});
            return NextResponse.json({message: 'items has been saved'})
        }
        

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