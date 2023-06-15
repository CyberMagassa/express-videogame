const videogames = [
{videogame: 'God of War', done: true},
{videogame: 'Overwatch 2', done: false},
{videogame: 'Diablo 4', done: false},
];

module.exports = {
    getAll: function(){
        return videogames;
    }
};