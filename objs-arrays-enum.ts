// const person: {
//       name: string;
//       age: number;
//     } = {
//    name: 'Juric',
//    age: 20         
// }

// const person: {
//         name: string;
//         age: number;
//         hobbies: string[];
//         role: [number, string];
// } = {
//         name: 'Juric',
//         age: 21,
//         hobbies: ['Sports', 'Cooking'],
//         role: [2, 'author']
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN = 'ADMIN ', READ_ONLY = 100 , AUTHOR = 'AUTHOR' };

const person = {
    name: 'Juric',
    age: 21,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};

// person.role.push('admin');
// person.role[1] = 10;

// person.role = [0, 'admin', 'user'];


// let favoriteActivities: string[];
let favoriteActivities: any[];
favoriteActivities = ['Sports', 5];

console.table(person.name);

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); /// This is wrong declaration 
}

if (person.role === Role.AUTHOR){
        console.log('is author')
}
