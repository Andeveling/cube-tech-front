export const currencyUSDFormatter = (value: string | number) => {
  if (Number(value)) {
    const format = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(Number(value));
    return format;
  } else {
    return value;
  }
};

export const currencyCOPFormatter = (value: string | number) => {
  if (Number(value)) {
    const format = new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(Number(value));
    return format;
  } else {
    return value;
  }
};
