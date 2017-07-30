/**
 * ChatController
 *
 * @description :: Server-side logic for managing chats
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    index: function (req, res, next) {

        res.view();

    },

    create: function (req, res, next) {

        Chat.create( req.params.all(), function chatCreated ( err, chatData) {

            if(err){
                return next(err);
            }

            res.redirect('/chat/room/' + chatData.id);

        })
    },


    room: function (req, res, next) {

        Chat.findOne(req.param('id')).populateAll().exec(function (err, chatData) {

            if (err) {
                return next(err);

            }

            if (!chatData) {
                return next();
            }

            console.log(chatData);

            res.view({
                chat: chatData
            });

        })

    },

};

