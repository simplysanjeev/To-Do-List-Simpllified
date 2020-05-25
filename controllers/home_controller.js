module.exports.home = function(request, response){
    console.log('Inside Home Controller');
    return response.render('home', {
        title : 'WELCOME TO HOME'
    });
}