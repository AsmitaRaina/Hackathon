const bcrypt = require("bcryptjs")

const companies = [{
    name : 'Google',
    hrProfile : {
        name : 'googleHR',
        email : 'google@gmail.com',
        password : bcrypt.hashSync('google',10)
    },

    jobProifle : {
        jobDescription : 'Software Developer Engineer',
        branches : ['ce','it'],
        mincgpa : 7,
        ctc : 40,
        pptDate : '1/8/2021',
        oaDate : '10/8/2021',
    },
    year : {
        interestedStudents : ["63c18c6024fbf893730aa7f0","63c18c6024fbf893730aa7f4","63c18c6024fbf893730aa7f8","63c18c6024fbf893730aa7fc","63c18c6024fbf893730aa800","63c18c6024fbf893730aa804","63c18c6024fbf893730aa808","63c18c6024fbf893730aa80c","63c18c6024fbf893730aa810","63c18c6024fbf893730aa814"],
        appliedStudents : ["63c18c6024fbf893730aa7f0","63c18c6024fbf893730aa7f4","63c18c6024fbf893730aa7f8","63c18c6024fbf893730aa7fc","63c18c6024fbf893730aa800","63c18c6024fbf893730aa804","63c18c6024fbf893730aa808","63c18c6024fbf893730aa80c","63c18c6024fbf893730aa810","63c18c6024fbf893730aa814"],
        round1Students :  ["63c18c6024fbf893730aa7f0","63c18c6024fbf893730aa7f4","63c18c6024fbf893730aa7f8","63c18c6024fbf893730aa7fc","63c18c6024fbf893730aa800","63c18c6024fbf893730aa804","63c18c6024fbf893730aa808","63c18c6024fbf893730aa80c","63c18c6024fbf893730aa810","63c18c6024fbf893730aa814"],
        round2Students :  ["63c18c6024fbf893730aa7f0","63c18c6024fbf893730aa7f4","63c18c6024fbf893730aa7f8","63c18c6024fbf893730aa7fc","63c18c6024fbf893730aa800","63c18c6024fbf893730aa804","63c18c6024fbf893730aa808","63c18c6024fbf893730aa80c","63c18c6024fbf893730aa810","63c18c6024fbf893730aa814"],
        selectedStudents :  ["63c18c6024fbf893730aa7f0","63c18c6024fbf893730aa7f4","63c18c6024fbf893730aa7f8","63c18c6024fbf893730aa7fc","63c18c6024fbf893730aa800","63c18c6024fbf893730aa804","63c18c6024fbf893730aa808","63c18c6024fbf893730aa80c","63c18c6024fbf893730aa810","63c18c6024fbf893730aa814"],
    }
},
{
    name : 'Microsoft',
    hrProfile : {
        name : 'microsoftHR',
        email : 'microsoft@gmail.com',
        password : bcrypt.hashSync('microsoft',10)
    },

    jobProifle : {
        jobDescription : 'Software Developer Engineer',
        branches : ['ce','it'],
        mincgpa : 8,
        ctc : 35,
        pptDate : '2/11/2021',
        oaDate : '9/11/2021',
    },
    year : {
        interestedStudents : ["63c18c6024fbf893730aa7f0","63c18c6024fbf893730aa7f4","63c18c6024fbf893730aa7f8","63c18c6024fbf893730aa7fc","63c18c6024fbf893730aa800","63c18c6024fbf893730aa804","63c18c6024fbf893730aa808","63c18c6024fbf893730aa80c","63c18c6024fbf893730aa810","63c18c6024fbf893730aa814"],
        appliedStudents : ["63c18c6024fbf893730aa7f0","63c18c6024fbf893730aa7f4","63c18c6024fbf893730aa7f8","63c18c6024fbf893730aa7fc","63c18c6024fbf893730aa800","63c18c6024fbf893730aa804","63c18c6024fbf893730aa808","63c18c6024fbf893730aa80c","63c18c6024fbf893730aa810","63c18c6024fbf893730aa814"],
        round1Students :  ["63c18c6024fbf893730aa7f0","63c18c6024fbf893730aa7f4","63c18c6024fbf893730aa7f8","63c18c6024fbf893730aa7fc","63c18c6024fbf893730aa800","63c18c6024fbf893730aa804","63c18c6024fbf893730aa808","63c18c6024fbf893730aa80c","63c18c6024fbf893730aa810","63c18c6024fbf893730aa814"],
        round2Students :  ["63c18c6024fbf893730aa7f0","63c18c6024fbf893730aa7f4","63c18c6024fbf893730aa7f8","63c18c6024fbf893730aa7fc","63c18c6024fbf893730aa800","63c18c6024fbf893730aa804","63c18c6024fbf893730aa808","63c18c6024fbf893730aa80c","63c18c6024fbf893730aa810","63c18c6024fbf893730aa814"],
        selectedStudents :  ["63c18c6024fbf893730aa7f0","63c18c6024fbf893730aa7f4","63c18c6024fbf893730aa7f8","63c18c6024fbf893730aa7fc","63c18c6024fbf893730aa800","63c18c6024fbf893730aa804","63c18c6024fbf893730aa808","63c18c6024fbf893730aa80c","63c18c6024fbf893730aa810","63c18c6024fbf893730aa814"],
    }
},
{
    name : 'Meta',
    hrProfile : {
        name : 'MetaHR',
        email : 'meta@gmail.com',
        password : bcrypt.hashSync('meta',10)
    },

    year : {
        interestedStudents : ["63c18c6024fbf893730aa7f0","63c18c6024fbf893730aa7f4","63c18c6024fbf893730aa7f8","63c18c6024fbf893730aa7fc","63c18c6024fbf893730aa800","63c18c6024fbf893730aa804","63c18c6024fbf893730aa808","63c18c6024fbf893730aa80c","63c18c6024fbf893730aa810","63c18c6024fbf893730aa814"],
        appliedStudents : ["63c18c6024fbf893730aa7f0","63c18c6024fbf893730aa7f4","63c18c6024fbf893730aa7f8","63c18c6024fbf893730aa7fc","63c18c6024fbf893730aa800","63c18c6024fbf893730aa804","63c18c6024fbf893730aa808","63c18c6024fbf893730aa80c","63c18c6024fbf893730aa810","63c18c6024fbf893730aa814"],
        round1Students :  ["63c18c6024fbf893730aa7f0","63c18c6024fbf893730aa7f4","63c18c6024fbf893730aa7f8","63c18c6024fbf893730aa7fc","63c18c6024fbf893730aa800","63c18c6024fbf893730aa804","63c18c6024fbf893730aa808","63c18c6024fbf893730aa80c","63c18c6024fbf893730aa810","63c18c6024fbf893730aa814"],
        round2Students :  ["63c18c6024fbf893730aa7f0","63c18c6024fbf893730aa7f4","63c18c6024fbf893730aa7f8","63c18c6024fbf893730aa7fc","63c18c6024fbf893730aa800","63c18c6024fbf893730aa804","63c18c6024fbf893730aa808","63c18c6024fbf893730aa80c","63c18c6024fbf893730aa810","63c18c6024fbf893730aa814"],
        selectedStudents :  ["63c18c6024fbf893730aa7f0","63c18c6024fbf893730aa7f4","63c18c6024fbf893730aa7f8","63c18c6024fbf893730aa7fc","63c18c6024fbf893730aa800","63c18c6024fbf893730aa804","63c18c6024fbf893730aa808","63c18c6024fbf893730aa80c","63c18c6024fbf893730aa810","63c18c6024fbf893730aa814"],
    }
},

{
    name : 'Apple',
    hrProfile : {
        name : 'AppleHR',
        email : 'apple@gmail.com',
        password : bcrypt.hashSync('apple',10)
    },

    jobProifle : {
        jobDescription : 'Software Design Engineer',
        branches : ['ce','it'],
        mincgpa : 9,
        ctc : 50,
        pptDate : '11/10/2022',
        oaDate : '4/10/2022',
    },
    year : {
        interestedStudents : ["63c18c6024fbf893730aa7f0","63c18c6024fbf893730aa7f4","63c18c6024fbf893730aa7f8","63c18c6024fbf893730aa7fc","63c18c6024fbf893730aa800","63c18c6024fbf893730aa804","63c18c6024fbf893730aa808","63c18c6024fbf893730aa80c","63c18c6024fbf893730aa810","63c18c6024fbf893730aa814"],
        appliedStudents : ["63c18c6024fbf893730aa7f0","63c18c6024fbf893730aa7f4","63c18c6024fbf893730aa7f8","63c18c6024fbf893730aa7fc","63c18c6024fbf893730aa800","63c18c6024fbf893730aa804","63c18c6024fbf893730aa808","63c18c6024fbf893730aa80c","63c18c6024fbf893730aa810","63c18c6024fbf893730aa814"],
        round1Students :  ["63c18c6024fbf893730aa7f0","63c18c6024fbf893730aa7f4","63c18c6024fbf893730aa7f8","63c18c6024fbf893730aa7fc","63c18c6024fbf893730aa800","63c18c6024fbf893730aa804","63c18c6024fbf893730aa808","63c18c6024fbf893730aa80c","63c18c6024fbf893730aa810","63c18c6024fbf893730aa814"],
        round2Students :  ["63c18c6024fbf893730aa7f0","63c18c6024fbf893730aa7f4","63c18c6024fbf893730aa7f8","63c18c6024fbf893730aa7fc","63c18c6024fbf893730aa800","63c18c6024fbf893730aa804","63c18c6024fbf893730aa808","63c18c6024fbf893730aa80c","63c18c6024fbf893730aa810","63c18c6024fbf893730aa814"],
        selectedStudents :  ["63c18c6024fbf893730aa7f0","63c18c6024fbf893730aa7f4","63c18c6024fbf893730aa7f8","63c18c6024fbf893730aa7fc","63c18c6024fbf893730aa800","63c18c6024fbf893730aa804","63c18c6024fbf893730aa808","63c18c6024fbf893730aa80c","63c18c6024fbf893730aa810","63c18c6024fbf893730aa814"],
    }
},

{
    name : 'Amazon',
    hrProfile : {
        name : 'AmazonHR',
        email : 'amazon@gmail.com',
        password : bcrypt.hashSync('amazon',10)
    },

    jobProifle : {
        jobDescription : 'Content Creator',
        branches : ['ce','it'],
        mincgpa : 9.5,
        ctc : 30,
        pptDate : "9/10/2022",
        oaDate : "3/10/2022",
    },
    year : {
        interestedStudents : ["63c18c6024fbf893730aa7f0","63c18c6024fbf893730aa7f4","63c18c6024fbf893730aa7f8","63c18c6024fbf893730aa7fc","63c18c6024fbf893730aa800","63c18c6024fbf893730aa804","63c18c6024fbf893730aa808","63c18c6024fbf893730aa80c","63c18c6024fbf893730aa810","63c18c6024fbf893730aa814"],
        appliedStudents : ["63c18c6024fbf893730aa7f0","63c18c6024fbf893730aa7f4","63c18c6024fbf893730aa7f8","63c18c6024fbf893730aa7fc","63c18c6024fbf893730aa800","63c18c6024fbf893730aa804","63c18c6024fbf893730aa808","63c18c6024fbf893730aa80c","63c18c6024fbf893730aa810","63c18c6024fbf893730aa814"],
        round1Students :  ["63c18c6024fbf893730aa7f0","63c18c6024fbf893730aa7f4","63c18c6024fbf893730aa7f8","63c18c6024fbf893730aa7fc","63c18c6024fbf893730aa800","63c18c6024fbf893730aa804","63c18c6024fbf893730aa808","63c18c6024fbf893730aa80c","63c18c6024fbf893730aa810","63c18c6024fbf893730aa814"],
        round2Students :  ["63c18c6024fbf893730aa7f0","63c18c6024fbf893730aa7f4","63c18c6024fbf893730aa7f8","63c18c6024fbf893730aa7fc","63c18c6024fbf893730aa800","63c18c6024fbf893730aa804","63c18c6024fbf893730aa808","63c18c6024fbf893730aa80c","63c18c6024fbf893730aa810","63c18c6024fbf893730aa814"],
        selectedStudents :  ["63c18c6024fbf893730aa7f0","63c18c6024fbf893730aa7f4","63c18c6024fbf893730aa7f8","63c18c6024fbf893730aa7fc","63c18c6024fbf893730aa800","63c18c6024fbf893730aa804","63c18c6024fbf893730aa808","63c18c6024fbf893730aa80c","63c18c6024fbf893730aa810","63c18c6024fbf893730aa814"],
    }
},

]


module.exports = companies
