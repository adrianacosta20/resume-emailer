module.exports = function (app) {

    app.get('/', function (req, res) {

       res.render('form.ejs'); // load the index.ejs file
    });

};
