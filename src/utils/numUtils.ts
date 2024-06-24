export function formatCurrency(value: number) {
    const formatObj = new Intl.NumberFormat("en-US", {
        style: "currency", 
        currency: "USD"
    });    
    
    return formatObj.format(value); 
}