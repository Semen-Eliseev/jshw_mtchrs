export function sortingHealth(items) {
    if (items.length >1) {
       const sorted = items.sort((a, b) => b.health - a.health);
       return sorted;
    }else {
        return ./items;
    }

}; 