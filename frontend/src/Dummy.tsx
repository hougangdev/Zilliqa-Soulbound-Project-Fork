import { useState } from "react";
import cn from "classnames";
<<<<<<< HEAD
import { useZilliqa } from "./providers/ZilliqaProvider";
import Button from "./components/Button";
import Input from "./components/Input";
=======
import Navbar from "./components/Navbar";
>>>>>>> 86fda5b (added navbar, walletProvider)

const Dummy = () => {
  const { zilliqa } = useZilliqa();
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState("-");
  const [isLoading, setIsLoading] = useState(false);

  const getWalletBalance = async () => {
    setIsLoading(true);
    const res = await zilliqa.blockchain.getBalance(address);
    setBalance(res.result.balance);
    setIsLoading(false);
  };

  return (
<<<<<<< HEAD
    <div className={cn("mt-8", "text-center")}>
      <Input
=======
    <div className={cn( "text-center")}>
      <Navbar/>
      <input
        className={cn(
          "form-control",
          "px-3",
          "py-1.5",
          "text-base",
          "font-normal",
          "text-gray-700",
          "bg-white bg-clip-padding",
          "border border-solid border-gray-300",
          "rounded",
          "transition",
          "ease-in-out",
          "m-0",
          "focus:text-gray-700",
          "focus:bg-white",
          "focus:border-blue-600",
          "focus:outline-none"
        )}
>>>>>>> 86fda5b (added navbar, walletProvider)
        onChange={(e) => setAddress(e.target.value)}
        value={address}
      />{" "}
      (try: 0xa6BdD5f222f678808eCC4E34Bc34E5f0c7204044)
      <p>Balance: {isLoading ? "Loading..." : balance}</p>
      <Button onClick={() => getWalletBalance()}>Get Balance</Button>
    </div>
  );
};

export default Dummy;
