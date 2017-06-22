var app = angular.module("myApp", ["ngRoute", "ngMessages", "ngCookies"]);

app.factory("userFactory", function ($http) {
    var factory = {};
    factory.user = null;
    factory.errors = [];
    factory.register = function (user, finishedAddingUser) {
        $http.post('/api/users', user).then(function (response) {
            if (response.data.user) {
                factory.user = {
                    id: response.data.user._id,
                    username: response.data.user.username
                }
            }
            else {
                console.log("factory.register.error")
                console.log(response.data)
                factory.errors.push(response.data.error)
            }
            finishedAddingUser();
        });
    }
    factory.login = function (user, finishedLoggingUser) {
        $http.post('/api/login', user).then(function (response) {
            if (response.data.user) {
                factory.user = {
                    id: response.data.user.id,
                    username: response.data.user.username
                }
            }
            else {
                console.log("factory.login.error")
                console.log(response.data)
                factory.errors.push(response.data.error);
            }
            finishedLoggingUser();
        })
    }
    return factory;
});

app.factory("topicFactory", function ($http) {
    var factory = {};
    var topics = [];
    factory.getTopics = function (receivedTopics) {
        $http.get("/api/topics").then(function (response) {
            topics = response.data.topics;
            receivedTopics(topics);
        })
    }
    factory.addNewTopic = function (topicdata, finishedAddingTopic) {
        $http.post('/api/topics', topicdata).then(function (response) {
            finishedAddingTopic();
        }
        )
    }
    factory.showTopic = function(callback){
        $http.get('/api/topics').then(function(data){
            callback(data.data);
        });
    };
    factory.showOnetopic = function(topic_id, callback){
        $http.get('/api/topics' + topic_id).then(function(data){
            callback(data.data);
        });
    };
    factory.like = function(post, user,callback){
        $http.put('/api/like', {post: post, user: user}).then(function(data){
            callback(data.data);
    });
  };
    factory.dislike = function(post, user,callback){
        $http.put('/api/dislike', {post: post, user: user}).then(function(data){
            callback(data.data);
    });
  };
    factory.addPost = function (post, callback) {
        $http.post('/api/post', post).then(function (data) {
            callback(data.data);
        });
    };
    return factory;
})
app.factory("commentFactory", function ($http) {
    var factory = {};
    var comments = [];
    factory.getComments = function (receivedComments) {
        $http.get("/api/comments").then(function (response) {
            comments = response.data.comments;
            receivedComments(comments);

        })
    }
    factory.addNewComment = function (topicdata, finishedAddingComment) {
        $http.post('/api/comments', topictdata).then(function (response) {
            finishedAddingComment();
        }
        );
    }
    return factory;
});
//cookie
app.controller("loginController", function ($scope, $location, userFactory, $cookies) {
    $scope.register = function () {
        if ($scope.registerUser.password == $scope.registerUser.confirm) {
            userFactory.register($scope.registerUser, function () {
                if (userFactory.user) {
                    $cookies.put('loggeduserid', userFactory.user.id);
                    $cookies.put('loggedusername', userFactory.user.username);
                    var favcookie = $cookies.get('loggedusername');
                    var othercookie = $cookies.get("loggeduserid");
                    console.log(favcookie);
                    console.log(othercookie);
                    $location.url('/');
                }
                else {
                    $scope.errors = userFactory.errors;
                }
            })
        }
    }
    $scope.login = function () {
        userFactory.login($scope.logindata, function () {
            if (userFactory.user) {
                $cookies.put('loggeduserid', userFactory.user.id);
                $cookies.put('loggedusername', userFactory.user.username);
                $location.url('/');
            }
            else {
                $scope.errors = userFactory.errors;
            }
        })
    }
});

