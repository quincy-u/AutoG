var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');



// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
    type Times{
        day: String!
        start: Int!
        end: Int!
        duration: Int!
        location: String
    }
    type Sections{
        code: String
        instructors: [String]
        times: [Times!] 
    }
    type Course {
        id: String!
        code: String!
        name: String!
        description: String!
        division: String!
        department: String!
        prerequisites: String!
        exclusions: String!
        level: Int!
        term: String!
        breadths: [Int!]
        size: Int
        enrolment: Int
        sections: [Sections]!
    }
    type Query {
        hello: String
        getCourses(dep: String!): [Course!]
    }
    
`);

// The root provides a resolver function for each API endpoint
var root = {
    hello: () => {
        return 'Hello world!';
    },
    getCourses: (args) => {
        console.log(args)
        var someObject = require('./fake_data.json')
        console.log(someObject)
        return []
    }
};

var app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');
