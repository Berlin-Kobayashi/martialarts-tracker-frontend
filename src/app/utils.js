export function getIdsByNames(names, data) {
    let ids = [];
    names.map((name) => {
        Object.keys(data).map((id) => {
            if (data[id].data.name === name) {
                ids.push(data[id].id);
            }
        });
    });

    return ids;
}
