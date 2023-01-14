const bcrypt = require("bcryptjs")
// const users = [
//     {name: "admin" , email: "admin@strall.com" , password:bcrypt.hashSync('123456' ,10 )  , isAdmin:true},
//     {name : "sameer gupta" , email : "sameer@strall.com" , password:bcrypt.hashSync('123456', 10)},
//     {name : "user" , email : "user@user.com" , password:bcrypt.hashSync('123456', 10)},
//     {name : "user1",email : "user1@user.com" , password:bcrypt.hashSync('123456',10)}
// ]

students = [
    {
        personal : {
            id : 1910071,
            email : 'Pratap_b19@CS.vjti.ac.in',
            password : bcrypt.hashSync('19107001',10),
            name : 'Pratap',
            gender : 'male',
            dob : '2001-1-20',
            contact : 9670287939,
            batch : 2023,
            branch : 'CS',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 8035417744,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'CS',
            cgpa : 7.4,
            tenth : {
                board : 'cbse',
                percentage : 88
            },
            twelfth : {
                board : 'cbse',
                percentage : 89
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/1qJDhVlW0e05-7G9hKSXCYskLrjQDVP5L/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 1900062,
            email : 'Karuna_b19@Electronics.vjti.ac.in',
            password : bcrypt.hashSync('19007002',10),
            name : 'Karuna',
            gender : 'female',
            dob : '2001-5-4',
            contact : 1653898551,
            batch : 2023,
            branch : 'Electronics',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 3569376561,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'Electronics',
            cgpa : 8.5,
            tenth : {
                board : 'icse',
                percentage : 98
            },
            twelfth : {
                board : 'icse',
                percentage : 88
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/122RuuaFdJgIC6hMwA-2fUYbT-nhuz9Fd/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 1910023,
            email : 'Shivpoojan_b19@Mechanical.vjti.ac.in',
            password : bcrypt.hashSync('19107003',10),
            name : 'Shivpoojan',
            gender : 'male',
            dob : '2001-1-21',
            contact : 7277031027,
            batch : 2023,
            branch : 'Mechanical',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 6752441482,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'Mechanical',
            cgpa : 7.3,
            tenth : {
                board : 'cbse',
                percentage : 85
            },
            twelfth : {
                board : 'cbse',
                percentage : 82
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/1s-UWt7JP2j0ncToq9re8J2yk9pzmY8Rg/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 1900014,
            email : 'Snigdha_b19@Civil.vjti.ac.in',
            password : bcrypt.hashSync('19007004',10),
            name : 'Snigdha',
            gender : 'female',
            dob : '2001-4-11',
            contact : 8079005931,
            batch : 2023,
            branch : 'Civil',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 8997064998,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'Civil',
            cgpa : 7.1,
            tenth : {
                board : 'icse',
                percentage : 72
            },
            twelfth : {
                board : 'icse',
                percentage : 72
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/16meJ5bVNh_10eoiHvGOoXtrct_i_pO6V/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 1910055,
            email : 'Prajjwal_b19@Textile.vjti.ac.in',
            password : bcrypt.hashSync('19107005',10),
            name : 'Prajjwal',
            gender : 'male',
            dob : '2001-4-11',
            contact : 3729737321,
            batch : 2023,
            branch : 'Textile',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 3612043691,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'Textile',
            cgpa : 8.4,
            tenth : {
                board : 'cbse',
                percentage : 88
            },
            twelfth : {
                board : 'cbse',
                percentage : 92
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/1qJDhVlW0e05-7G9hKSXCYskLrjQDVP5L/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 1900086,
            email : 'Konkana_b19@IT.vjti.ac.in',
            password : bcrypt.hashSync('19007006',10),
            name : 'Konkana',
            gender : 'female',
            dob : '2001-11-13',
            contact : 2585000942,
            batch : 2023,
            branch : 'IT',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 2003683823,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'IT',
            cgpa : 9.2,
            tenth : {
                board : 'icse',
                percentage : 96
            },
            twelfth : {
                board : 'icse',
                percentage : 94
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/122RuuaFdJgIC6hMwA-2fUYbT-nhuz9Fd/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 1910077,
            email : 'Gagan_b19@CS.vjti.ac.in',
            password : bcrypt.hashSync('19107007',10),
            name : 'Gagan',
            gender : 'male',
            dob : '2001-10-16',
            contact : 4248142086,
            batch : 2023,
            branch : 'CS',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 1033208728,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'CS',
            cgpa : 7.4,
            tenth : {
                board : 'cbse',
                percentage : 93
            },
            twelfth : {
                board : 'cbse',
                percentage : 77
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/1s-UWt7JP2j0ncToq9re8J2yk9pzmY8Rg/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 1900028,
            email : 'Madhulika_b19@Mechanical.vjti.ac.in',
            password : bcrypt.hashSync('19007008',10),
            name : 'Madhulika',
            gender : 'female',
            dob : '2001-7-19',
            contact : 4980440765,
            batch : 2023,
            branch : 'Mechanical',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 2777592664,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'Mechanical',
            cgpa : 9.9,
            tenth : {
                board : 'icse',
                percentage : 77
            },
            twelfth : {
                board : 'icse',
                percentage : 72
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/16meJ5bVNh_10eoiHvGOoXtrct_i_pO6V/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 1910089,
            email : 'Shivaji_b19@IT.vjti.ac.in',
            password : bcrypt.hashSync('19107009',10),
            name : 'Shivaji',
            gender : 'male',
            dob : '2001-1-11',
            contact : 1652733262,
            batch : 2023,
            branch : 'IT',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 3307956366,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'IT',
            cgpa : 8.3,
            tenth : {
                board : 'cbse',
                percentage : 79
            },
            twelfth : {
                board : 'cbse',
                percentage : 71
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/1qJDhVlW0e05-7G9hKSXCYskLrjQDVP5L/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19000910,
            email : 'Pratima_b19@EXTC.vjti.ac.in',
            password : bcrypt.hashSync('190070010',10),
            name : 'Pratima',
            gender : 'female',
            dob : '2001-1-11',
            contact : 3738570743,
            batch : 2023,
            branch : 'EXTC',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 7010832893,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'EXTC',
            cgpa : 9.0,
            tenth : {
                board : 'icse',
                percentage : 83
            },
            twelfth : {
                board : 'icse',
                percentage : 70
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/122RuuaFdJgIC6hMwA-2fUYbT-nhuz9Fd/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19100311,
            email : 'Ramnik_b19@Electrical.vjti.ac.in',
            password : bcrypt.hashSync('191070011',10),
            name : 'Ramnik',
            gender : 'male',
            dob : '2001-3-19',
            contact : 5265937852,
            batch : 2023,
            branch : 'Electrical',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 7795819544,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'Electrical',
            cgpa : 8.1,
            tenth : {
                board : 'cbse',
                percentage : 72
            },
            twelfth : {
                board : 'cbse',
                percentage : 72
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/1s-UWt7JP2j0ncToq9re8J2yk9pzmY8Rg/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19000512,
            email : 'Maheshwari_b19@Textile.vjti.ac.in',
            password : bcrypt.hashSync('190070012',10),
            name : 'Maheshwari',
            gender : 'female',
            dob : '2001-2-27',
            contact : 1690830080,
            batch : 2023,
            branch : 'Textile',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 6686325961,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'Textile',
            cgpa : 9.6,
            tenth : {
                board : 'icse',
                percentage : 71
            },
            twelfth : {
                board : 'icse',
                percentage : 94
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/16meJ5bVNh_10eoiHvGOoXtrct_i_pO6V/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19100513,
            email : 'Paritosh_b19@Textile.vjti.ac.in',
            password : bcrypt.hashSync('191070013',10),
            name : 'Paritosh',
            gender : 'male',
            dob : '2001-5-29',
            contact : 8800616679,
            batch : 2023,
            branch : 'Textile',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 9119203501,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'Textile',
            cgpa : 9.5,
            tenth : {
                board : 'cbse',
                percentage : 75
            },
            twelfth : {
                board : 'cbse',
                percentage : 88
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/1qJDhVlW0e05-7G9hKSXCYskLrjQDVP5L/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19000514,
            email : 'Ishita_b19@Textile.vjti.ac.in',
            password : bcrypt.hashSync('190070014',10),
            name : 'Ishita',
            gender : 'female',
            dob : '2001-11-30',
            contact : 3506447165,
            batch : 2023,
            branch : 'Textile',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 8705351999,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'Textile',
            cgpa : 9.9,
            tenth : {
                board : 'icse',
                percentage : 93
            },
            twelfth : {
                board : 'icse',
                percentage : 81
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/122RuuaFdJgIC6hMwA-2fUYbT-nhuz9Fd/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19100415,
            email : 'Jagdish_b19@Production.vjti.ac.in',
            password : bcrypt.hashSync('191070015',10),
            name : 'Jagdish',
            gender : 'male',
            dob : '2001-7-19',
            contact : 5203379958,
            batch : 2023,
            branch : 'Production',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 5791138399,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'Production',
            cgpa : 7.7,
            tenth : {
                board : 'cbse',
                percentage : 70
            },
            twelfth : {
                board : 'cbse',
                percentage : 98
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/1s-UWt7JP2j0ncToq9re8J2yk9pzmY8Rg/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19000116,
            email : 'Kavita_b19@Civil.vjti.ac.in',
            password : bcrypt.hashSync('190070016',10),
            name : 'Kavita',
            gender : 'female',
            dob : '2001-6-10',
            contact : 2708780266,
            batch : 2023,
            branch : 'Civil',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 4564947560,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'Civil',
            cgpa : 8.5,
            tenth : {
                board : 'icse',
                percentage : 89
            },
            twelfth : {
                board : 'icse',
                percentage : 72
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/16meJ5bVNh_10eoiHvGOoXtrct_i_pO6V/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19100917,
            email : 'Murlidhar_b19@EXTC.vjti.ac.in',
            password : bcrypt.hashSync('191070017',10),
            name : 'Murlidhar',
            gender : 'male',
            dob : '2001-2-12',
            contact : 9602918096,
            batch : 2023,
            branch : 'EXTC',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 3726728098,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'EXTC',
            cgpa : 9.9,
            tenth : {
                board : 'cbse',
                percentage : 85
            },
            twelfth : {
                board : 'cbse',
                percentage : 77
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/1qJDhVlW0e05-7G9hKSXCYskLrjQDVP5L/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19000318,
            email : 'Draupadi_b19@Electrical.vjti.ac.in',
            password : bcrypt.hashSync('190070018',10),
            name : 'Draupadi',
            gender : 'female',
            dob : '2001-5-21',
            contact : 3147992677,
            batch : 2023,
            branch : 'Electrical',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 1005792285,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'Electrical',
            cgpa : 7.6,
            tenth : {
                board : 'icse',
                percentage : 90
            },
            twelfth : {
                board : 'icse',
                percentage : 97
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/122RuuaFdJgIC6hMwA-2fUYbT-nhuz9Fd/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19100519,
            email : 'Harshvardhan_b19@Textile.vjti.ac.in',
            password : bcrypt.hashSync('191070019',10),
            name : 'Harshvardhan',
            gender : 'male',
            dob : '2001-2-30',
            contact : 2194361800,
            batch : 2023,
            branch : 'Textile',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 9666803714,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'Textile',
            cgpa : 9.1,
            tenth : {
                board : 'cbse',
                percentage : 89
            },
            twelfth : {
                board : 'cbse',
                percentage : 85
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/1s-UWt7JP2j0ncToq9re8J2yk9pzmY8Rg/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19000920,
            email : 'Abhishree_b19@EXTC.vjti.ac.in',
            password : bcrypt.hashSync('190070020',10),
            name : 'Abhishree',
            gender : 'female',
            dob : '2001-5-7',
            contact : 5706554601,
            batch : 2023,
            branch : 'EXTC',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 6321616626,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'EXTC',
            cgpa : 7.0,
            tenth : {
                board : 'icse',
                percentage : 78
            },
            twelfth : {
                board : 'icse',
                percentage : 75
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/16meJ5bVNh_10eoiHvGOoXtrct_i_pO6V/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19100521,
            email : 'Niranjan_b19@Textile.vjti.ac.in',
            password : bcrypt.hashSync('191070021',10),
            name : 'Niranjan',
            gender : 'male',
            dob : '2001-6-31',
            contact : 6853323848,
            batch : 2023,
            branch : 'Textile',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 4427794013,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'Textile',
            cgpa : 8.4,
            tenth : {
                board : 'cbse',
                percentage : 75
            },
            twelfth : {
                board : 'cbse',
                percentage : 82
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/1qJDhVlW0e05-7G9hKSXCYskLrjQDVP5L/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19000522,
            email : 'Risha_b19@Textile.vjti.ac.in',
            password : bcrypt.hashSync('190070022',10),
            name : 'Risha',
            gender : 'female',
            dob : '2001-1-1',
            contact : 6862480338,
            batch : 2023,
            branch : 'Textile',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 6017312950,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'Textile',
            cgpa : 9.4,
            tenth : {
                board : 'icse',
                percentage : 88
            },
            twelfth : {
                board : 'icse',
                percentage : 98
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/122RuuaFdJgIC6hMwA-2fUYbT-nhuz9Fd/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19100323,
            email : 'Sundar_b19@Electrical.vjti.ac.in',
            password : bcrypt.hashSync('191070023',10),
            name : 'Sundar',
            gender : 'male',
            dob : '2001-2-3',
            contact : 6642821606,
            batch : 2023,
            branch : 'Electrical',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 6026476160,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'Electrical',
            cgpa : 7.8,
            tenth : {
                board : 'cbse',
                percentage : 88
            },
            twelfth : {
                board : 'cbse',
                percentage : 78
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/1s-UWt7JP2j0ncToq9re8J2yk9pzmY8Rg/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19000524,
            email : 'Siddhi_b19@Textile.vjti.ac.in',
            password : bcrypt.hashSync('190070024',10),
            name : 'Siddhi',
            gender : 'female',
            dob : '2001-11-10',
            contact : 7322439128,
            batch : 2023,
            branch : 'Textile',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 5482523848,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'Textile',
            cgpa : 8.1,
            tenth : {
                board : 'icse',
                percentage : 73
            },
            twelfth : {
                board : 'icse',
                percentage : 81
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/16meJ5bVNh_10eoiHvGOoXtrct_i_pO6V/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19100125,
            email : 'Pallav_b19@Civil.vjti.ac.in',
            password : bcrypt.hashSync('191070025',10),
            name : 'Pallav',
            gender : 'male',
            dob : '2001-11-18',
            contact : 8602835991,
            batch : 2023,
            branch : 'Civil',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 6956115487,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'Civil',
            cgpa : 9.5,
            tenth : {
                board : 'cbse',
                percentage : 92
            },
            twelfth : {
                board : 'cbse',
                percentage : 70
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/1qJDhVlW0e05-7G9hKSXCYskLrjQDVP5L/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19000926,
            email : 'Vibha_b19@EXTC.vjti.ac.in',
            password : bcrypt.hashSync('190070026',10),
            name : 'Vibha',
            gender : 'female',
            dob : '2001-4-17',
            contact : 8022321683,
            batch : 2023,
            branch : 'EXTC',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 8065638437,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'EXTC',
            cgpa : 7.4,
            tenth : {
                board : 'icse',
                percentage : 77
            },
            twelfth : {
                board : 'icse',
                percentage : 70
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/122RuuaFdJgIC6hMwA-2fUYbT-nhuz9Fd/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19100427,
            email : 'Dashrath_b19@Production.vjti.ac.in',
            password : bcrypt.hashSync('191070027',10),
            name : 'Dashrath',
            gender : 'male',
            dob : '2001-1-12',
            contact : 5559376889,
            batch : 2023,
            branch : 'Production',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 1276276184,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'Production',
            cgpa : 8.0,
            tenth : {
                board : 'cbse',
                percentage : 95
            },
            twelfth : {
                board : 'cbse',
                percentage : 83
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/1s-UWt7JP2j0ncToq9re8J2yk9pzmY8Rg/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19000428,
            email : 'Maheshwari_b19@Production.vjti.ac.in',
            password : bcrypt.hashSync('190070028',10),
            name : 'Maheshwari',
            gender : 'female',
            dob : '2001-10-21',
            contact : 5081111972,
            batch : 2023,
            branch : 'Production',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 4753148350,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'Production',
            cgpa : 9.5,
            tenth : {
                board : 'icse',
                percentage : 93
            },
            twelfth : {
                board : 'icse',
                percentage : 81
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/16meJ5bVNh_10eoiHvGOoXtrct_i_pO6V/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19100629,
            email : 'Vishnukant_b19@Electronics.vjti.ac.in',
            password : bcrypt.hashSync('191070029',10),
            name : 'Vishnukant',
            gender : 'male',
            dob : '2001-1-2',
            contact : 6097004430,
            batch : 2023,
            branch : 'Electronics',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 5383994771,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'Electronics',
            cgpa : 8.8,
            tenth : {
                board : 'cbse',
                percentage : 95
            },
            twelfth : {
                board : 'cbse',
                percentage : 90
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/1qJDhVlW0e05-7G9hKSXCYskLrjQDVP5L/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19000730,
            email : 'Foolkumari_b19@CS.vjti.ac.in',
            password : bcrypt.hashSync('190070030',10),
            name : 'Foolkumari',
            gender : 'female',
            dob : '2001-5-8',
            contact : 3399342929,
            batch : 2023,
            branch : 'CS',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 6375969801,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'CS',
            cgpa : 7.4,
            tenth : {
                board : 'icse',
                percentage : 81
            },
            twelfth : {
                board : 'icse',
                percentage : 91
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/122RuuaFdJgIC6hMwA-2fUYbT-nhuz9Fd/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19100131,
            email : 'Rohit_b19@Civil.vjti.ac.in',
            password : bcrypt.hashSync('191070031',10),
            name : 'Rohit',
            gender : 'male',
            dob : '2001-6-15',
            contact : 6420821261,
            batch : 2023,
            branch : 'Civil',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 9472339815,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'Civil',
            cgpa : 8.9,
            tenth : {
                board : 'cbse',
                percentage : 88
            },
            twelfth : {
                board : 'cbse',
                percentage : 70
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/1s-UWt7JP2j0ncToq9re8J2yk9pzmY8Rg/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19000632,
            email : 'Kriti_b19@Electronics.vjti.ac.in',
            password : bcrypt.hashSync('190070032',10),
            name : 'Kriti',
            gender : 'female',
            dob : '2001-8-7',
            contact : 9302382691,
            batch : 2023,
            branch : 'Electronics',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 5356578934,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'Electronics',
            cgpa : 9.0,
            tenth : {
                board : 'icse',
                percentage : 76
            },
            twelfth : {
                board : 'icse',
                percentage : 72
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/16meJ5bVNh_10eoiHvGOoXtrct_i_pO6V/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19100633,
            email : 'Anurag_b19@Electronics.vjti.ac.in',
            password : bcrypt.hashSync('191070033',10),
            name : 'Anurag',
            gender : 'male',
            dob : '2001-7-21',
            contact : 4284105036,
            batch : 2023,
            branch : 'Electronics',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 5781563712,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'Electronics',
            cgpa : 8.1,
            tenth : {
                board : 'cbse',
                percentage : 91
            },
            twelfth : {
                board : 'cbse',
                percentage : 96
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/1qJDhVlW0e05-7G9hKSXCYskLrjQDVP5L/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19000934,
            email : 'Upasana_b19@EXTC.vjti.ac.in',
            password : bcrypt.hashSync('190070034',10),
            name : 'Upasana',
            gender : 'female',
            dob : '2001-1-14',
            contact : 2871100415,
            batch : 2023,
            branch : 'EXTC',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 6380463964,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'EXTC',
            cgpa : 7.6,
            tenth : {
                board : 'icse',
                percentage : 83
            },
            twelfth : {
                board : 'icse',
                percentage : 92
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/122RuuaFdJgIC6hMwA-2fUYbT-nhuz9Fd/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19100635,
            email : 'Soham_b19@Electronics.vjti.ac.in',
            password : bcrypt.hashSync('191070035',10),
            name : 'Soham',
            gender : 'male',
            dob : '2001-12-18',
            contact : 1126796999,
            batch : 2023,
            branch : 'Electronics',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 8944991240,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'Electronics',
            cgpa : 8.2,
            tenth : {
                board : 'cbse',
                percentage : 91
            },
            twelfth : {
                board : 'cbse',
                percentage : 98
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/1s-UWt7JP2j0ncToq9re8J2yk9pzmY8Rg/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19000836,
            email : 'Shruti_b19@IT.vjti.ac.in',
            password : bcrypt.hashSync('190070036',10),
            name : 'Shruti',
            gender : 'female',
            dob : '2001-4-12',
            contact : 6479743533,
            batch : 2023,
            branch : 'IT',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 8909297042,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'IT',
            cgpa : 9.5,
            tenth : {
                board : 'icse',
                percentage : 91
            },
            twelfth : {
                board : 'icse',
                percentage : 90
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/16meJ5bVNh_10eoiHvGOoXtrct_i_pO6V/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19100337,
            email : 'Sohan_b19@Electrical.vjti.ac.in',
            password : bcrypt.hashSync('191070037',10),
            name : 'Sohan',
            gender : 'male',
            dob : '2001-7-20',
            contact : 1085452547,
            batch : 2023,
            branch : 'Electrical',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 6876486466,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'Electrical',
            cgpa : 7.1,
            tenth : {
                board : 'cbse',
                percentage : 95
            },
            twelfth : {
                board : 'cbse',
                percentage : 90
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/1qJDhVlW0e05-7G9hKSXCYskLrjQDVP5L/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19000438,
            email : 'Prerna_b19@Production.vjti.ac.in',
            password : bcrypt.hashSync('190070038',10),
            name : 'Prerna',
            gender : 'female',
            dob : '2001-5-14',
            contact : 1378509976,
            batch : 2023,
            branch : 'Production',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 5991170232,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'Production',
            cgpa : 7.4,
            tenth : {
                board : 'icse',
                percentage : 89
            },
            twelfth : {
                board : 'icse',
                percentage : 82
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/122RuuaFdJgIC6hMwA-2fUYbT-nhuz9Fd/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19100639,
            email : 'Tejasvi_b19@Electronics.vjti.ac.in',
            password : bcrypt.hashSync('191070039',10),
            name : 'Tejasvi',
            gender : 'male',
            dob : '2001-3-17',
            contact : 1268654365,
            batch : 2023,
            branch : 'Electronics',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 2066938376,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'Electronics',
            cgpa : 7.7,
            tenth : {
                board : 'cbse',
                percentage : 93
            },
            twelfth : {
                board : 'cbse',
                percentage : 98
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/1s-UWt7JP2j0ncToq9re8J2yk9pzmY8Rg/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19000940,
            email : 'Kanta_b19@EXTC.vjti.ac.in',
            password : bcrypt.hashSync('190070040',10),
            name : 'Kanta',
            gender : 'female',
            dob : '2001-5-29',
            contact : 7404428442,
            batch : 2023,
            branch : 'EXTC',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 4957130914,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'EXTC',
            cgpa : 8.5,
            tenth : {
                board : 'icse',
                percentage : 76
            },
            twelfth : {
                board : 'icse',
                percentage : 73
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/16meJ5bVNh_10eoiHvGOoXtrct_i_pO6V/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19100341,
            email : 'Devbrat_b19@Electrical.vjti.ac.in',
            password : bcrypt.hashSync('191070041',10),
            name : 'Devbrat',
            gender : 'male',
            dob : '2001-10-20',
            contact : 1642540517,
            batch : 2023,
            branch : 'Electrical',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 6423837725,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'Electrical',
            cgpa : 7.8,
            tenth : {
                board : 'cbse',
                percentage : 94
            },
            twelfth : {
                board : 'cbse',
                percentage : 88
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/1qJDhVlW0e05-7G9hKSXCYskLrjQDVP5L/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19000242,
            email : 'Dishita_b19@Mechanical.vjti.ac.in',
            password : bcrypt.hashSync('190070042',10),
            name : 'Dishita',
            gender : 'female',
            dob : '2001-5-3',
            contact : 9351659158,
            batch : 2023,
            branch : 'Mechanical',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 4785815832,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'Mechanical',
            cgpa : 7.8,
            tenth : {
                board : 'icse',
                percentage : 82
            },
            twelfth : {
                board : 'icse',
                percentage : 88
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/122RuuaFdJgIC6hMwA-2fUYbT-nhuz9Fd/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19100443,
            email : 'Kanhaiya_b19@Production.vjti.ac.in',
            password : bcrypt.hashSync('191070043',10),
            name : 'Kanhaiya',
            gender : 'male',
            dob : '2001-12-18',
            contact : 4243706580,
            batch : 2023,
            branch : 'Production',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 1550889834,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'Production',
            cgpa : 7.0,
            tenth : {
                board : 'cbse',
                percentage : 81
            },
            twelfth : {
                board : 'cbse',
                percentage : 89
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/1s-UWt7JP2j0ncToq9re8J2yk9pzmY8Rg/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19000544,
            email : 'Vaishnavi_b19@Textile.vjti.ac.in',
            password : bcrypt.hashSync('190070044',10),
            name : 'Vaishnavi',
            gender : 'female',
            dob : '2001-11-11',
            contact : 6475086130,
            batch : 2023,
            branch : 'Textile',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 9472304598,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'Textile',
            cgpa : 9.3,
            tenth : {
                board : 'icse',
                percentage : 83
            },
            twelfth : {
                board : 'icse',
                percentage : 70
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/16meJ5bVNh_10eoiHvGOoXtrct_i_pO6V/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19100745,
            email : 'Prakhar_b19@CS.vjti.ac.in',
            password : bcrypt.hashSync('191070045',10),
            name : 'Prakhar',
            gender : 'male',
            dob : '2001-12-11',
            contact : 5266389862,
            batch : 2023,
            branch : 'CS',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 3894696126,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'CS',
            cgpa : 8.2,
            tenth : {
                board : 'cbse',
                percentage : 92
            },
            twelfth : {
                board : 'cbse',
                percentage : 88
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/1qJDhVlW0e05-7G9hKSXCYskLrjQDVP5L/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19000946,
            email : 'Sneha_b19@EXTC.vjti.ac.in',
            password : bcrypt.hashSync('190070046',10),
            name : 'Sneha',
            gender : 'female',
            dob : '2001-6-13',
            contact : 5746854344,
            batch : 2023,
            branch : 'EXTC',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 2933330976,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'EXTC',
            cgpa : 9.8,
            tenth : {
                board : 'icse',
                percentage : 89
            },
            twelfth : {
                board : 'icse',
                percentage : 94
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/122RuuaFdJgIC6hMwA-2fUYbT-nhuz9Fd/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19100347,
            email : 'Harsh_b19@Electrical.vjti.ac.in',
            password : bcrypt.hashSync('191070047',10),
            name : 'Harsh',
            gender : 'male',
            dob : '2001-8-14',
            contact : 9530830089,
            batch : 2023,
            branch : 'Electrical',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 3886608727,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'Electrical',
            cgpa : 9.1,
            tenth : {
                board : 'cbse',
                percentage : 97
            },
            twelfth : {
                board : 'cbse',
                percentage : 97
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/1s-UWt7JP2j0ncToq9re8J2yk9pzmY8Rg/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19000948,
            email : 'Awantika_b19@EXTC.vjti.ac.in',
            password : bcrypt.hashSync('190070048',10),
            name : 'Awantika',
            gender : 'female',
            dob : '2001-4-23',
            contact : 7057689200,
            batch : 2023,
            branch : 'EXTC',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 4291090789,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'EXTC',
            cgpa : 8.6,
            tenth : {
                board : 'icse',
                percentage : 84
            },
            twelfth : {
                board : 'icse',
                percentage : 84
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/16meJ5bVNh_10eoiHvGOoXtrct_i_pO6V/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19100249,
            email : 'Amarendra_b19@Mechanical.vjti.ac.in',
            password : bcrypt.hashSync('191070049',10),
            name : 'Amarendra',
            gender : 'male',
            dob : '2001-1-25',
            contact : 8508546420,
            batch : 2023,
            branch : 'Mechanical',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 5660121042,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'Mechanical',
            cgpa : 8.1,
            tenth : {
                board : 'cbse',
                percentage : 91
            },
            twelfth : {
                board : 'cbse',
                percentage : 87
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/1qJDhVlW0e05-7G9hKSXCYskLrjQDVP5L/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19000350,
            email : 'Awantika_b19@Electrical.vjti.ac.in',
            password : bcrypt.hashSync('190070050',10),
            name : 'Awantika',
            gender : 'female',
            dob : '2001-2-11',
            contact : 1609659007,
            batch : 2023,
            branch : 'Electrical',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 3150576470,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'Electrical',
            cgpa : 9.6,
            tenth : {
                board : 'icse',
                percentage : 90
            },
            twelfth : {
                board : 'icse',
                percentage : 78
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/122RuuaFdJgIC6hMwA-2fUYbT-nhuz9Fd/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19100651,
            email : 'Saras_b19@Electronics.vjti.ac.in',
            password : bcrypt.hashSync('191070051',10),
            name : 'Saras',
            gender : 'male',
            dob : '2001-2-5',
            contact : 4002246511,
            batch : 2023,
            branch : 'Electronics',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 2005733926,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'Electronics',
            cgpa : 8.3,
            tenth : {
                board : 'cbse',
                percentage : 87
            },
            twelfth : {
                board : 'cbse',
                percentage : 80
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/1s-UWt7JP2j0ncToq9re8J2yk9pzmY8Rg/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19000852,
            email : 'Rupa_b19@IT.vjti.ac.in',
            password : bcrypt.hashSync('190070052',10),
            name : 'Rupa',
            gender : 'female',
            dob : '2001-11-27',
            contact : 6621364170,
            batch : 2023,
            branch : 'IT',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 8670529278,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'IT',
            cgpa : 7.1,
            tenth : {
                board : 'icse',
                percentage : 94
            },
            twelfth : {
                board : 'icse',
                percentage : 72
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/16meJ5bVNh_10eoiHvGOoXtrct_i_pO6V/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19100253,
            email : 'Munna_b19@Mechanical.vjti.ac.in',
            password : bcrypt.hashSync('191070053',10),
            name : 'Munna',
            gender : 'male',
            dob : '2001-4-27',
            contact : 3924634273,
            batch : 2023,
            branch : 'Mechanical',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 7442453295,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'Mechanical',
            cgpa : 9.6,
            tenth : {
                board : 'cbse',
                percentage : 79
            },
            twelfth : {
                board : 'cbse',
                percentage : 80
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/1qJDhVlW0e05-7G9hKSXCYskLrjQDVP5L/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19000654,
            email : 'Yashika_b19@Electronics.vjti.ac.in',
            password : bcrypt.hashSync('190070054',10),
            name : 'Yashika',
            gender : 'female',
            dob : '2001-7-5',
            contact : 7145205571,
            batch : 2023,
            branch : 'Electronics',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 5138542825,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'Electronics',
            cgpa : 9.2,
            tenth : {
                board : 'icse',
                percentage : 91
            },
            twelfth : {
                board : 'icse',
                percentage : 91
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/122RuuaFdJgIC6hMwA-2fUYbT-nhuz9Fd/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19100855,
            email : 'Soham_b19@IT.vjti.ac.in',
            password : bcrypt.hashSync('191070055',10),
            name : 'Soham',
            gender : 'male',
            dob : '2001-9-5',
            contact : 1146350034,
            batch : 2023,
            branch : 'IT',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 8324276553,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'IT',
            cgpa : 8.9,
            tenth : {
                board : 'cbse',
                percentage : 81
            },
            twelfth : {
                board : 'cbse',
                percentage : 97
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/1s-UWt7JP2j0ncToq9re8J2yk9pzmY8Rg/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19000256,
            email : 'Seeta_b19@Mechanical.vjti.ac.in',
            password : bcrypt.hashSync('190070056',10),
            name : 'Seeta',
            gender : 'female',
            dob : '2001-10-8',
            contact : 9530552822,
            batch : 2023,
            branch : 'Mechanical',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 5838266487,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'Mechanical',
            cgpa : 9.0,
            tenth : {
                board : 'icse',
                percentage : 88
            },
            twelfth : {
                board : 'icse',
                percentage : 82
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/16meJ5bVNh_10eoiHvGOoXtrct_i_pO6V/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19100657,
            email : 'Sarvesh_b19@Electronics.vjti.ac.in',
            password : bcrypt.hashSync('191070057',10),
            name : 'Sarvesh',
            gender : 'male',
            dob : '2001-5-10',
            contact : 5195750165,
            batch : 2023,
            branch : 'Electronics',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 6957943986,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'Electronics',
            cgpa : 8.7,
            tenth : {
                board : 'cbse',
                percentage : 79
            },
            twelfth : {
                board : 'cbse',
                percentage : 79
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/1qJDhVlW0e05-7G9hKSXCYskLrjQDVP5L/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19000658,
            email : 'Swaranjali_b19@Electronics.vjti.ac.in',
            password : bcrypt.hashSync('190070058',10),
            name : 'Swaranjali',
            gender : 'female',
            dob : '2001-8-15',
            contact : 5173054349,
            batch : 2023,
            branch : 'Electronics',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 3796078497,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'Electronics',
            cgpa : 9.6,
            tenth : {
                board : 'icse',
                percentage : 89
            },
            twelfth : {
                board : 'icse',
                percentage : 97
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/122RuuaFdJgIC6hMwA-2fUYbT-nhuz9Fd/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19100759,
            email : 'Gajanand_b19@CS.vjti.ac.in',
            password : bcrypt.hashSync('191070059',10),
            name : 'Gajanand',
            gender : 'male',
            dob : '2001-1-31',
            contact : 9947534581,
            batch : 2023,
            branch : 'CS',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 8104143624,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'CS',
            cgpa : 7.9,
            tenth : {
                board : 'cbse',
                percentage : 97
            },
            twelfth : {
                board : 'cbse',
                percentage : 96
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/1s-UWt7JP2j0ncToq9re8J2yk9pzmY8Rg/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19000960,
            email : 'Kumud_b19@EXTC.vjti.ac.in',
            password : bcrypt.hashSync('190070060',10),
            name : 'Kumud',
            gender : 'female',
            dob : '2001-4-20',
            contact : 6637799611,
            batch : 2023,
            branch : 'EXTC',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 4992376267,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'EXTC',
            cgpa : 9.2,
            tenth : {
                board : 'icse',
                percentage : 71
            },
            twelfth : {
                board : 'icse',
                percentage : 94
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/16meJ5bVNh_10eoiHvGOoXtrct_i_pO6V/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19100461,
            email : 'Anurag_b19@Production.vjti.ac.in',
            password : bcrypt.hashSync('191070061',10),
            name : 'Anurag',
            gender : 'male',
            dob : '2001-5-6',
            contact : 6504257126,
            batch : 2023,
            branch : 'Production',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 5160619248,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'Production',
            cgpa : 8.3,
            tenth : {
                board : 'cbse',
                percentage : 87
            },
            twelfth : {
                board : 'cbse',
                percentage : 90
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/1qJDhVlW0e05-7G9hKSXCYskLrjQDVP5L/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19000862,
            email : 'Arunita_b19@IT.vjti.ac.in',
            password : bcrypt.hashSync('190070062',10),
            name : 'Arunita',
            gender : 'female',
            dob : '2001-8-18',
            contact : 6938079339,
            batch : 2023,
            branch : 'IT',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 2908088282,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'IT',
            cgpa : 9.9,
            tenth : {
                board : 'icse',
                percentage : 80
            },
            twelfth : {
                board : 'icse',
                percentage : 80
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/122RuuaFdJgIC6hMwA-2fUYbT-nhuz9Fd/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19100163,
            email : 'Avinash_b19@Civil.vjti.ac.in',
            password : bcrypt.hashSync('191070063',10),
            name : 'Avinash',
            gender : 'male',
            dob : '2001-8-16',
            contact : 2328942447,
            batch : 2023,
            branch : 'Civil',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 7083190534,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'Civil',
            cgpa : 7.2,
            tenth : {
                board : 'cbse',
                percentage : 92
            },
            twelfth : {
                board : 'cbse',
                percentage : 80
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/1s-UWt7JP2j0ncToq9re8J2yk9pzmY8Rg/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19000464,
            email : 'Sneha_b19@Production.vjti.ac.in',
            password : bcrypt.hashSync('190070064',10),
            name : 'Sneha',
            gender : 'female',
            dob : '2001-1-31',
            contact : 6798864292,
            batch : 2023,
            branch : 'Production',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 8231299104,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'Production',
            cgpa : 8.0,
            tenth : {
                board : 'icse',
                percentage : 92
            },
            twelfth : {
                board : 'icse',
                percentage : 75
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/16meJ5bVNh_10eoiHvGOoXtrct_i_pO6V/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19100765,
            email : 'Indresh_b19@CS.vjti.ac.in',
            password : bcrypt.hashSync('191070065',10),
            name : 'Indresh',
            gender : 'male',
            dob : '2001-6-11',
            contact : 1637923425,
            batch : 2023,
            branch : 'CS',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 7774534346,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'CS',
            cgpa : 9.4,
            tenth : {
                board : 'cbse',
                percentage : 86
            },
            twelfth : {
                board : 'cbse',
                percentage : 76
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/1qJDhVlW0e05-7G9hKSXCYskLrjQDVP5L/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19000766,
            email : 'Shweta_b19@CS.vjti.ac.in',
            password : bcrypt.hashSync('190070066',10),
            name : 'Shweta',
            gender : 'female',
            dob : '2001-2-22',
            contact : 4163216766,
            batch : 2023,
            branch : 'CS',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 5713838739,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'CS',
            cgpa : 9.5,
            tenth : {
                board : 'icse',
                percentage : 82
            },
            twelfth : {
                board : 'icse',
                percentage : 70
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/122RuuaFdJgIC6hMwA-2fUYbT-nhuz9Fd/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19100267,
            email : 'Swapnil_b19@Mechanical.vjti.ac.in',
            password : bcrypt.hashSync('191070067',10),
            name : 'Swapnil',
            gender : 'male',
            dob : '2001-10-16',
            contact : 2340712833,
            batch : 2023,
            branch : 'Mechanical',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 2924655150,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'Mechanical',
            cgpa : 7.6,
            tenth : {
                board : 'cbse',
                percentage : 90
            },
            twelfth : {
                board : 'cbse',
                percentage : 70
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/1s-UWt7JP2j0ncToq9re8J2yk9pzmY8Rg/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19000168,
            email : 'Harshita_b19@Civil.vjti.ac.in',
            password : bcrypt.hashSync('190070068',10),
            name : 'Harshita',
            gender : 'female',
            dob : '2001-6-3',
            contact : 5545838539,
            batch : 2023,
            branch : 'Civil',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 9250027855,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'Civil',
            cgpa : 7.1,
            tenth : {
                board : 'icse',
                percentage : 75
            },
            twelfth : {
                board : 'icse',
                percentage : 98
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/16meJ5bVNh_10eoiHvGOoXtrct_i_pO6V/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19100169,
            email : 'Abhigyan_b19@Civil.vjti.ac.in',
            password : bcrypt.hashSync('191070069',10),
            name : 'Abhigyan',
            gender : 'male',
            dob : '2001-7-21',
            contact : 5045175918,
            batch : 2023,
            branch : 'Civil',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 4964621459,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'Civil',
            cgpa : 9.2,
            tenth : {
                board : 'cbse',
                percentage : 91
            },
            twelfth : {
                board : 'cbse',
                percentage : 79
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/1qJDhVlW0e05-7G9hKSXCYskLrjQDVP5L/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19000970,
            email : 'Amrita_b19@EXTC.vjti.ac.in',
            password : bcrypt.hashSync('190070070',10),
            name : 'Amrita',
            gender : 'female',
            dob : '2001-11-29',
            contact : 2218836434,
            batch : 2023,
            branch : 'EXTC',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 9665399989,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'EXTC',
            cgpa : 9.0,
            tenth : {
                board : 'icse',
                percentage : 93
            },
            twelfth : {
                board : 'icse',
                percentage : 77
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/122RuuaFdJgIC6hMwA-2fUYbT-nhuz9Fd/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19100271,
            email : 'Sheetendra_b19@Mechanical.vjti.ac.in',
            password : bcrypt.hashSync('191070071',10),
            name : 'Sheetendra',
            gender : 'male',
            dob : '2001-5-7',
            contact : 5542433059,
            batch : 2023,
            branch : 'Mechanical',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 3253637716,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'Mechanical',
            cgpa : 8.7,
            tenth : {
                board : 'cbse',
                percentage : 70
            },
            twelfth : {
                board : 'cbse',
                percentage : 92
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/1s-UWt7JP2j0ncToq9re8J2yk9pzmY8Rg/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19000672,
            email : 'Pratyusha_b19@Electronics.vjti.ac.in',
            password : bcrypt.hashSync('190070072',10),
            name : 'Pratyusha',
            gender : 'female',
            dob : '2001-2-13',
            contact : 7467452431,
            batch : 2023,
            branch : 'Electronics',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 4977679544,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'Electronics',
            cgpa : 9.6,
            tenth : {
                board : 'icse',
                percentage : 92
            },
            twelfth : {
                board : 'icse',
                percentage : 71
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/16meJ5bVNh_10eoiHvGOoXtrct_i_pO6V/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19100873,
            email : 'Mahavir_b19@IT.vjti.ac.in',
            password : bcrypt.hashSync('191070073',10),
            name : 'Mahavir',
            gender : 'male',
            dob : '2001-3-1',
            contact : 5584068953,
            batch : 2023,
            branch : 'IT',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 3260250182,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'IT',
            cgpa : 7.2,
            tenth : {
                board : 'cbse',
                percentage : 92
            },
            twelfth : {
                board : 'cbse',
                percentage : 75
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/1qJDhVlW0e05-7G9hKSXCYskLrjQDVP5L/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19000474,
            email : 'Vrinda_b19@Production.vjti.ac.in',
            password : bcrypt.hashSync('190070074',10),
            name : 'Vrinda',
            gender : 'female',
            dob : '2001-5-16',
            contact : 9844387752,
            batch : 2023,
            branch : 'Production',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 6010114065,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'Production',
            cgpa : 8.2,
            tenth : {
                board : 'icse',
                percentage : 79
            },
            twelfth : {
                board : 'icse',
                percentage : 95
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/122RuuaFdJgIC6hMwA-2fUYbT-nhuz9Fd/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19100375,
            email : 'Shwetank_b19@Electrical.vjti.ac.in',
            password : bcrypt.hashSync('191070075',10),
            name : 'Shwetank',
            gender : 'male',
            dob : '2001-5-20',
            contact : 5697113647,
            batch : 2023,
            branch : 'Electrical',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 9908188933,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'Electrical',
            cgpa : 8.6,
            tenth : {
                board : 'cbse',
                percentage : 90
            },
            twelfth : {
                board : 'cbse',
                percentage : 97
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/1s-UWt7JP2j0ncToq9re8J2yk9pzmY8Rg/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19000576,
            email : 'Himani_b19@Textile.vjti.ac.in',
            password : bcrypt.hashSync('190070076',10),
            name : 'Himani',
            gender : 'female',
            dob : '2001-2-17',
            contact : 4214639332,
            batch : 2023,
            branch : 'Textile',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 3372883338,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'Textile',
            cgpa : 9.6,
            tenth : {
                board : 'icse',
                percentage : 71
            },
            twelfth : {
                board : 'icse',
                percentage : 87
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/16meJ5bVNh_10eoiHvGOoXtrct_i_pO6V/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19100777,
            email : 'Premshankar_b19@CS.vjti.ac.in',
            password : bcrypt.hashSync('191070077',10),
            name : 'Premshankar',
            gender : 'male',
            dob : '2001-5-31',
            contact : 8603579002,
            batch : 2023,
            branch : 'CS',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 5545239949,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'CS',
            cgpa : 7.8,
            tenth : {
                board : 'cbse',
                percentage : 82
            },
            twelfth : {
                board : 'cbse',
                percentage : 76
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/1qJDhVlW0e05-7G9hKSXCYskLrjQDVP5L/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19000478,
            email : 'Damyanti_b19@Production.vjti.ac.in',
            password : bcrypt.hashSync('190070078',10),
            name : 'Damyanti',
            gender : 'female',
            dob : '2001-10-24',
            contact : 2986432321,
            batch : 2023,
            branch : 'Production',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 6224151227,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'Production',
            cgpa : 9.4,
            tenth : {
                board : 'icse',
                percentage : 82
            },
            twelfth : {
                board : 'icse',
                percentage : 79
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/122RuuaFdJgIC6hMwA-2fUYbT-nhuz9Fd/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19100679,
            email : 'Gyanendra_b19@Electronics.vjti.ac.in',
            password : bcrypt.hashSync('191070079',10),
            name : 'Gyanendra',
            gender : 'male',
            dob : '2001-8-21',
            contact : 6570925799,
            batch : 2023,
            branch : 'Electronics',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 5058629426,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'Electronics',
            cgpa : 8.8,
            tenth : {
                board : 'cbse',
                percentage : 94
            },
            twelfth : {
                board : 'cbse',
                percentage : 72
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/1s-UWt7JP2j0ncToq9re8J2yk9pzmY8Rg/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19000880,
            email : 'Barkha_b19@IT.vjti.ac.in',
            password : bcrypt.hashSync('190070080',10),
            name : 'Barkha',
            gender : 'female',
            dob : '2001-4-17',
            contact : 5148651833,
            batch : 2023,
            branch : 'IT',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 7606672498,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'IT',
            cgpa : 7.2,
            tenth : {
                board : 'icse',
                percentage : 91
            },
            twelfth : {
                board : 'icse',
                percentage : 84
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/16meJ5bVNh_10eoiHvGOoXtrct_i_pO6V/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19100181,
            email : 'Brijmohan_b19@Civil.vjti.ac.in',
            password : bcrypt.hashSync('191070081',10),
            name : 'Brijmohan',
            gender : 'male',
            dob : '2001-7-13',
            contact : 1979330304,
            batch : 2023,
            branch : 'Civil',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 3499846322,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'Civil',
            cgpa : 8.1,
            tenth : {
                board : 'cbse',
                percentage : 71
            },
            twelfth : {
                board : 'cbse',
                percentage : 75
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/1qJDhVlW0e05-7G9hKSXCYskLrjQDVP5L/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19000882,
            email : 'Kamini_b19@IT.vjti.ac.in',
            password : bcrypt.hashSync('190070082',10),
            name : 'Kamini',
            gender : 'female',
            dob : '2001-4-31',
            contact : 3634349573,
            batch : 2023,
            branch : 'IT',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 6452868022,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'IT',
            cgpa : 8.0,
            tenth : {
                board : 'icse',
                percentage : 85
            },
            twelfth : {
                board : 'icse',
                percentage : 95
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/122RuuaFdJgIC6hMwA-2fUYbT-nhuz9Fd/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19100183,
            email : 'Shravan_b19@Civil.vjti.ac.in',
            password : bcrypt.hashSync('191070083',10),
            name : 'Shravan',
            gender : 'male',
            dob : '2001-5-22',
            contact : 8488492317,
            batch : 2023,
            branch : 'Civil',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 7061722851,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'Civil',
            cgpa : 7.9,
            tenth : {
                board : 'cbse',
                percentage : 84
            },
            twelfth : {
                board : 'cbse',
                percentage : 91
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/1s-UWt7JP2j0ncToq9re8J2yk9pzmY8Rg/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19000784,
            email : 'Meenu_b19@CS.vjti.ac.in',
            password : bcrypt.hashSync('190070084',10),
            name : 'Meenu',
            gender : 'female',
            dob : '2001-11-19',
            contact : 7143068884,
            batch : 2023,
            branch : 'CS',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 2939743114,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'CS',
            cgpa : 7.7,
            tenth : {
                board : 'icse',
                percentage : 91
            },
            twelfth : {
                board : 'icse',
                percentage : 95
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/16meJ5bVNh_10eoiHvGOoXtrct_i_pO6V/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19100585,
            email : 'Roshan_b19@Textile.vjti.ac.in',
            password : bcrypt.hashSync('191070085',10),
            name : 'Roshan',
            gender : 'male',
            dob : '2001-11-10',
            contact : 5764289153,
            batch : 2023,
            branch : 'Textile',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 5655491853,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'Textile',
            cgpa : 7.5,
            tenth : {
                board : 'cbse',
                percentage : 72
            },
            twelfth : {
                board : 'cbse',
                percentage : 93
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/1qJDhVlW0e05-7G9hKSXCYskLrjQDVP5L/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19000486,
            email : 'Kiran_b19@Production.vjti.ac.in',
            password : bcrypt.hashSync('190070086',10),
            name : 'Kiran',
            gender : 'female',
            dob : '2001-8-2',
            contact : 7725159396,
            batch : 2023,
            branch : 'Production',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 3141125861,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'Production',
            cgpa : 9.3,
            tenth : {
                board : 'icse',
                percentage : 77
            },
            twelfth : {
                board : 'icse',
                percentage : 93
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/122RuuaFdJgIC6hMwA-2fUYbT-nhuz9Fd/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19100887,
            email : 'Govind_b19@IT.vjti.ac.in',
            password : bcrypt.hashSync('191070087',10),
            name : 'Govind',
            gender : 'male',
            dob : '2001-7-16',
            contact : 2224158105,
            batch : 2023,
            branch : 'IT',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 9850346297,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'IT',
            cgpa : 9.6,
            tenth : {
                board : 'cbse',
                percentage : 70
            },
            twelfth : {
                board : 'cbse',
                percentage : 82
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/1s-UWt7JP2j0ncToq9re8J2yk9pzmY8Rg/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19000788,
            email : 'Suhani_b19@CS.vjti.ac.in',
            password : bcrypt.hashSync('190070088',10),
            name : 'Suhani',
            gender : 'female',
            dob : '2001-2-25',
            contact : 7565820670,
            batch : 2023,
            branch : 'CS',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 3682597881,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'CS',
            cgpa : 8.1,
            tenth : {
                board : 'icse',
                percentage : 86
            },
            twelfth : {
                board : 'icse',
                percentage : 90
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/16meJ5bVNh_10eoiHvGOoXtrct_i_pO6V/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19100389,
            email : 'Nityanand_b19@Electrical.vjti.ac.in',
            password : bcrypt.hashSync('191070089',10),
            name : 'Nityanand',
            gender : 'male',
            dob : '2001-4-27',
            contact : 7693391045,
            batch : 2023,
            branch : 'Electrical',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 7420753420,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'Electrical',
            cgpa : 8.7,
            tenth : {
                board : 'cbse',
                percentage : 71
            },
            twelfth : {
                board : 'cbse',
                percentage : 85
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/1qJDhVlW0e05-7G9hKSXCYskLrjQDVP5L/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19000590,
            email : 'Shuchi_b19@Textile.vjti.ac.in',
            password : bcrypt.hashSync('190070090',10),
            name : 'Shuchi',
            gender : 'female',
            dob : '2001-3-28',
            contact : 2048278965,
            batch : 2023,
            branch : 'Textile',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 4372934035,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'Textile',
            cgpa : 9.5,
            tenth : {
                board : 'icse',
                percentage : 92
            },
            twelfth : {
                board : 'icse',
                percentage : 85
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/122RuuaFdJgIC6hMwA-2fUYbT-nhuz9Fd/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19100591,
            email : 'Sajjan_b19@Textile.vjti.ac.in',
            password : bcrypt.hashSync('191070091',10),
            name : 'Sajjan',
            gender : 'male',
            dob : '2001-6-29',
            contact : 8786099002,
            batch : 2023,
            branch : 'Textile',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 3968060557,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'Textile',
            cgpa : 8.4,
            tenth : {
                board : 'cbse',
                percentage : 79
            },
            twelfth : {
                board : 'cbse',
                percentage : 91
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/1s-UWt7JP2j0ncToq9re8J2yk9pzmY8Rg/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19000492,
            email : 'Avani_b19@Production.vjti.ac.in',
            password : bcrypt.hashSync('190070092',10),
            name : 'Avani',
            gender : 'female',
            dob : '2001-11-27',
            contact : 8137744955,
            batch : 2023,
            branch : 'Production',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 7195397745,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'Production',
            cgpa : 8.5,
            tenth : {
                board : 'icse',
                percentage : 97
            },
            twelfth : {
                board : 'icse',
                percentage : 95
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/16meJ5bVNh_10eoiHvGOoXtrct_i_pO6V/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19100393,
            email : 'Baikunth_b19@Electrical.vjti.ac.in',
            password : bcrypt.hashSync('191070093',10),
            name : 'Baikunth',
            gender : 'male',
            dob : '2001-5-10',
            contact : 2776756055,
            batch : 2023,
            branch : 'Electrical',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 3117612758,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'Electrical',
            cgpa : 9.9,
            tenth : {
                board : 'cbse',
                percentage : 83
            },
            twelfth : {
                board : 'cbse',
                percentage : 73
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/1qJDhVlW0e05-7G9hKSXCYskLrjQDVP5L/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19000694,
            email : 'Palak_b19@Electronics.vjti.ac.in',
            password : bcrypt.hashSync('190070094',10),
            name : 'Palak',
            gender : 'female',
            dob : '2001-8-1',
            contact : 4521681272,
            batch : 2023,
            branch : 'Electronics',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 2881157653,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'Electronics',
            cgpa : 8.7,
            tenth : {
                board : 'icse',
                percentage : 96
            },
            twelfth : {
                board : 'icse',
                percentage : 81
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/122RuuaFdJgIC6hMwA-2fUYbT-nhuz9Fd/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19100695,
            email : 'Harshal_b19@Electronics.vjti.ac.in',
            password : bcrypt.hashSync('191070095',10),
            name : 'Harshal',
            gender : 'male',
            dob : '2001-4-9',
            contact : 3051008583,
            batch : 2023,
            branch : 'Electronics',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 9818062091,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'Electronics',
            cgpa : 9.0,
            tenth : {
                board : 'cbse',
                percentage : 76
            },
            twelfth : {
                board : 'cbse',
                percentage : 82
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/1s-UWt7JP2j0ncToq9re8J2yk9pzmY8Rg/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19000596,
            email : 'Sundari_b19@Textile.vjti.ac.in',
            password : bcrypt.hashSync('190070096',10),
            name : 'Sundari',
            gender : 'female',
            dob : '2001-6-27',
            contact : 2710842741,
            batch : 2023,
            branch : 'Textile',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 3399477755,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'Textile',
            cgpa : 7.6,
            tenth : {
                board : 'icse',
                percentage : 94
            },
            twelfth : {
                board : 'icse',
                percentage : 75
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/16meJ5bVNh_10eoiHvGOoXtrct_i_pO6V/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19100697,
            email : 'Santosh_b19@Electronics.vjti.ac.in',
            password : bcrypt.hashSync('191070097',10),
            name : 'Santosh',
            gender : 'male',
            dob : '2001-10-10',
            contact : 8713067162,
            batch : 2023,
            branch : 'Electronics',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 1830692433,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'Electronics',
            cgpa : 8.8,
            tenth : {
                board : 'cbse',
                percentage : 71
            },
            twelfth : {
                board : 'cbse',
                percentage : 97
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/1qJDhVlW0e05-7G9hKSXCYskLrjQDVP5L/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19000898,
            email : 'Rohini_b19@IT.vjti.ac.in',
            password : bcrypt.hashSync('190070098',10),
            name : 'Rohini',
            gender : 'female',
            dob : '2001-2-11',
            contact : 9984072254,
            batch : 2023,
            branch : 'IT',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 9036799412,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'IT',
            cgpa : 7.0,
            tenth : {
                board : 'icse',
                percentage : 86
            },
            twelfth : {
                board : 'icse',
                percentage : 94
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/122RuuaFdJgIC6hMwA-2fUYbT-nhuz9Fd/view?usp=share_link',
        },
        appliedCompanies : [],
    },

    {
        personal : {
            id : 19100699,
            email : 'Lavkush_b19@Electronics.vjti.ac.in',
            password : bcrypt.hashSync('191070099',10),
            name : 'Lavkush',
            gender : 'male',
            dob : '2001-8-18',
            contact : 3419410126,
            batch : 2023,
            branch : 'Electronics',
            year : 4,
            guardianName : 'parentName',
            guardianContact : 4225083153,
        },

        academics : {
            batch : 2023,
            degree : 'btech',
            branch : 'Electronics',
            cgpa : 8.0,
            tenth : {
                board : 'cbse',
                percentage : 72
            },
            twelfth : {
                board : 'cbse',
                percentage : 84
            },
        },
        professional : {
            resume : 'https://drive.google.com/file/d/1s-UWt7JP2j0ncToq9re8J2yk9pzmY8Rg/view?usp=share_link',
        },
        appliedCompanies : [],
    },
]


module.exports = students