import { v4 as uuidv4 } from 'uuid';
import faker from 'faker';
import { admin, app, db, generateTimestamps } from './firebase';

(async () => {
  // Create an empty array for messages
  const messages = [];

  // Get messages collection
  let collectionRef = db.collection('messages');
  // Loop through the documents of the collection
  const result = await collectionRef.get().then(querySnapshot => {
    const size = querySnapshot.size;
    querySnapshot.forEach(documentSnapshot => {
      const id = documentSnapshot.id;
      messages.push({
        id,
        ...documentSnapshot.data()
      });
    });
  });
  console.log(messages);

  // 1. Add a document
  /*collectionRef.add({foo: 'bar'}).then(documentReference => {
    console.log(`Added document with name: ${documentReference.id}`);
  });*/

  // 2. Add a document
  /*let documentRef = collectionRef.doc();
  documentRef.create({foo: 'bar'}).then((res) => {
    console.log(`Document created at ${res.writeTime.toDate()}`);
  }).catch((err) => {
    console.log(`Failed to create document: ${err}`);
  });*/

  // 3. Add a document
  /*collectionRef.doc(uuidv4()).create({bar: 'foo'}).then((res) => {
    console.log(`Document created at ${res.writeTime.toDate()}`);
  }).catch((err) => {
    console.log(`Failed to create document: ${err}`);
  });*/

  // Create a Message
  const createMessage = (content, sender) => {
    // Add a document with faker
    const data = {
      content: content,
      sender: sender,
      ...generateTimestamps()
    };

    collectionRef.add(data).then(documentReference => {
      console.log(`Added document with name: ${documentReference.id}`);
    });
  };

  // Create messages via promises
  const createMessages = async (n = 20) => {
    const promises = [];
    for (let i=0; i < n;i++) {
      promises.push(createMessage(faker.lorem.paragraph(), faker.name.findName()));
    }
    return await Promise.all(promises);
  };

  await createMessages(24); 

})();