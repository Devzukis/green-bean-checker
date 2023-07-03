import { useState } from "react";
import { useModal } from "../../../utils/ModalContext";
import { FiX } from "react-icons/fi";
import Button from "../../button";
import MintModalStyleWrapper from "./MintNow.style";
import mintImg from "../../../assets/images/icon/mint-img.png";
import hoverShape from "../../../assets/images/icon/hov_shape_L.svg";

import { useAccount, useContractRead, usePrepareContractWrite, useContractWrite } from 'wagmi';
import { useEffect } from "react";
import {
  maxSupplyCall,
  totalMintedCall,
  maxMintPerWalletCall,
  publicMintCostCall,
  publicMintCall
} from "../../../contract/config";
import { ethers } from "ethers";

const MintNowModal = () => {
  let [count, setCount] = useState(1);
  let [price, setPrice] = useState("0.001");
  const { mintModalHandle } = useModal();

  const [totalSupply, setTotalSupply] = useState(9999);
  const [totalMinted, setTotalMinted] = useState(4583);
  const [remainingItem, setRemainingItem] = useState(4583);
  const [maxMintPerWallet, setMaxMintPerWallet] = useState(2);
  const [publicMintCost, setPublicMintCost] = useState(0.15);

  const { address, isConnecting, isConnected, isDisconnected } = useAccount();

  const { data: maxSupplyData } = useContractRead({ ...maxSupplyCall })
  const { data: totalMintedData } = useContractRead({ ...totalMintedCall })
  const { data: maxMintPerWalletData } = useContractRead({ ...maxMintPerWalletCall })
  const { data: publicMintCostData } = useContractRead({ ...publicMintCostCall })

  const { config } = usePrepareContractWrite({
    ...publicMintCall,
    args: [count,
      {
        gasLimit: "285000",
        value: ethers.utils.parseEther(price.toString())
      }],
  })
  const { write } = useContractWrite(config)

  useEffect(() => {
    if (isConnected) {
      if (maxSupplyData) {
        setTotalSupply(maxSupplyData.toString());
      }
      if (totalMintedData) {
        setTotalMinted(totalMintedData.toString());
      }
      if (maxSupplyData && totalMintedData) {
        setRemainingItem(totalSupply - totalMinted);
      }
      if (maxMintPerWalletData) {
        setMaxMintPerWallet(maxMintPerWalletData.toString());
      }
      if (publicMintCostData) {
        setPublicMintCost(publicMintCostData.toString() / 1000000000000000000);
      }
    }
  })

  const decreaseCount = () => {
    count -= 1;
    price = publicMintCost * count;
    if (count < 1) {
      count = 1;
      setCount(1);
      setPrice(publicMintCost);
    }
    else {
      setCount(count);
      setPrice(price);
    }
  }

  const increaseCount = () => {
    count += 1;
    price = publicMintCost * count;
    if (count > maxMintPerWallet) {
      count = maxMintPerWallet;
      setPrice(publicMintCost * maxMintPerWallet);
    }
    else {
      setCount(count);
      setPrice(price);
    }
  }

  const mintNow = () => {
    write?.();
  }

  return (
    <>
      <MintModalStyleWrapper className="modal_overlay">
        <div className="mint_modal_box">
          <div className="mint_modal_content">
            <div className="modal_header">
              <h2>Collect YOUR NFT before end</h2>
              <button onClick={() => mintModalHandle()}>
                <FiX />
              </button>
            </div>
            <div className="modal_body text-center">
              <div className="mint_img">
                <img src={mintImg} alt="devzukis nft mint" />
              </div>
              <div className="mint_count_list">
                <ul>
                  <li>
                    <h5>Remaining</h5>
                    <h5>
                      {remainingItem}/<span>{totalSupply}</span>
                    </h5>
                  </li>
                  <li>
                    <h5>Price</h5>
                    <h5>{publicMintCost} ETH</h5>
                  </li>
                  <li>
                    <h5>Quantity</h5>
                    <div className="mint_quantity_sect">
                      <button onClick={() => decreaseCount()}>-</button>
                      <input
                        type="text"
                        id="quantity"
                        value={count}
                        onChange={(e) => setCount(e.target.value)}
                      />
                      <button onClick={() => increaseCount()}>+</button>
                    </div>
                    <h5>
                      <span>{parseFloat(price).toFixed(3)}</span> ETH
                    </h5>
                  </li>
                </ul>
              </div>
              <div className="modal_mint_btn">
                <Button lg variant="mint" onClick={() => mintNow()}>
                  Mint Now
                </Button>
              </div>
            </div>

            <div className="modal_bottom_shape_wrap">
              <span className="modal_bottom_shape shape_left">
                <img src={hoverShape} alt="devzukis nft hover shape" />
              </span>
              <span className="modal_bottom_shape shape_right">
                <img src={hoverShape} alt="devzukis nft hover shape" />
              </span>
            </div>
          </div>
        </div>
      </MintModalStyleWrapper>
    </>
  );
};

export default MintNowModal;
