import  { Schema, model, Model } from "mongoose";
import Cat from "../cat";

const catSchema : Schema = new Schema({name : String, age: Number});
const CatEntity = model('Cat', catSchema);

export default CatEntity;

