'use client';

import { FC } from 'react';
import { useTranslations } from 'next-intl';

import { InstructionProps } from '../../types.ts';

const Instruction: FC<InstructionProps> = ({ title, description }) => (
  <div className="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 dark:bg-gray-700">
    <div className="flex-shrink-0">
      <div className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-indigo-500 rounded-md">
        <svg width="20" height="20" fill="currentColor" className="w-6 h-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
          <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z" />
        </svg>
      </div>
    </div>
    <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
      {title}
    </h3>
    <p className="py-4 text-gray-500 text-md dark:text-gray-300">
      {description}
    </p>
  </div>
);

const Instructions = () => {
  const t = useTranslations('MainPage');
  const instructionSteps: readonly string[][] = [[t('instructions.firstStep.title'), t('instructions.firstStep.description')], [t('instructions.secondStep.title'), t('instructions.secondStep.description')], [t('instructions.thirdStep.title'), t('instructions.thirdStep.description')]];
  return (
    <div className='my-20 mx-10'>
      <h2 className="text-center font-semibold text-xl leading-10 text-indigo-500 uppercase">
        <a id={t('anchors.instructions')}>{t('instructions.title')}</a>
      </h2>
      <div className="flex-wrap items-center justify-center gap-8 text-center sm:flex">
        {instructionSteps
          .map((instr) => {
            const [title, description] = instr;
            return (
              <Instruction
                title={title} description={description} key={instructionSteps.indexOf(instr)} />
            );
          })}
      </div>
    </div>
  );
};

export default Instructions;
