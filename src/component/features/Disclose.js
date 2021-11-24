import { Disclosure, Transition } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';
import { questionAnswer } from '../data/questionanswer';

export default function Disclose() {
  return (
    <div className="w-4/5 pt-16">
      <div className="w-full max-w-md p-2 mx-auto flex flex-col gap-y-4 bg-white rounded-2xl border border-gray-300">
        {questionAnswer.map((item) => {
          return (
            <Disclosure key={item.id}>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-primary bg-orange-100 rounded-lg hover:bg-orange-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-75">
                    <span className="w-4/5">{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? 'transform rotate-180' : ''
                      } w-5 h-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    <span>{item.answer}</span>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          );
        })}
      </div>
    </div>
  );
}
