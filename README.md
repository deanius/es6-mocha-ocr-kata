# ocr-kata (ES2015)

This is the OCR kata (http://codingdojo.org/cgi-bin/index.pl?KataBankOCR).
A discovery-testing style is used to flesh out the objects needed from
top-to-bottom fashion.

Here is the layout of objects we will build.

```

ReadsAccountNumbers

  ReadsFile: filePath => [ [top, middle, bottom], ... ]

  ParsesAccountNumber: [top, middle, bottom] => digitString

    ParsesDigit: [top, middle, bottom] => singleDigit

```
