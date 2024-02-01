const mongoose = require('mongoose');
var dotenv = require('dotenv');
dotenv.config();
var mongoURI = process.env.mongoURI;

const mongoDB = async () => {
    try{
        await mongoose.connect(mongoURI);
        console.log("connected");
        let fetched_data = mongoose.connection.db.collection("food_items");
        let data = await fetched_data.find({}).toArray()
        // const foodCategory = await mongoose.connection.db.collection("foodCategory");
        // foodCategory.find({}).toArray(function(err,catData){
        //     if(err) console.log(err);
        //     else{
        //         global.food_items = data;
        //         global.foodCategory = catData;
        //     }
        // })

        let foodCategory = mongoose.connection.db.collection("foodCategory");
        let data1 = await foodCategory.find({}).toArray()
        global.food_items = data;
        global.foodCategory = data1;


        // global.food_items = data;
    }
    catch(err){
        console.log("---", err);
    }
    
}
module.exports = mongoDB;