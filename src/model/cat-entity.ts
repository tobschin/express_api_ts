import  { Schema, model } from "mongoose";

const catSchema : Schema = new Schema({name : String, age: Number});
const CatEntity = model('Cat', catSchema);

export default CatEntity;

