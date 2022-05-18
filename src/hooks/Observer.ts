import { Observer as MobxObserver } from 'mobx-react-lite';
import { FC } from 'react';

const Observer = MobxObserver as FC<{ children: () => any }>;

export default Observer;
