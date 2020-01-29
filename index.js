const user = {
    id: 20,
    name: "John Dow",
    role: "QA",
    salary: 100
};

const apiTemplatesSet1 = [
    "/api/items/%id%/%name%",
    "/api/items/%id%/%role%",
    "/api/items/%id%/%salary%"
];

const apiPathes = apiTemplatesSet1.map(apiPathTemplate => {
    return getApiPath(user, apiPathTemplate);
});

function getApiPath(obj, template) {
    const templateAsString = template.split('%');
    const tempResult =  templateAsString.map((item)=> obj.hasOwnProperty(item) ? encodeURIComponent(obj[item]) : item );
    return tempResult.join("");
}

const expected = ["/api/items/20/John%20Dow","/api/items/20/QA","/api/items/20/100"];

if(JSON.stringify(apiPathes) === JSON.stringify(expected)){
    console.log('Task Complited');
} else{console.log('Wrong')}
