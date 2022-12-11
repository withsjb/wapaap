import forge from 'node-forge'

const submitHandler = async () => {
  axios.post("/api/crypto/hash", { algorithm, inputText }).then((res) => {
    setHashValue2(res.data.hashValue);
  });

  
const computehash = (algorithm, inputText) => {
  switch (algorithm) {
    case "md5":
      // eslint-disable-next-line no-case-declarations
      let md1 = forge.md.md5.create();
      md1.update(inputText);
      setHashValue1(md1.digest().toHex());
      return;
    case "sha1":
      // eslint-disable-next-line no-case-declarations
      let md2 = forge.md.sha1.create();
      md2.update(inputText);
      setHashValue1(md2.digest().toHex());
      return;
    case "sha256":
      // eslint-disable-next-line no-case-declarations
      var md3 = forge.md.sha256.create();
      md3.update(inputText);
      setHashValue1(md3.digest().toHex());
      return;
    case "sha384":
      // eslint-disable-next-line no-case-declarations
      var md4 = forge.md.sha384.create();
      md4.update(inputText);
      setHashValue1(md4.digest().toHex());
      return;
    case "sha512":
      // eslint-disable-next-line no-case-declarations
      var md5 = forge.md.sha512.create();
      md5.update(inputText);
      setHashValue1(md5.digest().toHex());
      return;
  }
};