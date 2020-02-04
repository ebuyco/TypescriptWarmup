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

const person = {
    name: 'Juric',
    age: 21,
    hobbies: ['Sports', 'Cooking'],
    role: 4
};



// person.role.push('admin');
// person.role[1] = 10;

// person.role = [0, 'admin', 'user'];



let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.table(person.name);

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); /// This is wrong declaration 
}