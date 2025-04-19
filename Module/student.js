const myName = () => {
    return "My name is Humayra Adiba";
}

const myAge = () => {
    return "I am 15 years old";
}

const myHobby = () => {
    return "I love to go crazy with my code";
}    

// exports.myName = myName;
// exports.myAge = myAge;
// exports.myHobby = myHobby; 

module.exports = {
    myName,
    myAge,
    myHobby
}