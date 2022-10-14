import Head from "next/head";
import Link from "next/link";
import { React, useContext, useEffect, useState } from "react";
import { Store } from "../utils/Store";

export default function Layout({ title, children }) {
  const { state } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0); //CART에있는 숫자를 변수로 지정 0은 초기값 USEEFFECT에서 바꿀것 위에 const로 지정된 함수들은 바꿀수없어서 밑에 usestate를 사용해서 숫자를 바꾸는것 itemcount는 숫자가 바껴야되기때문 cartItemsCount 이부분은 바뀔수없기에 뒤에 set으로 하나 더 선언해서 저걸로 바꾸는듯
  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]); //함수임 함수내용을 직접써놓죠 reduce는 유즈임팩트는 레이아웃에서 뭔가 이벤트가 발생했을때 이 함수를 진행하겠다 cartitems가 바꼈을때 이것을 다시 실행하겠다 카트에 아이템에 있는 모든 갯수를 합산하겠다 합산해서 위에 스테이트에 있는 cartitemscount에서 적용시킴

  return (
    <>
      <Head>
        <title>{title ? title + " - NextShop" : "NextShop"}</title>
        <meta name="description" content="Nextjs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex flex-row h-12 items-center px-4 justify-between shadow-md bg-slate-200">
            <Link href="/">
              <a className="text-lg font-bold">NextShop</a>
            </Link>
            <div>
              <Link href="/cart">
                <a className="p-2">
                  Cart
                  {cartItemsCount > 0 && (
                    <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                      {cartItemsCount}
                    </span>
                  )}
                </a>
              </Link>
              <Link href="/login">
                <a className="p-2">Login</a>
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner bg-red-100">
          <p>Copyright &copy; 2022 Nextshop</p>
        </footer>
      </div>
    </>
  );
}
