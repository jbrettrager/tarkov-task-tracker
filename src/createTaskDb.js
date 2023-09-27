export default async function createTaskDb() {
  try {
    const response = await fetch("https://api.tarkov.dev/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: `{
            tasks{
              id
              name
              experience
              wikiLink
              taskImageLink
              minPlayerLevel
              kappaRequired
              objectives {
                id
                type
                description
                optional
              }
              neededKeys {
                keys{
                  name
                  shortName
                  gridImageLink
                }
              }
                startRewards{
                items{
                  item {
                    gridImageLink
                    name
                    shortName
                  }
                  quantity
                }
              }
              finishRewards{
                items{
                  item {
                    gridImageLink
                    name
                    shortName
                  }
                  quantity
                }
              }
              trader{
                name
                imageLink
              }
              map{
                name
              }
             taskRequirements
              {
                task {
                  name
                }
              }
              
            }
            
            
            }`,
      }),
    });
    const result = await response.json();
    console.log(result.data.tasks);
  } catch (error) {
    console.error("Error fetching data", error);
  }
}
