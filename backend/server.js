var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema, GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLGraphQLList, GraphQLNonNull, GraphQLList } = require('graphql');


const dataBase = require('./fake_data.json')

// Define the schema (with resolver)
const times = new GraphQLObjectType({
  name: 'Times',
  description: 'Times for the section',
  fields: {
    day: {
      type: GraphQLNonNull(GraphQLString)
    },
    start: {
      type: GraphQLNonNull(GraphQLInt)
    },
    end: {
      type: GraphQLNonNull(GraphQLInt)
    },
    duration: {
      type: GraphQLNonNull(GraphQLInt)
    },
    location: {
      type: GraphQLString
    },
  }
})

const sections = new GraphQLObjectType({
  name: 'Sections',
  description: 'The description of a course',
  fields: {
    code: {
      type: GraphQLString
    },
    instructors: {
      type: GraphQLList(GraphQLString)
    },
    times: {
      type: GraphQLList(times)
    }
  }
})

const course = new GraphQLObjectType({
  name: 'Course',
  description: 'just a course',
  fields: {
    id: {
      type: GraphQLNonNull(GraphQLString)
    },
    code: {
      type: GraphQLNonNull(GraphQLString)
    },
    name: {
      type: GraphQLNonNull(GraphQLString)
    },
    description: {
      type: GraphQLNonNull(GraphQLString)
    },
    division: {
      type: GraphQLNonNull(GraphQLString)
    },
    department: {
      type: GraphQLNonNull(GraphQLString)
    },
    prerequisites: {
      type: GraphQLNonNull(GraphQLString)
    },
    exclusions: {
      type: GraphQLNonNull(GraphQLString)
    },
    level: {
      type: GraphQLNonNull(GraphQLInt)
    },
    term: {
      type: GraphQLNonNull(GraphQLString)
    },
    breadths: {
      type: GraphQLList(GraphQLInt)
    },
    size: {
      type: GraphQLInt
    },
    enrolment: {
      type: GraphQLInt
    },
    sections: {
      type: GraphQLNonNull(GraphQLList(sections))
    },
  }
})

const rootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'This is the root query',
  fields: {
    getAllCourses: {
      type: GraphQLList(course),
      resolve: () => dataBase
    },
    getCourseByCode: {
      type: course,
      args: {
        code: {type: GraphQLString}
      },
      resolve: (_, {code}) => dataBase.find(course => course.code == code)
    }

  }
})

const schema = new GraphQLSchema ({
  query:rootQuery
})

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');
