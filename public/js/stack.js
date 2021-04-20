
let input = SimpleMaskMoney.setMask('#invest-amount',{
    prefix: '₦',
    suffix: '',
    fixed: true,
    fractionDigits: 0,
    decimalSeparator: ',',
    thousandsSeparator: ',',
    emptyOrInvalid: () => {
      return this.SimpleMaskMoney.args.fixed
        ? `0${this.SimpleMaskMoney.args.decimalSeparator}00`
        : `_${this.SimpleMaskMoney.args.decimalSeparator}__`;
    }
});