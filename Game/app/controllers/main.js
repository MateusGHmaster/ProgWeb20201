function index(req,res){
    res.render("main/index", {
        titulo: "Página Principal"
    })
}

function sobre(req,res){
    res.render("main/sobre", {
        titulo: "Snake",
    })
}

function ui(req,res){
    res.render("main/ui")
}

function game(req,res){
    res.render("main/game")
}
module.exports = {index, sobre, ui, game}