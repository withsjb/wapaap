import React, { useState } from 'react'
import Layout from '../../components/Layout'
import Image from 'next/image'
import bcryptPic from '../../public/bcrypt.jpg'
import bcrypt from 'bcryptjs'
import axios from 'axios'
export default function PasswordHashScreen() {
 const [password, setPassword] = useState('supersecretpassword')
 const [hpassword, setHpassword] = useState('')
 const [password1, setPassword1] = useState('supersecretpassword')
 const [result, setResult] = useState(false)
 const [result1, setResult1] = useState(false)
 const submitHandler = async () => {
  let hash = bcrypt.hashSync(password, 8)
  setHpassword(hash)
 }
 const loginHandler = async () => {
  await axios
   .post('/api/crypto/passwordHash', { password, password1 })
   .then((res) => {
    setResult1(res.data.result)
   })
  const res = await bcrypt.compareSync(password1, hpassword)
  setResult(res)
 }
