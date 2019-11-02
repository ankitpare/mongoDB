// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = MongoClient.ObjectID;
// ----------object Destruction-------------
const {MongoClient,ObjectID} = require('mongodb')
const connectionURL = 'mongodb://127.0.0.1:27017'
// const database = 'task-manager'
   const database = 'task-manager'
   const id = new ObjectID()
//    console.log(id.getTimestamp())

MongoClient.connect(connectionURL, {useNewUrlParser:true}, (error, client)=>{
    if(error){
        console.log('unable to connect to Database')
        }
     const db = client.db(database)
    //  db.collection('users').insertOne({
    //      _id : id,
    //      name: 'Aman',
    //      age: 20
    //  })
    // const db = client.db(database)
    // db.collection('tasks').insertMany([
    //     {
    //         description:'A',
    //         completed:true
    //     },
    //     {
    //         description:'B',
    //         completed:true
    //     },
    //     {
    //         description:'C',
    //         completed:false
    //     }
    //     ///Users/akshaypare/mongodb/bin/mongod.exe --dbpath=/Users/akshaypare/mongodb-data
    // ], (error,result)=>{
    //     if(error){
    //         console.log('Error in collection that is table')
    //     }
    //     else{
    //         console.log(result.ops)
    //     }
    // })

    // db.collection('tasks').find({completed:false}).toArray((err,res)=>{
    //     console.log(res)
    // })

      // It is used to Update the documenets of collections
    // db.collection('tasks').updateMany({
    //     completed: false
    // },{
    //   $set: {
    //       completed:true
    //   }
    // }
    // ).then((data)=>{
    //     console.log(data.modifiedCount)
    // }).catch((err)=>{
    //     console.log(err)
    // })

    // it is used to delete the documents of the collections

    db.collection('tasks').deleteMany({
        _id : new ObjectID('5dbd7bae98b59227b4fafd13')
    }).then((data)=>{
        console.log(data.deletedCount)
    }).catch((err)=>{
        console.log("error")
    })
})
