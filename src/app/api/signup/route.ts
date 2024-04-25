import connectToDB from "@/app/db";
import UserModel from "@/app/models/userModel";

export async function POST(request: Request) {
    try {
        await connectToDB()
        const { username, email, password } = await request.json()

        if (!username || !email || !password) {
            return Response.json({
                message: "Please provide all the fields"
            }, { status: 400 })
        }

        const existingUser = await UserModel.findOne({ email })

        if (existingUser) {
            return Response.json({
                success: false,
                message: "User already exists"
            }, { status: 400 })
        }

        const user = await UserModel.create({
            username,
            email,
            password
        })

        return Response.json({
            success: true,
            message: "User registered successfully",
            user
        })
    } catch (error) {
        console.log(error);
    }
}