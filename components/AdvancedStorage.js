import { Input, Button } from "web3uikit";
import { abi, contractAddresses } from "../constants";
import { useWeb3Contract, useMoralis } from "react-moralis";
import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function AdvancedStorage() {
  const { chainId: chainIdHex, isWeb3Enabled } = useMoralis();
  const chainId = parseInt(chainIdHex);
  const storageAddress =
    chainId in contractAddresses ? contractAddresses[chainId][0] : null;
  const [idd, setId] = useState("");
  const [getf, setGet] = useState("");

  const { runContractFunction: add } = useWeb3Contract({
    abi: abi,
    contractAddress: storageAddress,
    functionName: "add",
    params: { _id: idd },
  });
  const { runContractFunction: get } = useWeb3Contract({
    abi: abi,
    contractAddress: storageAddress,
    functionName: "get",
    params: { _index: getf },
  });
  const { runContractFunction: getAll } = useWeb3Contract({
    abi: abi,
    contractAddress: storageAddress,
    functionName: "getAll",
    params: {},
  });

  async function getfuncValue() {
    const g = await get();
    document.getElementById("data").innerHTML = g;
  }
  async function getAllValue() {
    const g = await getAll();
    document.getElementById("all-data").innerHTML = g;
  }

  return (
    <div>
      <div className={styles.parent}>
        <div className={styles.child}>
          <Input
            label="Number"
            name="Test text Input"
            onBlur={function noRefCheck() {}}
            value={idd}
            onChange={({ target }) => setId(target?.value)}
          />
          <br />
          <div>
            <Button
              onClick={async function () {
                await add();
                console.log(idd);
              }}
              text="Add to Array"
            />
            <br />
          </div>
          <div>
            <Input
              label="Number"
              name="Test text Input"
              onBlur={function noRefCheck() {}}
              value={getf}
              onChange={({ target }) => setGet(target?.value)}
            />
            <br />
            <Button
              onClick={async function () {
                await getfuncValue();
              }}
              text="Get From Array"
            />
          </div>
        </div>
        Data:
        <span id="data"></span>
        <br />
        <br />
        <div className={styles.parentDown}>
          <div className={styles.down}>
            <Button
              onClick={async function () {
                await getAllValue();
              }}
              text="Get Complete Array"
            />
            All Data:
            <span id="all-data"></span>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}
