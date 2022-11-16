const user = [];
user[0] = {
    name : "Monica",
    gender : "female",
    age : 17,
    email : "monica@dingdong.com",
    favoriteColor : ["Yellow", "Pink", "White", "Purple"],
    isHavePet : "Yes",
    education : [
        {
            sd : "SD 01",
            city : "Jakarta",
            graduate : 2016,
        },
        {
            smp : "SMP 02",
            city : "Jakarta",
            graduate : 2019,
        },
        {
            sma : "SMA 03",
            city : "Tangerang",
        },
    ],
    favoriteRestaurant : ["Bento", "Sushi", "Pancake", "Eggy", "Tempura", "Bento", "Eggy", "Padang", "TTeok", "Sushi", "Sushi"],
};

user[1] = {
    name : "Wendy",
    gender : "Male",
    age : 23,
    email : "wendy@dingdong.com",
    favoriteColor : ["Blue", "Black", "Grey"],
    isHavePet : "No",
    education : [
        {
            sd : "SD 02",
            city : "Jakarta",
            graduate : 2010,
        },
        {
            smp : "SMP 03",
            city : "Bogor",
            graduate : 2013,
        },
        {
            sma : "SMA 01",
            city : "Surabaya",
            graduate : 2016,
        },
        {
            univ : "Universitas Maju",
            city : "Tangerang",
        }
    ],
    favoriteRestaurant : ["Tempura", "Bento", "Sushi", "Pancake", "Padang", "Katsu", "Geprek", "Pancake", "Eggy"],
};

console.log("Nama : " + user[1].name);
console.log("SMA : " + user[1].education[2].sma);
console.log("Kota : " + user[1].education[2].city);
console.log("Makanan Favorit : " + user[1].favoriteRestaurant[5]);

