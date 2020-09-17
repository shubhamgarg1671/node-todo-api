const {ObjectId} = require('mongodb');

var {mongoose} = require('./../server/db/mongoose');
var {Todo} = require('./../server/models/todo');

var id = '15f61e6e2d77603802e610361';

if (!ObjectId.isValid(id)) {
    console.log('Id not valid');
}

