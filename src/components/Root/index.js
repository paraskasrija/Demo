import React from 'react';
import { _view } from '../View';
import styles from './styles';

export const _root = props => <_view style={styles.container}>{props.children}</_view>;
