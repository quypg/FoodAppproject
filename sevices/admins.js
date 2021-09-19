const users =[
    {id: 1,username:'admin@gmail.com',password:'admin123'}
]

exports.login = function login(username){
    const user = users.filter(us => us.username == username)[0] || null;
    return user
}