import React, { useState } from "react";
import Layout from "../../components/Layout";
import forge from "node-forge";
import Image from "next/image";
import hmacPic from "../../public/hmac.jpg";
import axios from "axios";

export default function HMACScreen() {
  const algorithms = ["md5", "sha1", "sha256", "sha384", "sha512"];
  const [algorithm, setAlgorithm] = useState("sha256");
  const [inputText, setInputText] = useState("input your message");
  const [secret, setSecret] = useState("비밀공유키=12345");
  const [hmacValue1, setHmacValue1] = useState("");
  const [hmacValue2, setHmacValue2] = useState("");
  const submitHandler = async () => {
    await axios
      .post("/api/crypto/hmac", { algorithm, inputText, secret })
      .then((res) => {
        setHmacValue2(res.data.hmacValue);
      });
    let hmac = forge.hmac.create();
    hmac.start(algorithm, secret);
    hmac.update(inputText);
    setHmacValue1(hmac.digest().toHex());
  };
  const randomSecret = () => {
    setSecret(forge.util.bytesToHex(forge.random.getBytesSync(16)));
  };
}
