const formatIdToString = (str: number): string => {
  const retorno = `${`000${str}`.slice(-3, -1)}${`0${str}`.slice(-1)}`;

  return retorno;
};

export default formatIdToString;
