import express from 'express'
import mongoose, { Schema } from 'mongoose';
import cors from "cors"
import "dotenv/config"

const app = express()
app.use(express.json())
const port = process.env.PORT

app.use(cors())

mongoose.connect(process.env.DB_KEY)
.then(() => console.log('Connected!'))
.catch(err => console.log(err.message))

const professionsSchema = new Schema({
  name: String,
  desc:String,
  icon:String
});

const professionsModel = mongoose.model('Profession', professionsSchema);

app.post('/', async (req, res) => {
  try {
    const {name, desc, icon} = req.body
    const newItem = professionsModel({name, desc, icon})
    await newItem.save()
    res.send(newItem)
    
  } catch (error) {
  res.send('failed to post')
    
  }
})

app.delete('/:id', async (req, res) => {
  try {
    const {id} = req.params
    const item = await professionsModel.findByIdAndDelete(id)
    res.send(`deleted ${item}`)
  } catch (error) {
    res.send('failed to delete')
  }
})


app.get('/', async (req, res) => {
  try {
    const {name, desc, icon} = req.body
    const newItem = await professionsModel.find({})
    res.send(newItem)
    
  } catch (error) {
  res.send('failed to get')
    
  }
})

app.get('/:id', async (req, res) => {
  try {
    const {id} = req.params
    const item = await professionsModel.findById(id)
    res.send(item)
  } catch (error) {
    res.send('failed to get')
  }
})

app.listen(port, () => {
  console.log(`running on ${port} port`)
})