function transform (accountNumber) {
  var replacements = {
    AJ: '1',
    BKS: '2',
    CLT: '3',
    DMU: '4',
    ENV: '5',
    FOW: '6',
    GPX: '7',
    HQY: '8',
    IRZ: '9'
  }
  var patterns = Object.keys(replacements)
  var chars  = accountNumber.split('')
  chars = chars.map(function (char) {
    for (var i=0; i<patterns.length; i++) {
      if (patterns[i].indexOf(char) !== -1) {
        return replacements[patterns[i]]
      }
    }
    return char
  })
  return chars.join('')
}

module.exports.checkRib = function (cRIB) {
  var bank = parseInt(cRIB.slice(0, 5), 10)
  var counter = parseInt(cRIB.slice(5, 10), 10)
  var accountNumber = parseInt(transform(cRIB.slice(10, 21)), 10)
  var key = parseInt(cRIB.slice(21,23), 10)
  return (( bank * 89
       + counter * 15
       + accountNumber * 3
       + key)
       % 97
       === 0)
}

module.exports.checkIban = function (iban) {
  var modifiedIban = iban.substring(4, iban.length) + iban.substr(0,4)
  var numIbanStr = modifiedIban.replace(/[A-Z]/g, function (a) { return a.charCodeAt(0) - 55 })
  while (2 < numIbanStr.length) {
    numIbanStr = '' + (numIbanStr.substr(0,9) % 97) + numIbanStr.substr(9)
  }
  return numIbanStr == 1;
}
