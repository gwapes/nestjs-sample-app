export type Jedi = {
    name: string,
    force: Force,
    lightsaber?: string,
    homePlanet?: string
}

export type Force = {
    common: ForceCommon,
    fromLore: ForceLore,
    order: ForceOrder
}

export type ForceSide = 'light' | 'dark'
export enum ForceCommon {
    light = 'Light Side',
    dark = 'Dark Side'
}

export enum ForceLore {
    light = 'Ashla',
    dark = 'Bogan'
}

export enum ForceOrder {
    light = 'Jedi',
    dark = 'Sith'
}

export const forceFactory = (side: ForceSide): Force => {
    return {
        common: ForceCommon[side],
        fromLore: ForceLore[side],
        order: ForceOrder[side]
    } as Force
};
