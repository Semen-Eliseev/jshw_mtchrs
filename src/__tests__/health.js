import { sortingHealth } from '../health.js';

test('sorts by health descending', () => { 
    const input = [ 
        { name: 'мечник', health: 10 },
        { name: 'маг', health: 100 }, 
        { name: 'лучник', health: 80 },
    ];
    expect(sortingHealth(input)).toEqual([ 
        { name: 'маг', health: 100 }, 
        { name: 'лучник', health: 80 }, 
        { name: 'мечник', health: 10 }
    ]);  
});

test('sorts by health descending', () => { 
    const input = [ 
        { name: 'мечник', health: 10 },
             
    ];
    expect(sortingHealth(input)).toEqual([ 
             
        { name: 'мечник', health: 10 }
    ]);  
});