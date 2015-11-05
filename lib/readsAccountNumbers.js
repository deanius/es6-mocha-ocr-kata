module.exports = (AccountNumber) => {
  return {
    read(filePath) {
      return [new AccountNumber()]
    }
  }
}
