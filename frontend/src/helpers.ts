export function maskInputToBrazilReal(e: any) {
    let inputValue = e.target.value.replace(/\D/g, "");
    inputValue = (inputValue / 100).toFixed(2) + "";
    inputValue = inputValue.replace(".", ",");
    inputValue = inputValue.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
    inputValue = inputValue.replace(/(\d)(\d{3}),/g, "$1.$2,");
    e.target.value = `R$ ${inputValue}`;
}

export function transformToBRL(amount: number) {
    return (amount / 100).toLocaleString("pt-br", { minimumFractionDigits: 2 });
}

export function transformToFixedTwo(value: number) {
    return value.toFixed(2);
}

export function getDateTimeBrazil() {
    let date = new Date().toLocaleDateString("pt-BR");
    let time = new Date().toLocaleTimeString("pt-BR");
    return `${date} ${time}`;
}

export function transformStringInputValueMaskToNumber(value: string): number {
    value = value.replace("R$ ", "");
    value = value.replace(",", "");
    value = value.replace(".", "");
    return Number(value);
}

export function getTransactionCategoryIcon(category: string) {
    switch (category) {
        case "SALARY":
            return 'bi-building-fill-add';
        case "FREELANCER":
            return 'bi-file-earmark-medical'
        case "FOOD":
            return 'bi-apple'
        case "SUBSCRIPTIONS":
            return 'bi-bookmark-star'
        case "SHOP":
            return 'bi-shop'
        case "ENTERTAINMENT":
            return 'bi-controller'
        case "TRANSPORT":
            return 'bi-car-front-fill'
        case "HOUSE":
            return 'bi-house-door'
        case "SERVICES":
            return 'bi-tools'
        case "FIXED_INCOME":
            return 'bi-graph-up-arrow'
        case "VARIABLE_INCOME":
            return 'bi-graph-down-arrow'
        case "CRIPTOCURRENCIES":
            return 'bi-currency-bitcoin'
        case "OTHERS":
            return 'bi-gem'
        default:
            return "";
    }
}
