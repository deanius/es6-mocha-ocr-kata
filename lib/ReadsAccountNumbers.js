module.exports = function ReadsAccountNumbers (ReadsFile, ParsesAccountNumber) {
  return {
    read: (filePath) => {
      return new ReadsFile()
        .read(filePath)
        .map(rawAccountNum => (new ParsesAccountNumber().parse(rawAccountNum)))
    }
  }
}
