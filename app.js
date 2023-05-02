const people = [
    {username: 'Chris'},
    {username: 'Emma'},
    {username: 'Anna'},
    {username: 'Nico'}
];


function findUserByUsername(arr, username){
    return arr.find(function(val){
        return val.username === username;
    });
};



function removeUser(arr, username){
   let remove = arr.findIndex(function(val){
    return val.username === username;
   });
   
   if(remove === -1) return;
        return arr.splice(remove, 1) [0];
};