import http from 'http'
import fetch from 'node-fetch'
const server = http.createServer((req, res) => {
    const url = req.url;
    let tableData = "<table border='1'><tr><th>Name</th><th>height</th><th>birth_year</th><th>gender</th><th>url</th></tr>";
    if (url === '/') {
        res.write("<h1>Welcome</h1> <img src=https://dummyimage.com/600x400/000/fffff>");
        res.end();
        return;
    }
    if (url === '/List') {
        fetch("https://swapi.dev/api/people")
            .then((res) => res.json())
            .then((data) => {
                console.log(data.results);
                createData(data.results);
                res.write(tableData);
                res.end();
                return;
            });
    }
    function createData(data) {
        data.forEach((element) => {
            tableData += `<tr><td>${element.name}</td><td>${element.height}</td><td>${element.birth_year}</td><td>${element.gender}</td><td>${element.url}</td></tr>`
        });
        tableData += `</table>`;
    }
    if  (url === '/errorpage') {
        res.write("Page Not Found");
        res.end();
        return;
    }
}).listen(8090, () => console.log(`Server listening on port 8090`));

















