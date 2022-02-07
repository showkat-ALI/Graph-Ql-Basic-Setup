import { buildSchema } from "graphql";
const schema = buildSchema(`
type Electronics{
    id:ID
    firstName:String
    lastName:String
    components:[components]!
} 
type components{
    component:String
}
type Query{
    electronics:Electronics
}
`);
export default schema;
