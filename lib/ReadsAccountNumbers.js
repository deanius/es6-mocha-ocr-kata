module.exports = function ReadsAccountNumbers (ReadsFile, AccountNumber) {
  return {
    read: (filePath) => {
      return new ReadsFile()
        .read(filePath)
        .map(rawAccountNum => new AccountNumber(rawAccountNum))
    }
  }
}
