import mongoose, { Schema } from 'mongoose'
import bcrypt from 'bcrypt'

interface User extends Document {
    username: string,
    email: string,
    password: string
    comparePassword(password: string): Promise<boolean>
}

const userSchema: Schema<User> = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 8
    }
}, { timestamps: true })

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    this.password = await bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.comparePassword = async function (password: string) {
    return await bcrypt.compare(password, this.password)
}

const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User", userSchema);

export default UserModel