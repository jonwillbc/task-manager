// CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

/*const id = new ObjectID()
console.log(id.id.length)
console.log(id.toHexString().length)*/

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)
    //*******INSERT************** */
     /*\db.collection('users').insertOne({
         name: 'Jonathan',
         age: 21
     }, (error, result) => {
         if (error) {
             return console.log('Unable to insert user')
         }

         console.log(result.ops)
     })*/

    /*db.collection('users').insertMany([
         {
             name: 'Jen',
             age: 28
         }, {
             name: 'Gunther',
             age: 27
         }
     ], (error, result) => {
         if (error) {
             return console.log('Unable to insert documents!')
         }

         console.log(result.ops)
     })*/
     
     //********CHALLENGE********** */
    /*db.collection('tasks').insertMany([
        {
            description: 'Clean the house',
            completed: true
        },{
            description: 'Renew inspection',
            completed: false
        },{
            description: 'Pot plants',
            completed: false
        }
    ], (error, result) => {
        if (error) {
            return console.log('Unable to insert tasks!')
        }

        console.log(result.ops)
    })*/

    /*********QUERY************** */
    // db.collection('users').findOne({ _id: new ObjectID("616cc0ecb8703263e8defbbd") }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({ age: 27 }).toArray((error, users) => {
    //     console.log(users)
    // })

    /****CHALLENGE******** */
    /*db.collection('tasks').findOne({ _id: new ObjectID("616cbececc489430d465a9a2") }, (error, task) => {
        console.log(task)
    })

    db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
        console.log(tasks)
    })*/

    /********UPDATE********** */
     /*db.collection('users').updateOne({
         _id: new ObjectID("616cbb974cdd95287cb8bf06")
     }, {
         $inc: {
             age: 1
         }
     }).then((result) => {
         console.log(result)
     }).catch((error) => {
         console.log(error)
     })*/

    /*****CHALLENGE**** */
    /*db.collection('tasks').updateMany({
        completed: false
    }, {
        $set: {
            completed: true
        }
    }).then((result) => {
        console.log(result.modifiedCount)
    }).catch((error) => {
        console.log(error)
    })*/

    /*******DELETE********** */
     /*db.collection('users').deleteMany({
         age: 22
     }).then((result) => {
         console.log(result)
     }).catch((error) => {
         console.log(error)
     })*/

    db.collection('tasks').deleteOne({
        description: "Clean the house"
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})