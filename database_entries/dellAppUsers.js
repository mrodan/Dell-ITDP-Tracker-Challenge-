import bcrypt from 'bcryptjs';

const userEntries = [
  {
    username: 'osmith',
    fullName: 'Olivia Smith',
    password: bcrypt.hashSync('abc123', 10),
    email: 'smitho@del.com',
    mobile: '(786) 286-0026',
    department: 'Engineering',
    role: 'PM',
    quarterGoal: 3,
    position: 'Senior Manager',
  },

  {
    username: 'njohnson',
    fullName: 'Noah Johnson',
    password: bcrypt.hashSync('abc123', 10),
    email: 'johnsonn@del.com',
    mobile: '(305) 782-5984',
    department: 'Engineering',
    role: 'CL',
    quarterGoal: 3,
    position: 'Software Engineer',
  },

  {
    username: 'owilliams',
    fullName: 'Oliver Williams',
    password: bcrypt.hashSync('abc123', 10),
    email: 'williamso@del.com',
    mobile: '(786) 345-8687',
    department: 'Human Resources',
    role: 'P',
    quarterGoal: 2,
    position: 'University Recruiter',
  },

  {
    username: 'ebrown',
    fullName: 'Emma Brown',
    password: bcrypt.hashSync('abc123', 10),
    email: 'browne@del.com',
    mobile: '(786) 283-5820',
    department: 'Communications',
    role: 'P',
    quarterGoal: 2,
    position: 'Senior Media Relations',
  },

  {
    username: 'ljones',
    fullName: 'Liam Jones',
    password: bcrypt.hashSync('abc123', 10),
    email: 'lonesl@del.com',
    mobile: '(212) 515-9167',
    department: 'Digital',
    role: 'P',
    quarterGoal: 4,
    position: 'Digital Transformation',
  },
];

export default userEntries;
