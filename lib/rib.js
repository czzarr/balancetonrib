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

module.exports.checksum = function (RIB, next) {
  var accountNumber = transform(RIB.accountNumber)
  if ((parseInt(RIB.bank, 10) * 89
       + parseInt(RIB.counter, 10) * 15
       + parseInt(accountNumber, 10) * 3
       + RIB.key)
       % 97
       === 0) {
         next()
  } else {
    next(new Error('Ce RIB est invalide'))
  }
} 
