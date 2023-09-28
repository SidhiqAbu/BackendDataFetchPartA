const { mongoose } = require('mongoose');


{

    const Users = require('../modules/users');
    


    module.exports.userList =async (req, res) => {
        const headers = new Headers();
        headers.append('app-id', '6514647c64575f1b114037ee');

        await fetch('https://dummyapi.io/data/v1/user', {
            method: 'GET',
            headers: headers
        })
            .then(response => response.json())
            .then(data => {
                data.data.forEach(async element => {
                    // console.log(element);
                    await Users.create({
                        userId:element.id,
                        title:element.title,
                        firstName:element.firstName,
                        lastName:element.lastName,
                        picture:element.picture
                    });
                });
            });
        console.log("user list");
        return res.redirect('/');
    }
}