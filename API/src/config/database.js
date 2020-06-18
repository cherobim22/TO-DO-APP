const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

const url = 'mongodb+srv://cherobim:cherobim@cluster0-xvfly.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(url, {useNewUrlParser: true,
    useUnifiedTopology: true});

    module.exports = mongoose;