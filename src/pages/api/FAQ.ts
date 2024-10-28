
import { retrieveData } from "@/lib/firebase/service";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status: boolean;
  statusCode: Number;
  data: any;
//   data: {
//     id: number;
//     pertanyaan: string;
//     jawaban: string;
//   }[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const data = await retrieveData("FAQ");
    res.status(200).json({status:true, statusCode:200, data});
}

// export async function GET(request: NextRequest){
//     const {searchParams} = new URL(request.url);
//     const id = searchParams.get("id");
//     if(id){
//         const FAQitem = await retrieveDataById("FAQ", id);
//         if(FAQitem){
//             return Next.Response.json({
//                 status:200,
//                 message: 'Success',
//                 data: FAQitem,
//             });
//         }
//         return NextResponse.json(
//            { status:404,
//             message:"Not Found",
//             data:{},}
//         )
//     }

//     const FAQitems = await retreiveData('FAQ');
//     return NextResponse.json({status:200, message: "Success", data: FAQitems})
// }
