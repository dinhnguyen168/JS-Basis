//Promise

var users = [
    {
        id: 1,
        name: "Kien Dam",
    },
    {
        id: 2,
        name: "Son Dang",
    },
    {
        id: 3,
        name: "Canh Dinh",
    },
];

var comment = [
    {
        id: 1,
        user_id: 1,
        content: "Anh Son chua ra video :(",
    },
    {
        id: 2,
        user_id: 2,
        content: "Vua ra xong em oi.",
    },
];

//1. Lay comment
//2. Tu comment thi lay ra user_id
//3. Tu user_id thi lay ra user

// Fake API:
function getComment() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve();
        }, 1000);
    });
}

function getUsersByIds(userIds) {
    return new Promise(function (resolve) {
        var result = users.filter(function (user_id) {
            return userIds.include(user_id);
        });

        setTimeout(function () {
            return result;
        }, 1000);
    }, 1000);
}

// getComment().then(function (comments) {
//   var userIds = comments.map(function (comment) {
//     return comments.include(comment.user_id);
//   });

//   console.log(userIds);
// });
