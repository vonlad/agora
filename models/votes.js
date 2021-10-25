const mongoose = require('mongoose')

const voteSchema = mongoose.Schema({
    user_id: String,
    publication_id: String,
    vote: String,
    commentaire_id: String ,
    commentaires_likes: Array,
    date_vote: String,

})

const voteModel = mongoose.model('votes', voteSchema);

module.exports = voteModel;