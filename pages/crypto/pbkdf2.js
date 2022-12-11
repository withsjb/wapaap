import React, { useState } from "react";
import Layout from "../../components/Layout";
import forge from "node-forge";
import Image from "next/image";
import pbkdf2Pic from "../../public/pbkdf2.jpg";
import axios from "axios";
export default function Pbkdf2Screen() {
  const [password, setPassword] = useState("supersecretpassword");
  const [salt, setSalt] = useState("");
  const [iteration, setIteration] = useState(1000);
  const [keyLength, setKeyLength] = useState(16);
  const [key1, setKey1] = useState("");
  const [key2, setKey2] = useState("");
  const submitHandler = async () => {
    await axios
      .post("/api/crypto/pbkdf2", { password, salt, iteration, keyLength })
      .then((res) => {
        setKey2(res.data.key);
      });
    const derivedKey = forge.util.bytesToHex(
      forge.pkcs5.pbkdf2(password, salt, iteration, keyLength)
    );
    setKey1(derivedKey);
  };
  const randomSalt = () => {
    setSalt(forge.util.bytesToHex(forge.random.getBytesSync(16)));
  };
}
