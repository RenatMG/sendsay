export const formatValue = (json) => {
    if (typeof json !== 'string') {
        json = JSON.stringify(json, null, 2);
    }
    return json
};