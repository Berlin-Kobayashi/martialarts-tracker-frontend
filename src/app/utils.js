export function getIdsByNames(names, data) {
    let ids = [];
    names.map((name) => {
        data.map((row) => {
            if (row.data.name === name) {
                ids.push(row.id);
            }
        });
    });

    return ids;
}
