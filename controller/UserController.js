
let users = [
    {
        id: 0001,
        password: '0001',
        approve: 0

    },
    {
        id: 0002,
        password: '0002',
        approve: 0
    },
    {
        id: 0003,
        password: '0003',
        approve: 0

    }
]
    


UserController = {}

UserController.logIn = async (req, res) => {
    try {
        let id = req.body.id
        let password = req.body.password
        // console.log(username , req.body.username)
       
        let user = users.find(u => u.id == id)
        let message = ''

        if (user) {
            if (user.password == password) {
                message = 'login success'
            }
            else {
                message = 'wrong password'
            }
        }
        else {
            message = 'no user'
        }

        res.json({ message, user })

    } catch (error) {
        console.log(error)
        res.json(error);
    }
}

UserController.approve = async (req, res) => {
    try {
        let id = req.body.id
        
        
        // let approve = req.body.approve
        
    } catch (error) {
        
    }
}