var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping');

var products = [
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/e/e4/Steins%3BGate_cover_art.jpg',
        title: 'Stein Gates1',
        description: 'Esl Psy Congroo Esl Psy Congroo Esl Psy Congroo Esl Psy Congroo Esl Psy Congroo Esl Psy Congroo Esl Psy Congroo Esl Psy Congroo',
        price: 10
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/e/e4/Steins%3BGate_cover_art.jpg',
        title: 'Stein Gates2',
        description: 'Esl Psy Congroo Esl Psy Congroo Esl Psy Congroo Esl Psy Congroo Esl Psy Congroo Esl Psy Congroo Esl Psy Congroo Esl Psy Congroo',
        price: 10
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/e/e4/Steins%3BGate_cover_art.jpg',
        title: 'Stein Gates3',
        description: 'Esl Psy Congroo Esl Psy Congroo Esl Psy Congroo Esl Psy Congroo Esl Psy Congroo Esl Psy Congroo Esl Psy Congroo Esl Psy Congroo',
        price: 10
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/e/e4/Steins%3BGate_cover_art.jpg',
        title: 'Stein Gates4',
        description: 'Esl Psy Congroo Esl Psy Congroo Esl Psy Congroo Esl Psy Congroo Esl Psy Congroo Esl Psy Congroo Esl Psy Congroo Esl Psy Congroo',
        price: 10
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/e/e4/Steins%3BGate_cover_art.jpg',
        title: 'Stein Gates5',
        description: 'Esl Psy Congroo Esl Psy Congroo Esl Psy Congroo Esl Psy Congroo Esl Psy Congroo Esl Psy Congroo Esl Psy Congroo Esl Psy Congroo',
        price: 10
    })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done == products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}
