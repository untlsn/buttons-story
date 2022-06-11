import { Observer as MobxObserver } from 'mobx-react-lite';
import { FC } from 'react';

const O = MobxObserver as FC<{ children: () => any }>;

export default O;
