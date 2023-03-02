import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image';

import { CartButton } from "../CartButton";

import { X } from 'phosphor-react';

import { CartClose, CartContent, CartProduct, CartProductDetails, CartProductImage } from './styles';

export function Cart() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CartButton />
      </Dialog.Trigger>

      <Dialog.Portal>
        <CartContent>
          <CartClose>
            <X size={24} weight='bold' />
          </CartClose>

          <h2>Sacola de compras</h2>

          <section>
            {/* <p>Parece que seu carrinho está vazio :(</p> */}

            <CartProduct>
              <CartProductImage>
                <Image
                  width={100}
                  height={93}
                  alt=''
                  src='https://s3-alpha-sig.figma.com/img/387d/13ce/de131bd1ccf9bbe6b2331e88d3df20cd?Expires=1678665600&Signature=SwNVIE8XKUnjA~0JpRZsjwphpftQsnVQSqcf8zuDuM9f~R58CSI9Y-6euO1MKoiiWj-v7qg875wZkhwurE2OnnL3mo9ctlAGdfp0S43bFSHBeGIXL7D7KKYhQBPF46nj6gxadJerovbR-0FfzPg9gMbHCf5Isx~7UAnlpEX5~HdOnPsrE8zpz22cCH3ZjRBUdBK8mRnlaWmQbNHAhaNN5y6CkD2gs9HtNCOPyAXSw9qVo4GukMB1be8anIpwtzUaHnjy9GfSe6-LtxBbsKusfH4SGEclZ9ocxsMKMpTL-ObN-czsr5wGCGiifHbJMaX7sPJRbnOnd20B9fdeLjCSbw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                />
              </CartProductImage>

              <CartProductDetails>
                <p>Produto 1</p>
                <strong>R$ 50,00</strong>
                <button>Remover</button>
              </CartProductDetails>
            </CartProduct>
          </section>
        </CartContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}