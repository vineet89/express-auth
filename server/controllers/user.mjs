import mongoose from 'mongoose'

var userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique:true },
    email: { type: String, required: true,unique:true },
    password: { type: String, required: true }
});

var User = mongoose.model('User', userSchema)

const userController = {

    createUser: async (user) => {
        let error
        let new_user = await User.create(user).catch(err => { error = err })

        if (error) {
            return {err:error}
        }

        return new_user
    }

}

export default userController
