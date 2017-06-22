var users = require("../controllers/users");
module.exports = function (app)
{
    app.post("/api/users", users.register);
    app.post("/api/login", users.login);
    app.post("/api/topics", topic.addNewTopic); //Our factories!!!!!
    app.get("/api/topics", topic.getTopics);
    app.get("/api/topics", topic.showTopic);
    app.get("/api/topics/:id", topic.showOneTopic);
    app.post("/api/post", topic.addPost);
    app.put("/api/dislike", topic.dislike);
    app.put("/api/like", topic.like);
    app.post("/api/comments", users.addComment);
    app.get("/api/comments", users.home);
};

