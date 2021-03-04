import bcrypt from 'bcryptjs'

const usersTest = [
    {
        _id: "1",
        username: "ProgManager",
        fullName: "Program Manager",
        password: bcrypt.hashSync('abc123', 10),
        email: "abc@del.com",
        mobile: "1234567890",
        image: "",
        department: "Admin",
        role: "PM",
        quarterGoal: 2
    },
    {
        id_: "2",
        username: "CommLead",
        fullName: "Comm Lead",
        password: bcrypt.hashSync('abc123', 10),
        email: "abc@del.com",
        mobile: "1234567890",
        image: "",
        department: "Tech",
        role: "CL",
        quarterGoal: 2
    },
    {
        username: "user",
        fullName: "name lastName",
        password: bcrypt.hashSync('abc123', 10),
        email: "abc@del.com",
        mobile: "1234567890",
        image: "",
        department: "Tech",
        role: "P",
        quarterGoal: 2
    },
    {
        username: "user2",
        fullName: "name2 lastName2",
        password: bcrypt.hashSync('abc123', 10),
        email: "abc@del.com",
        mobile: "1234567890",
        image: "",
        department: "Sales",
        role: "P",
        quarterGoal: 2
    },
    {
        username: "user3",
        fullName: "name3 lastName3",
        password: bcrypt.hashSync('abc123', 10),
        email: "abc@del.com",
        mobile: "1234567890",
        image: "",
        department: "Marketing",
        role: "P",
        quarterGoal: 2
    }
]

export default usersTest;