app.controller("homeController", function ($scope, $location, userFactory, topicFactory, commentFactory, $cookies, $route) {
    $scope.user = {};
    //TODO: $scope.errors
    var logincookie = $cookies.get("loggeduserid");
    if (!logincookie) {
        $location.url("/login");
    } else {
        var id = $cookies.get("loggeduserid");
        var name = $cookies.get("loggedusername");
        $scope.user = { id: id, username: name };
        topicFactory.getTopics(function (topics) {
            $scope.topics = topics;
        })
        commentFactory.getComments(function (comments) {
            $scope.comments = comments;
        })
        $scope.logout = function () {
            console.log("logout");
            $cookies.remove("loggeduserid");
            $cookies.remove("loggedusername");
            $location.url("/login");
        }
        $scope.addNewTopic = function () {
            var newtopicdata = {
                topicName: $scope.topic.name,
                topicDescription: $scope.topic.description,
                topicCategory: $scope.topic.category,
                _user: $scope.user.id
            };
            topicFactory.addNewTopic(newtopicdata, function () {
                $scope.newtopic = {};
            })
            $route.reload();
        }
        $scope.showTopic = function(){
            topicFactory.showTopic(function(data){
                console.log(data);
                $scope.topics = data.topic;
            })
        }
        $scope.showTopic();

        $scope.addComment = function (topicidfrompage, newcomment) {
            var newcommentdata = {
                commentText: newcomment.commenttext,
                _user: $scope.user.id,
                _topic: topicidfrompage
            };
            commentFactory.addNewComment(newcommentdata, function () {
                $scope.newcomment = {};
            })
            $route.reload();
        }
    }
});

app.controller('profileController', function($scope, dashboardFactory, $location, $cookies, $routeParams){
  $scope.logout = function(){ //logout functionality
    $cookies.remove('username')
    $cookies.remove('id')
    $location.url('/')
  }
  $scope.profile_id = $routeParams.id
  $scope.showUser = function(){
    dashboardFactory.showUser($scope.profile_id, function(data){
      if(data.err){
        consolelog(data.err) //provides errors if any exist.
      }
      else{
        console.log(data.user) //otherwise creates the user.
      $scope.user = data.user;
      }
    });
  }
  $scope.showUser();
});

app.controller('topicController', function($scope, dashboardFactory, $location, $cookies, $routeParams){
  $scope.topic_id = $routeParams.id;
  $scope.user_id = $cookies.get('id');
  $scope.user_username = $cookies.get('username');
  $scope.logout = function(){ //basic logout, clears cookies.
    $cookies.remove('username')
    $cookies.remove('id')
    $location.url('/')
  }
  $scope.showOneTopic = function(){ //connects with the factory to show a topic.
    factory.showOneTopic($scope.topic_id, function(data){
      if(data.err){
        console.log(data.err); //displays any errors
      }
      else{
        $scope.topic = data.topic;//else sends the topic.
      };
    });
  };
  $scope.showOneTopic();
  $scope.addPost = function(){ //connects with the factory to add a post to a topic.
    $scope.post.user = $scope.user_id;
    $scope.post.username = $scope.user_username;
    $scope.post.topic = $scope.topic_id;
    factory.addPost($scope.post, function(data){
      if(data.err){
        console.log(data.err); //displays any errors
      }
      else{
        $scope.post = {};
        $scope.showOneTopic(); //else sends the post.
      };
    });
  };

  $scope.like = function(post_id){
    factory.like(post_id,$scope.user_id, function(data){ //connects the likes to the factory
      if(data.err){
        console.log(data.err) // logs any errors
      }
      else{
        console.log(data.like)
        $scope.showOneTopic();// else adds to scope.
      }
    });
  };
  $scope.dislike = function(post_id){
    factory.dislike(post_id,$scope.user_id, function(data){ //connects the dislikes to the factory
      if(data.err){
        console.log(data.err) //logs any errors
      }
      else{
        console.log(data.dislike)
        $scope.showOneTopic(); // else adds to scope
      }
    });
  }
});

app.config(function ($routeProvider) {
    $routeProvider
        .when("/login", {
            templateUrl: "/partials/login.html",
            controller: "loginController",
        })
        .when("/", {
            templateUrl: "/partials/home.html",
            controller: "homeController",
        })
        .when("/profile/:id", {
            templateUrl: "/partials/profile.html",
            controller: "profileController",
        })
        .when("/topic/:id", {
            templateUrl: "/partials/topic.html",
            controller: "topicController",
        })
        .otherwise("/");
});
