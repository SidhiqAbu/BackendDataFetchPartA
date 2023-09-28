

{

    const Users = require('../modules/users');
    const Posts = require('../modules/posts');

    module.exports.postsList = async (req,res)=>{
        let user =await Users.find();
        user.forEach(async (Element) => {
            console.log(Element.userId);
            let userId = Element.userId;
            const headers = new Headers();
            headers.append('app-id', '6514647c64575f1b114037ee');

            await fetch(`https://dummyapi.io/data/v1/user/${userId}/post`, {
                method: 'GET',
                headers: headers
            })
                .then(response => response.json())
                .then(data => {
                    data.data.forEach(async elem =>{
                        console.log(elem);
                        await Posts.create({
                            postId:elem.id,
                            image:elem.image,
                            likes:elem.likes,
                            tags:elem.tags,
                            text:elem.text,
                            publishDate:elem.publishDate,
                            owner:userId
                        })
                    });
                    console.log('Posts list');
                });
        })
        return res.redirect('/');
    }
}