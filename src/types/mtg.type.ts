export type Card = {
    name: string,
    color: COLOR,
    type: TYPE
}

export enum COLOR {
    GREEN = 'green',
    RED = 'red',
    BLUE = 'blue',
    WHITE = 'white',
    BLACK = 'black',
    MULTI = 'multi-colored',
    LESS = 'colorless'
}

export enum TYPE {
    LAND = 'land',
    CREATURE = 'creature',
    SORCERY = 'sorcery',
    INSTANT = 'instant',
    ARTIFACT = 'artifact',
    ENCHANT = 'enchantment',
    WALKER = 'planeswalker'
}
