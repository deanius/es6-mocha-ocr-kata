module.exports = (FileReader, AccountNumber) => {
  return {
    read(filePath) {
      return FileReader.read(filePath).map( rawAccountNum => new AccountNumber(rawAccountNum) )
    }
  }
}
