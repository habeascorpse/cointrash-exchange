
module.exports = function(app) {

    var peopleAPI = {};
    var peopleDAO = new app.dao.peopleDAO;
    
    
    
    peopleAPI.getPeople = function(req,res) {

        if (req.user == req.params.login) {
            peopleDAO.getPeople(req.params.login,function(status) {
               if (status) {
                   res.json(status);
               }
               else {
                   res.sendStatus(500);
               }
            });
        }
        else {
            res.sendStatus(403);
        }
           
    }
    
    
    
    return peopleAPI;
}