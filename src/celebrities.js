import { dbConnect } from "./dbConnect.js";

function handleError(err, res) {
    console.error(err)
    res.status(500).send(err)
  }

export function getCeleb(req, res){
    //connect
    const db = dbConnect()
    //get all docs from the celeb collection
    db.collection("celebrities")
    .get()
    .then((collection) => {

        const celeb = collection.docs.map((doc) => doc.data())
        res.send(celeb)
        })
        .catch((err) => handleError(err,res))
}

export function createCeleb(req, res){
  const newCeleb = req.body

  const db = dbConnect()

  db.collection("celebrities")
  .add(newCeleb)
  .then((doc) => {
    res.status(201).send({
      success: true,
      id: doc.id,
    })
  })
  .catch((err) => handleError(err, res))
}