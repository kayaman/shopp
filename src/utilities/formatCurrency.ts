const CURRENCY_FOORMATTER = new Intl.NumberFormat(undefined, {
  currency: 'USD',
  style: 'currency',
})

export function formatCurrency(number: number) {
  return CURRENCY_FOORMATTER.format(number)
}
