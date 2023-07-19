'use client';

import { hasValues, useCartStore, useModal } from '@/lib';
import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';
import { Fragment } from 'react';
import { Button, Text } from '../atoms';
import { CartProduct } from './cart-product';

interface Props {}

const CartModal = (props: Props) => {
  const handleClose = useModal().close;
  const currentModal = useModal().currentModal;
  const cartItems = useCartStore().cartItems;

  return (
    <Transition show={currentModal === 'cart-modal'} as={Fragment}>
      <Dialog as='div' className='relative z-50' onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter='ease-in-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black/40' aria-hidden='true' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-hidden'>
          <div className='flex p-8 backdrop-blur-sm'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel
                as='div'
                className='relative w-full  transform text-black transition-all'
              >
                <section className='mt-36 md:mx-auto md:max-w-[min(112rem,100%-1.6rem*2)]'>
                  <div className='mx-auto flex flex-col gap-10 rounded-brand bg-white p-10 shadow-xl sm:mx-0 sm:ml-auto sm:max-w-xl'>
                    <div className='flex items-center justify-between'>
                      <Dialog.Title
                        className={
                          'text-500 font-bold leading-200 tracking-300'
                        }
                      >
                        <span>Cart</span>&nbsp;<span>&#40;3&#41;</span>
                      </Dialog.Title>

                      <Button
                        variant={'text-primary/50'}
                        text={'link'}
                        size={'none'}
                        weight={'medium'}
                        className='underline'
                        onClick={() => {
                          console.log('clicked');
                        }}
                      >
                        Remove all
                      </Button>
                    </div>
                    <ul className='flex flex-col gap-6'>
                      {hasValues(cartItems) ? (
                        cartItems.map((item) => {
                          return (
                            <li
                              key={item?.slug}
                              className='flex items-center gap-4'
                            >
                              <CartProduct item={item} type='cart' />
                            </li>
                          );
                        })
                      ) : (
                        <li className='flex items-center gap-4'>
                          No items to show
                        </li>
                      )}
                    </ul>
                    <div className='flex items-center justify-between'>
                      <Text
                        as='h5'
                        variant={'primary/50'}
                        className='uppercase'
                      >
                        Total
                      </Text>
                      <Text
                        as='p'
                        variant={'primary'}
                        size={'sm'}
                        weight={'bold'}
                      >
                        $ 5,396
                      </Text>
                    </div>
                    <Button className='justify-center' asChild>
                      <Link href={'/checkout'}>Checkout</Link>
                    </Button>{' '}
                  </div>
                </section>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export { CartModal };
