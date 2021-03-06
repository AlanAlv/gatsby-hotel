exports.createPages = async({ actions, graphql, reporter }) => {
    const result = await graphql(`
        query {
            allDatoCmsRoom {
                nodes {
                    slug
                }
            }
        }
    `);

    console.log(result.data.allDatoCmsRoom.nodes);

    if(result.errors){
        reporter.panic(`No results`, result.errors);
    }

    // if pages exists create file
    const rooms = result.data.allDatoCmsRoom.nodes;

    rooms.forEach(room => {
        actions.createPage({
            path: room.slug,
            component: require.resolve('./src/components/Rooms.js'),
            context: {
                slug: room.slug
            }
        })
    });
}