const formatIdToString = (str: number): string => {
    return `${`000${str}`.slice(-3, -1)}${`0${str}`.slice(-1)}`;
};

export default formatIdToString;
