import fs from 'fs/promises'

const jsonRaw = await fs.readFile('./data.json');
const data = JSON.parse(jsonRaw.toString());

const contents = [];

function buildChildren(c) {
    if (c.length === 0) return [];

    const res = [];

    c.forEach(cc => {
        res.push({
            title: cc.title,
            route: cc.route,
            part: cc.part,
            children: buildChildren(cc.children)
        })
    })

    return res;
}

data.forEach(d => {
    contents.push({
        title: d.title,
        route: d.route,
        children: buildChildren(d.children)
    })
});

await fs.writeFile('contents.json', JSON.stringify(contents));
