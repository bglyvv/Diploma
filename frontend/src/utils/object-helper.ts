export const deepOmit = (input: any, excludes: Array<number | string>): any => {
    if (!input) {
        return input;
    }

    return Object.entries(input).reduce((nextInput, [key, value]) => {
        const shouldExclude = excludes.includes(key);
        if (shouldExclude) return nextInput;

        if (Array.isArray(value)) {
            const arrValue = value;
            const nextValue = arrValue.map((arrItem) => {
                if (typeof arrItem === 'object' && arrItem !== null) {
                    return deepOmit(arrItem, excludes);
                }
                return arrItem;
            });
            nextInput[key] = nextValue;
            return nextInput;
        } else if (typeof value === 'object') {
            nextInput[key] = deepOmit(value, excludes);
            return nextInput;
        }

        nextInput[key] = value;

        return nextInput;
    }, {});
};

export const deepReplaceNullWithUndefined = (input: any): any => {
    if (!input) {
        return input;
    }

    const replacer = (key: string, value: any) => {
        if (key && value === null) {
            return undefined;
        }

        return value;
    };

    return JSON.parse(JSON.stringify(input, replacer));
};
