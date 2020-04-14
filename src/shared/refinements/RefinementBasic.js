import React from 'react';
import { RefinementList } from 'react-instantsearch-dom';

import { toggablePanel } from './../toggables/ToggablePanel';

export const RefinementBasic = toggablePanel((props) => (
  <RefinementList {...props} {...props.extra} />
));
