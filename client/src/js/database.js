import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  try {
    console.log("Updating the DB");

    const jateDb = await openDB("jate", 1);

    const tx = jateDb.transaction("jate", "readwrite");

    const store = tx.objectStore("jate");

    const request = store.put({ id: 1, data: content });

    // Get confirmation of the request.
    const result = await request;
    console.log("Updated Key:", result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  try {
    console.log("Getting all content");
    // Create a connection to the database database and version we want to use.
    const jateDb = await openDB("jate", 1);
    // Create a new transaction and specify the database and data privileges.
    const tx = jateDb.transaction("jate", "readonly");
    // Open up the desired object store.
    const store = tx.objectStore("jate");
    // Use the .get() method to get data in the database.
    const id = 1;

    const request = store.get({ id });

    const result = await request;

    console.log("All Data", result);

    return result;
  } catch (err) {
    console.error(err);
  }
};

initdb();