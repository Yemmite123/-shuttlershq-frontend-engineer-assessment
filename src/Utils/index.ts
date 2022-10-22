
export function getAbsoluteUrl(path: string) {
    return process.env.PUBLIC_URL + path;
}

export function getIcon(name: string) {
    return process.env.PUBLIC_URL + `/media/icons/${name}`;
}

export function getImage(name: string) {
    return process.env.PUBLIC_URL + `/media/images/${name}`;
}

export function getLogo(name: string) {
    return process.env.PUBLIC_URL + `/media/logos/${name}`;
}


export function getSVGIcon(name: string) {
    return process.env.PUBLIC_URL + `/media/icons/svg/${name}`;
}

