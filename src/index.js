const {ApolloServer} = require('apollo-server');
const mongoose = require('mongoose');
const typeDefs = require('./schemas/projectSchema');
const resolvers = require('./resolvers/projectResolver');

const startServer = async ()=>{
   await  mongoose.connect('mongodb+srv://ceurhernandezro:admin@task.lxkxc.mongodb.net/?retryWrites=true&w=majority&appName=task');
    const server = new ApolloServer({typeDefs,resolvers});
    server.listen().then(({url}) => {
        console.log(`Server ready at ${url}`);
    });

};

startServer();